import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseReviewMarkdown, parseExamsMarkdown } from '../src/lib/markdownParser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const fileAPath = path.join(rootDir, 'docs', 'gk_quiz (2).md');
const fileBPath = path.join(rootDir, 'docs', '80_cau_trac_nghiem_sot357.md');
const dataDir = path.join(rootDir, 'src', 'data');

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

console.log('--- BẮT ĐẦU PARSE DỮ LIỆU ---');
console.log(`Đọc File A: ${fileAPath}`);
const contentA = fs.readFileSync(fileAPath, 'utf-8');
const reviewResult = parseReviewMarkdown(contentA);

console.log(`Kết quả Review (File A): ${reviewResult.questions.length} câu, ${reviewResult.errors.length} lỗi.`);
if (reviewResult.errors.length > 0) {
  console.error('Lỗi khi parse File A:');
  reviewResult.errors.forEach((err, idx) => console.error(`  ${idx + 1}. ${err}`));
}

console.log(`\nĐọc File B: ${fileBPath}`);
const contentB = fs.readFileSync(fileBPath, 'utf-8');
const examsResult = parseExamsMarkdown(contentB);

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

const totalQuestions = reviewResult.questions.length + examsResult.exam1.questions.length + examsResult.exam2.questions.length;
const totalErrors = reviewResult.errors.length + examsResult.exam1.errors.length + examsResult.exam2.errors.length;

console.log(`\nTổng số câu hỏi: ${totalQuestions}/120 câu`);
console.log(`Tổng số lỗi: ${totalErrors}`);

// Xuất file JSON
fs.writeFileSync(
  path.join(dataDir, 'questions.review.json'),
  JSON.stringify(reviewResult.questions, null, 2),
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

console.log('Đã lưu thành công 3 file JSON vào src/data/');
if (totalQuestions === 120 && totalErrors === 0) {
  console.log('✅ GATE BƯỚC 4 ĐẠT: 120/120 câu, 0 lỗi, cross-check 100%!');
} else {
  console.error('❌ GATE BƯỚC 4 CHƯA ĐẠT. Vui lòng kiểm tra các lỗi trên.');
  process.exit(1);
}
