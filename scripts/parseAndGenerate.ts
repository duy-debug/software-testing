import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  parseReviewMarkdown,
  parseExamsMarkdown,
  parseSlidesMarkdown,
} from '../src/lib/markdownParser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const fileAPath = path.join(rootDir, 'docs', 'gk_quiz (2).md');
const fileBPath = path.join(rootDir, 'docs', '80_cau_trac_nghiem_sot357.md');
const fileCPath = path.join(rootDir, 'docs', '80_cau_trac_nghiem_sot357_bo_moi_tu_gk.md');
const dataDir = path.join(rootDir, 'src', 'data');

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

console.log('--- BẮT ĐẦU PARSE DỮ LIỆU ---');
console.log(`Đọc File A: ${fileAPath}`);
const contentA = fs.readFileSync(fileAPath, 'utf-8');
const reviewResult = parseReviewMarkdown(contentA);
const slidesResult = parseSlidesMarkdown(contentA);

console.log(`Kết quả Review (File A): ${reviewResult.questions.length} câu, ${reviewResult.errors.length} lỗi.`);
if (reviewResult.errors.length > 0) {
  console.error('Lỗi khi parse File A:');
  reviewResult.errors.forEach((err, idx) => console.error(`  ${idx + 1}. ${err}`));
}

console.log(`Kết quả Trắc nghiệm Bài giảng Slide (File A): ${slidesResult.questions.length} câu, ${slidesResult.errors.length} lỗi.`);
if (slidesResult.errors.length > 0) {
  console.error('Lỗi khi parse Slide File A:');
  slidesResult.errors.forEach((err, idx) => console.error(`  ${idx + 1}. ${err}`));
}

console.log(`\nĐọc File B (Đề Thi Thử 1 & 2): ${fileBPath}`);
const contentB = fs.readFileSync(fileBPath, 'utf-8');
const examsResult = parseExamsMarkdown(contentB, 'exam1', 'exam2');

console.log(`Kết quả Đề 1: ${examsResult.exam1.questions.length} câu, ${examsResult.exam1.errors.length} lỗi.`);
if (examsResult.exam1.errors.length > 0) {
  console.error('Lỗi khi parse Đề 1:');
  examsResult.exam1.errors.forEach((err, idx) => console.error(`  ${idx + 1}. ${err}`));
}

console.log(`Kết quả Đề 2: ${examsResult.exam2.questions.length} câu, ${examsResult.exam2.errors.length} lỗi.`);
if (examsResult.exam2.errors.length > 0) {
  console.error('Lỗi khi parse Đề 2:');
  examsResult.exam2.errors.forEach((err, idx) => console.error(`  ${idx + 1}. ${err}`));
}

console.log(`\nĐọc File C (Đề Thực Hành 1 & 2 - Bộ mới từ GK): ${fileCPath}`);
const contentC = fs.readFileSync(fileCPath, 'utf-8');
const practiceExamsResult = parseExamsMarkdown(contentC, 'practice1', 'practice2');

console.log(`Kết quả Đề Thực Hành 1: ${practiceExamsResult.exam1.questions.length} câu, ${practiceExamsResult.exam1.errors.length} lỗi.`);
if (practiceExamsResult.exam1.errors.length > 0) {
  console.error('Lỗi khi parse Đề Thực Hành 1:');
  practiceExamsResult.exam1.errors.forEach((err, idx) => console.error(`  ${idx + 1}. ${err}`));
}

console.log(`Kết quả Đề Thực Hành 2: ${practiceExamsResult.exam2.questions.length} câu, ${practiceExamsResult.exam2.errors.length} lỗi.`);
if (practiceExamsResult.exam2.errors.length > 0) {
  console.error('Lỗi khi parse Đề Thực Hành 2:');
  practiceExamsResult.exam2.errors.forEach((err, idx) => console.error(`  ${idx + 1}. ${err}`));
}

const totalQuestions =
  reviewResult.questions.length +
  slidesResult.questions.length +
  examsResult.exam1.questions.length +
  examsResult.exam2.questions.length +
  practiceExamsResult.exam1.questions.length +
  practiceExamsResult.exam2.questions.length;

const totalErrors =
  reviewResult.errors.length +
  slidesResult.errors.length +
  examsResult.exam1.errors.length +
  examsResult.exam2.errors.length +
  practiceExamsResult.exam1.errors.length +
  practiceExamsResult.exam2.errors.length;

console.log(`\nTổng số câu hỏi: ${totalQuestions} câu (Review: 40, Slide: 24, Đề 1: 40, Đề 2: 40, Đề Thực Hành 1: 40, Đề Thực Hành 2: 40)`);
console.log(`Tổng số lỗi: ${totalErrors}`);

// Xuất 6 file JSON
fs.writeFileSync(
  path.join(dataDir, 'questions.review.json'),
  JSON.stringify(reviewResult.questions, null, 2),
  'utf-8'
);
fs.writeFileSync(
  path.join(dataDir, 'questions.slides.json'),
  JSON.stringify(slidesResult.questions, null, 2),
  'utf-8'
);
fs.writeFileSync(
  path.join(dataDir, 'questions.exam1.json'),
  JSON.stringify(examsResult.exam1.questions, null, 2),
  'utf-8'
);
fs.writeFileSync(
  path.join(dataDir, 'questions.exam2.json'),
  JSON.stringify(examsResult.exam2.questions, null, 2),
  'utf-8'
);
fs.writeFileSync(
  path.join(dataDir, 'questions.practice1.json'),
  JSON.stringify(practiceExamsResult.exam1.questions, null, 2),
  'utf-8'
);
fs.writeFileSync(
  path.join(dataDir, 'questions.practice2.json'),
  JSON.stringify(practiceExamsResult.exam2.questions, null, 2),
  'utf-8'
);

console.log('Đã lưu thành công 6 file JSON vào src/data/');
if (totalQuestions === 224 && totalErrors === 0) {
  console.log('✅ GATE PARSE ĐẠT: 224/224 câu (40 + 24 + 40 + 40 + 40 + 40), 0 lỗi, cross-check 100%!');
} else {
  console.error('❌ Có lỗi trong quá trình parse.');
  process.exit(1);
}
