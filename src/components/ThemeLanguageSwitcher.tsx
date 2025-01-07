'use client';
import LocaleSwitcher from './LocaleSwitcher';
import {useTheme} from './ThemeProvider';
import {Button} from './ui/button';
import {Moon, Sun} from 'lucide-react';

export default function ThemeLanguageSwitcher() {
  const {theme, toggleTheme} = useTheme();
  return (
    <>
      <section className="mb-8 flex justify-end items-center  min-w-0 md:min-w-[640px] lg:min-w-[640px]">
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
    </>
  );
}
