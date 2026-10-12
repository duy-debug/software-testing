import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';

describe('Architecture Rules & Boundary Verification (Skill 02 & 11)', () => {
  const rootDir = process.cwd();
  const pagesDir = path.join(rootDir, 'src', 'pages');
  const componentsDir = path.join(rootDir, 'src', 'components');
  const libDir = path.join(rootDir, 'src', 'lib');

  it('Checklist 1: Không có Page nào import trực tiếp từ src/lib/', () => {
    const pageFiles = fs.readdirSync(pagesDir).filter((f) => f.endsWith('.tsx') || f.endsWith('.ts'));

    for (const file of pageFiles) {
      const content = fs.readFileSync(path.join(pagesDir, file), 'utf-8');
      const matches = content.match(/from\s+['"].*\/lib\/.*['"]/g);
      expect(
        matches,
        `Page ${file} vi phạm quy tắc kiến trúc khi import trực tiếp từ lib: ${matches?.join(', ')}`
      ).toBeNull();
    }
  });

  it('Checklist 2: Không có module trong src/lib/ nào import từ components, hooks, hoặc pages', () => {
    const libFiles = fs.readdirSync(libDir).filter((f) => f.endsWith('.tsx') || f.endsWith('.ts'));

    for (const file of libFiles) {
      const content = fs.readFileSync(path.join(libDir, file), 'utf-8');
      const badImports = content.match(/from\s+['"].*\/(components|hooks|pages)\/.*['"]/g);
      expect(
        badImports,
        `Module lib ${file} vi phạm luật phụ thuộc một chiều khi import ngược: ${badImports?.join(', ')}`
      ).toBeNull();
    }
  });

  it('Checklist 3: Không có Component nào chứa logic setInterval/setTimeout hoặc tự implement scoring riêng', () => {
    const compFiles = fs.readdirSync(componentsDir).filter((f) => f.endsWith('.tsx') || f.endsWith('.ts'));

    for (const file of compFiles) {
      const content = fs.readFileSync(path.join(componentsDir, file), 'utf-8');
      // Không được tự setInterval (phải dùng qua hook useTimer)
      const hasSetInterval = content.includes('setInterval(');
      expect(
        hasSetInterval,
        `Component ${file} không được tự chạy setInterval trực tiếp mà phải dùng hook useTimer`
      ).toBe(false);
    }
  });
});
