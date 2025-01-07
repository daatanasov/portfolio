'use client';
import LocaleSwitcher from './LocaleSwitcher';
import {useTheme} from './ThemeProvider';
import {Button} from './ui/button';
import {Moon, Sun, Download, Github, Linkedin} from 'lucide-react';

export default function ThemeLanguageSwitcher() {
  const {theme, toggleTheme} = useTheme();

  return (
    <section className="mb-8 flex justify-between items-center min-w-0 md:min-w-[640px] lg:min-w-[640px]">
      <div className="flex space-x-4">
        <a
          href="https://github.com/daatanasov"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors"
          aria-label="Visit my GitHub"
        >
          <Github className="h-5 w-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/dincho-atanasov-78a82a321/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors"
          aria-label="Visit my LinkedIn"
        >
          <Linkedin className="h-5 w-5" />
        </a>
        <a
          href="../../DinchoCV.pdf"
          download
          className="hover:text-primary transition-colors"
          aria-label="Download my resume"
        >
          <Download className="h-5 w-5" />
        </a>
      </div>
      <div className="flex space-x-2">
        <Button
          variant="ghost"
          className="hover:bg-background hover:text-primary px-2"
          onClick={toggleTheme}
        >
          {theme === 'light' ? (
            <Moon className="h-5 w-5" />
          ) : (
            <Sun className="h-5 w-5" />
          )}
        </Button>
        <LocaleSwitcher />
      </div>
    </section>
  );
}
