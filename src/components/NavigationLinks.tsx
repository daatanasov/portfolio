import {useTranslations} from 'next-intl';
import {Menu} from 'lucide-react';
import {useState} from 'react';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet';
import Link from 'next/link';

export default function NavigationLinks() {
  const t = useTranslations('Navigation');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex items-center gap-3">
      <div className="hidden md:flex items-center gap-6">
        <Link href="/" className="hover:text-primary">
          {t('home')}
        </Link>
        <Link href="/about" className="hover:text-primary">
          {t('about')}
        </Link>
        <Link href="/skills" className="hover:text-primary">
          {t('skills')}
        </Link>
        <Link href="/contact" className="hover:text-primary">
          {t('contact')}
        </Link>
      </div>
      <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <SheetTrigger className="md:hidden">
          <Menu className="h-6 w-6" />
          <SheetTitle></SheetTitle>
        </SheetTrigger>

        <SheetContent>
          <div className="flex flex-col gap-4 mt-8">
            <Link
              href="/"
              className="text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('home')}
            </Link>
            <Link
              href="/about"
              className="text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('about')}
            </Link>
            <Link
              href="/skills"
              className="text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('skills')}
            </Link>
            <Link
              href="/contact"
              className="text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('contact')}
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
