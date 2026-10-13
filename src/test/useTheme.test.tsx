import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider, useTheme, THEME_STORAGE_KEY } from '../context/ThemeContext';
import { ThemeToggle } from '../components/ThemeToggle';

// Test consumer component
const TestConsumer = () => {
  const { theme, toggleTheme, setTheme } = useTheme();
  return (
    <div>
      <span data-testid="current-theme">{theme}</span>
      <button onClick={toggleTheme} data-testid="toggle-btn">Toggle</button>
      <button onClick={() => setTheme('light')} data-testid="set-light-btn">Set Light</button>
      <button onClick={() => setTheme('dark')} data-testid="set-dark-btn">Set Dark</button>
    </div>
  );
};

describe('Theme Management (ThemeContext & ThemeToggle)', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove('dark');
  });

  it('Default theme is dark and applies dark class to documentElement', () => {
    render(
      <ThemeProvider>
        <TestConsumer />
      </ThemeProvider>
    );

    expect(screen.getByTestId('current-theme').textContent).toBe('dark');
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('dark');
  });

  it('Loads saved theme from localStorage if present', () => {
    localStorage.setItem(THEME_STORAGE_KEY, 'light');

    render(
      <ThemeProvider>
        <TestConsumer />
      </ThemeProvider>
    );

    expect(screen.getByTestId('current-theme').textContent).toBe('light');
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });

  it('Toggles theme from dark to light and removes dark class', async () => {
    const user = userEvent.setup();

    render(
      <ThemeProvider>
        <TestConsumer />
      </ThemeProvider>
    );

    expect(screen.getByTestId('current-theme').textContent).toBe('dark');
    expect(document.documentElement.classList.contains('dark')).toBe(true);

    await user.click(screen.getByTestId('toggle-btn'));

    expect(screen.getByTestId('current-theme').textContent).toBe('light');
    expect(document.documentElement.classList.contains('dark')).toBe(false);
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('light');

    // Toggle back to dark
    await user.click(screen.getByTestId('toggle-btn'));

    expect(screen.getByTestId('current-theme').textContent).toBe('dark');
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('dark');
  });

  it('ThemeToggle component renders and toggles theme on click', async () => {
    const user = userEvent.setup();

    render(
      <ThemeProvider>
        <ThemeToggle showLabel={true} />
      </ThemeProvider>
    );

    // Initial state: dark mode -> button label should say 'Giao diện Tối'
    expect(screen.getByText('Giao diện Tối')).toBeDefined();

    const toggleButton = screen.getByRole('button', { name: /chuyển sang giao diện sáng/i });
    await user.click(toggleButton);

    // After click: light mode -> button label should say 'Giao diện Sáng'
    expect(screen.getByText('Giao diện Sáng')).toBeDefined();
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });
});
