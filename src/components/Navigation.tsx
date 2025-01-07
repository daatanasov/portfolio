'use client';
import {useTranslations} from 'next-intl';
import TextScramble from './TextScramble';
import NavigationLinks from './NavigationLinks';
import Link from 'next/link';

export default function Navigation() {
  const t = useTranslations('Navigation');

  return (
    <nav className="flex items-center justify-between mx-1 sm:mx-2 md:mx-3 lg:mx-4">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href={'/'}>
            <div className="container border rounded-lg font-bold p-1 hover:text-primary">
              DШ.
            </div>
          </Link>
          <div className="overflow-hidden py-2 flex cursor-default scale-100 px-2">
            <TextScramble>pfolio by Dincho</TextScramble>
          </div>
        </div>
        <NavigationLinks />
      </div>
    </nav>
  );
}
