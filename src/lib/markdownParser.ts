import type { Option, Question, QuestionType } from '../types/quiz';

export interface ParseResult {
  questions: Question[];
  errors: string[];
}

/**
 * Chuẩn hóa khoảng trắng để so khớp
 */
export function normalizeWhitespace(str: string): string {
  return str.replace(/\r\n/g, '\n').replace(/[ \t]+/g, ' ').trim();
}

/**
 * Parse một khối câu hỏi đơn lẻ từ markdown
 */
function parseQuestionBlock(
  rawBlock: string,
  deck: 'review' | 'exam1' | 'exam2',
  expectedNumber?: number
): { question?: Question; errors: string[] } {
  const errors: string[] = [];
  const lines = rawBlock.replace(/\r\n/g, '\n').split('\n');

  // Tìm dòng tiêu đề
  let number = expectedNumber;
  let lineIdx = 0;

  // Bỏ qua các dòng trống đầu
  while (lineIdx < lines.length && !lines[lineIdx].trim()) {
    lineIdx++;
  }

  if (lineIdx < lines.length) {
    const headingMatch = lines[lineIdx].match(/^#{2,4}\s+Question\s+(\d+)\s*$/i);
    if (headingMatch) {
      number = parseInt(headingMatch[1], 10);
      lineIdx++;
    }
  }

  if (number === undefined) {
    return { errors: ['Không tìm thấy số thứ tự câu hỏi trong block'] };
  }

  // Tách stem cho đến khi gặp dòng Select one / Select one or more
  const stemLines: string[] = [];
  let type: QuestionType | null = null;

  while (lineIdx < lines.length) {
    const line = lines[lineIdx];
    const selectOneMatch = line.match(/^\*\*Select one:\*\*\s*$/i);
    const selectMultipleMatch = line.match(/^\*\*Select one or more:\*\*\s*$/i);

    if (selectOneMatch) {
      type = 'single';
      lineIdx++;
      break;
    } else if (selectMultipleMatch) {
      type = 'multiple';
      lineIdx++;
      break;
    } else {
      stemLines.push(line);
      lineIdx++;
    }
  }

  if (!type) {
    errors.push(`Câu ${number} (${deck}): Thiếu dòng chỉ định loại câu hỏi (**Select one:** hoặc **Select one or more:**)`);
    return { errors };
  }

  const stem = stemLines.join('\n').trim();
  if (!stem) {
    errors.push(`Câu ${number} (${deck}): Stem câu hỏi trống`);
  }

  // Tách các options
  const options: Option[] = [];
  while (lineIdx < lines.length) {
    const line = lines[lineIdx];
    const trimmed = line.trim();

    // Nếu gặp blockquote (bắt đầu bằng >) hoặc dấu phân cách ---
    if (trimmed.startsWith('>') || trimmed.startsWith('---')) {
      break;
    }

    const optMatch = trimmed.match(/^- ([a-z])\.\s+(.*)$/);
    if (optMatch) {
      const key = optMatch[1];
      const rawOptText = optMatch[2].trim();

      // Kiểm tra có dấu ✅ ở cuối dòng không
      // Pattern: Text ✅ *(note)* hoặc Text ✅
      const checkMatch = rawOptText.match(/^([\s\S]+?)\s+✅(?:\s+\*([^*]+)\*)?\s*$/);
      if (checkMatch) {
        options.push({
          key,
          text: checkMatch[1].trim(),
          isCorrect: true,
          note: checkMatch[2] ? checkMatch[2].trim() : null,
        });
      } else {
        options.push({
          key,
          text: rawOptText,
          isCorrect: false,
          note: null,
        });
      }
    }
    lineIdx++;
  }

  if (options.length < 2) {
    errors.push(`Câu ${number} (${deck}): Số lựa chọn < 2 (tìm thấy ${options.length})`);
  }

  // Tách blockquote giải thích và ground truth (nếu có)
  const bqLines: string[] = [];
  let answerKey = '';

  while (lineIdx < lines.length) {
    const line = lines[lineIdx];
    const trimmed = line.trim();

    if (trimmed.startsWith('---')) {
      break;
    }

    if (trimmed.startsWith('>')) {
      const content = trimmed.replace(/^>\s?/, '');
      const correctAnsMatch = content.match(/^The correct answers?\s+(?:is|are):\s*(.+)$/i);
      if (correctAnsMatch) {
        answerKey = content.trim();
      } else if (!content.match(/^Chính xác!?\s*$/i)) {
        bqLines.push(content);
      }
    }
    lineIdx++;
  }

  const explanation = bqLines.join('\n').trim();

  const paddedNum = String(number).padStart(3, '0');
  const question: Question = {
    id: `${deck}-${paddedNum}`,
    deck,
    number,
    type,
    stem,
    options,
    explanation,
    answerKey,
  };

  return { question, errors };
}

/**
 * Parse File A: ôn tập kiến thức (40 câu)
 */
export function parseReviewMarkdown(markdownContent: string): ParseResult {
  const errors: string[] = [];
  const questions: Question[] = [];

  // Tách các câu hỏi bằng regex heading "## Question"
  // hoặc tách theo dòng
  const lines = markdownContent.replace(/\r\n/g, '\n').split('\n');
  const blocks: string[] = [];
  let currentBlock: string[] = [];
  let insideQuestion = false;

  for (const line of lines) {
    if (line.match(/^##\s+Question\s+\d+/i)) {
      if (insideQuestion && currentBlock.length > 0) {
        blocks.push(currentBlock.join('\n'));
        currentBlock = [];
      }
      insideQuestion = true;
    }
    if (insideQuestion) {
      currentBlock.push(line);
    }
  }
  if (currentBlock.length > 0) {
    blocks.push(currentBlock.join('\n'));
  }

  for (let i = 0; i < blocks.length; i++) {
    const parsed = parseQuestionBlock(blocks[i], 'review', i + 1);
    if (parsed.errors.length > 0) {
      errors.push(...parsed.errors);
    }
    if (parsed.question) {
      questions.push(parsed.question);
    }
  }

  // Cross-check ground truth cho từng câu
  for (const q of questions) {
    const valErrors = validateQuestion(q);
    if (valErrors.length > 0) {
      errors.push(...valErrors);
    }
  }

  return { questions, errors };
}

/**
 * Parse File B: 80 câu 2 đề (Phần 1: đề thi, Phần 2: đáp án & giải thích)
 */
export function parseExamsMarkdown(markdownContent: string): {
  exam1: ParseResult;
  exam2: ParseResult;
} {
  const exam1Errors: string[] = [];
  const exam2Errors: string[] = [];

  const lines = markdownContent.replace(/\r\n/g, '\n').split('\n');

  // Phân chia thành Phần 1 và Phần 2
  let part1Lines: string[] = [];
  let part2Lines: string[] = [];
  let currentPart = 0;

  for (const line of lines) {
    if (line.match(/^##\s+Phần\s+1:/i)) {
      currentPart = 1;
      continue;
    } else if (line.match(/^##\s+Phần\s+2:/i)) {
      currentPart = 2;
      continue;
    }

    if (currentPart === 1) {
      part1Lines.push(line);
    } else if (currentPart === 2) {
      part2Lines.push(line);
    }
  }

  // Tách Đề 1 và Đề 2 trong Phần 1
  const part1De1Blocks = extractExamBlocks(part1Lines, 1);
  const part1De2Blocks = extractExamBlocks(part1Lines, 2);

  // Tách Đáp án Đề 1 và Đáp án Đề 2 trong Phần 2
  const part2De1Blocks = extractAnswerBlocks(part2Lines, 1);
  const part2De2Blocks = extractAnswerBlocks(part2Lines, 2);

  // Ghép và kiểm tra Đề 1
  const exam1Questions = mergeAndValidateExam(
    part1De1Blocks,
    part2De1Blocks,
    'exam1',
    exam1Errors
  );

  // Ghép và kiểm tra Đề 2
  const exam2Questions = mergeAndValidateExam(
    part1De2Blocks,
    part2De2Blocks,
    'exam2',
    exam2Errors
  );

  return {
    exam1: { questions: exam1Questions, errors: exam1Errors },
    exam2: { questions: exam2Questions, errors: exam2Errors },
  };
}

function extractExamBlocks(lines: string[], deNum: number): Map<number, string> {
  const blocks = new Map<number, string>();
  let inTargetDe = false;
  let currentQNum: number | null = null;
  let currentBlockLines: string[] = [];

  for (const line of lines) {
    const deMatch = line.match(/^###\s+Đề\s+(\d+)/i);
    if (deMatch) {
      inTargetDe = parseInt(deMatch[1], 10) === deNum;
      continue;
    }

    if (!inTargetDe) continue;

    const qMatch = line.match(/^####\s+Question\s+(\d+)/i);
    if (qMatch) {
      if (currentQNum !== null && currentBlockLines.length > 0) {
        blocks.set(currentQNum, currentBlockLines.join('\n'));
        currentBlockLines = [];
      }
      currentQNum = parseInt(qMatch[1], 10);
    }

    if (currentQNum !== null) {
      currentBlockLines.push(line);
    }
  }

  if (currentQNum !== null && currentBlockLines.length > 0) {
    blocks.set(currentQNum, currentBlockLines.join('\n'));
  }

  return blocks;
}

function extractAnswerBlocks(lines: string[], deNum: number): Map<number, string> {
  const blocks = new Map<number, string>();
  let inTargetDe = false;
  let currentQNum: number | null = null;
  let currentBlockLines: string[] = [];

  for (const line of lines) {
    const deMatch = line.match(/^###\s+Đáp\s+án\s+Đề\s+(\d+)/i);
    if (deMatch) {
      inTargetDe = parseInt(deMatch[1], 10) === deNum;
      continue;
    }

    if (!inTargetDe) continue;

    const qMatch = line.match(/^####\s+Question\s+(\d+)/i);
    if (qMatch) {
      if (currentQNum !== null && currentBlockLines.length > 0) {
        blocks.set(currentQNum, currentBlockLines.join('\n'));
        currentBlockLines = [];
      }
      currentQNum = parseInt(qMatch[1], 10);
    }

    if (currentQNum !== null) {
      currentBlockLines.push(line);
    }
  }

  if (currentQNum !== null && currentBlockLines.length > 0) {
    blocks.set(currentQNum, currentBlockLines.join('\n'));
  }

  return blocks;
}

function mergeAndValidateExam(
  part1Blocks: Map<number, string>,
  part2Blocks: Map<number, string>,
  deck: 'exam1' | 'exam2',
  errors: string[]
): Question[] {
  const questions: Question[] = [];

  // Ghép theo số câu 1..40
  for (let num = 1; num <= 40; num++) {
    const rawP1 = part1Blocks.get(num);
    const rawP2 = part2Blocks.get(num);

    if (!rawP1) {
      errors.push(`Thiếu Question ${num} ở Phần 1 (${deck})`);
      continue;
    }
    if (!rawP2) {
      errors.push(`Thiếu Question ${num} ở Phần 2 (${deck})`);
      continue;
    }

    const p1 = parseQuestionBlock(rawP1, deck, num);
    const p2 = parseQuestionBlock(rawP2, deck, num);

    if (p1.errors.length > 0) errors.push(...p1.errors);
    if (p2.errors.length > 0) errors.push(...p2.errors);

    if (p1.question && p2.question) {
      // Đối chiếu stem: stem giữa 2 phần phải trùng khớp nguyên văn sau chuẩn hóa
      const normStem1 = normalizeWhitespace(p1.question.stem);
      const normStem2 = normalizeWhitespace(p2.question.stem);

      if (normStem1 !== normStem2) {
        errors.push(
          `Lệch stem giữa Phần 1 và Phần 2 tại Question ${num} (${deck}):\n` +
          `P1: "${normStem1.slice(0, 50)}..."\n` +
          `P2: "${normStem2.slice(0, 50)}..."`
        );
      }

      // Lấy đáp án và giải thích từ Phần 2
      const finalQuestion: Question = {
        id: `${deck}-${String(num).padStart(3, '0')}`,
        deck,
        number: num,
        type: p2.question.type,
        stem: p1.question.stem, // giữ nguyên stem
        options: p2.question.options,
        explanation: p2.question.explanation,
        answerKey: p2.question.answerKey,
      };

      const valErrors = validateQuestion(finalQuestion);
      if (valErrors.length > 0) {
        errors.push(...valErrors);
      }

      questions.push(finalQuestion);
    }
  }

  return questions;
}

/**
 * Kiểm tra các ràng buộc nghiệp vụ và cross-check ground truth cho 1 câu hỏi
 */
export function validateQuestion(q: Question): string[] {
  const errors: string[] = [];

  // 1. Phải có ít nhất 1 option isCorrect
  const correctOptions = q.options.filter((o) => o.isCorrect);
  if (correctOptions.length === 0) {
    errors.push(`Câu ${q.id}: Không có đáp án đúng (thiếu dấu ✅)`);
  }

  // 2. single vs multiple
  if (q.type === 'single' && correctOptions.length > 1) {
    errors.push(`Câu ${q.id}: Loại 'single' nhưng có ${correctOptions.length} đáp án đúng`);
  }
  if (q.type === 'multiple' && correctOptions.length <= 1) {
    errors.push(`Câu ${q.id}: Loại 'multiple' nhưng chỉ có ${correctOptions.length} đáp án đúng`);
  }

  // 3. Cross-check ground truth nếu có answerKey
  if (q.answerKey) {
    const rawGtText = q.answerKey.replace(/^The correct answers?\s+(?:is|are):\s*/i, '').trim();

    // Chuẩn hóa và so khớp
    // Với câu multiple, các đáp án trong ground truth thường phân tách bằng dấu phẩy
    const correctOptTexts = correctOptions.map((o) => normalizeWhitespace(o.text));

    if (q.type === 'single') {
      const normGt = normalizeWhitespace(rawGtText);
      const matched = correctOptTexts.some(
        (txt) => txt === normGt || txt.includes(normGt) || normGt.includes(txt)
      );
      if (!matched) {
        errors.push(
          `Câu ${q.id}: Không khớp ground truth.\nOption: "${correctOptTexts.join(' | ')}"\nGT: "${normGt}"`
        );
      }
    } else {
      // Câu multiple: kiểm tra từng đáp án
      const normGt = normalizeWhitespace(rawGtText);
      for (const optTxt of correctOptTexts) {
        if (!normGt.includes(optTxt) && !optTxt.includes(normGt)) {
          // Kiểm tra xem có chứa từ khóa chính không
          errors.push(
            `Câu ${q.id} (multiple): Option đúng "${optTxt}" không thấy trong ground truth: "${normGt}"`
          );
        }
      }
    }
  } else {
    errors.push(`Câu ${q.id}: Thiếu dòng ground truth (The correct answer is...)`);
  }

  return errors;
}
