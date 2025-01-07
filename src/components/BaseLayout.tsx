import {clsx} from 'clsx';
import {Inter} from 'next/font/google';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {ReactNode} from 'react';
import Navigation from '@/components/Navigation';
import {ThemeProvider} from '@/components/ThemeProvider';
import ThemeLanguageSwitcher from './ThemeLanguageSwitcher';

const inter = Inter({subsets: ['latin']});

type Props = {
  children: ReactNode;
  locale: string;
};

export default async function BaseLayout({children, locale}: Props) {
  const messages = await getMessages();

  return (
    <html className="h-full" lang={locale}>
      <body className={clsx(inter.className)}>
        <div className="min-h-screen overflow-hidden ">
          <ThemeProvider>
            <NextIntlClientProvider messages={messages}>
              <Navigation />

              <main className="mx-auto max-w-2xl px-4 py-8">
                <ThemeLanguageSwitcher />
                {children}
              </main>
            </NextIntlClientProvider>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
