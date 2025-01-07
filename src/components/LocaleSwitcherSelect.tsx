'use client';
import clsx from 'clsx';
import {useParams} from 'next/navigation';
import {ReactNode, useTransition} from 'react';
import {Locale, usePathname, useRouter} from '@/i18n/routing';
import {Globe} from 'lucide-react';

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = defaultValue as Locale;
  function toggleLocale() {
    const nextLocale: Locale = currentLocale === 'en' ? 'bg' : 'en';

    startTransition(() => {
      router.replace(
        // @ts-expect-error: TypeScript will validate the combination of params and pathname
        {pathname, params},
        {locale: nextLocale}
      );
    });
  }

  return (
    <button
      onClick={toggleLocale}
      disabled={isPending}
      className={clsx(
        'flex items-center gap-2 px-2 py-2 rounded-md hover:bg-background hover:text-primary text-foreground',
        isPending && 'opacity-50 pointer-events-none'
      )}
    >
      <Globe className="h-4 w-4" />
      <span className="font-medium">
        {currentLocale === 'en' ? 'BG' : 'EN'}
      </span>
    </button>
  );
}
