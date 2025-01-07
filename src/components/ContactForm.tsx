import React, {useState, useEffect, useRef} from 'react';
import {useForm, ValidationError} from '@formspree/react';
import {Button} from './ui/button';
import {Mail, Phone} from 'lucide-react';
import {useTranslations} from 'next-intl';
import clsx from 'clsx';

function ContactForm() {
  const t = useTranslations('Contact');
  const [state, handleSubmit] = useForm('xwppwoqp');
  const [phone] = useState<string>('+359886760740');
  const [email] = useState<string>('dincho.at@gmail.com');
  const [copyMessage, setCopyMessage] = useState('');
  const [formErrors, setFormErrors] = useState(null);
  const [sendFormMessage, setSendFormMessage] = useState<string | null>(null);

  const formRef = useRef<HTMLFormElement>(null);

  // Handle form submission success with useEffect
  useEffect(() => {
    if (state.succeeded) {
      setSendFormMessage('Успешно изпратихте съощбение');
      if (formRef.current) {
        formRef.current.reset();
      }
      setTimeout(() => setSendFormMessage(''), 3000);
    } else if (state.errors) {
      setFormErrors(state.errors);
    }
  }, [state.succeeded]);

  async function handleCopy(copiedValue: string) {
    const copied = copiedValue === 'email' ? email : phone;
    await navigator.clipboard.writeText(copied);
    setCopyMessage(t('successfulyCopied') + copied);
    setTimeout(() => setCopyMessage(''), 3000);
  }

  return (
    <section className="mb-8">
      <div className="flex flex-col w-full h-full justify-center items-center max-w-4xl-md mx-auto p-2 rounded-lg bg-background border">
        <div className="relative">
          <div className="text-left space-y-2 ">
            <span className="relative flex gap-2 items-center group">
              <Button
                className="p-1 flex items-center gap-2 cursor-copy bg-transparent hover:bg-transparent shadow-none focus:shadow-none"
                variant="ghost"
                onClick={() => handleCopy('email')}
              >
                <Mail className="group-hover:text-primary group-hover:animate-pulse cursor-inherit transition-all" />
                <p className="cursor-inherit hover:text-primary">{email}</p>
              </Button>
              <span className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 px-2 py-1 text-sm bg-muted rounded opacity-0 group-hover:opacity-100 transition-opacity">
                {t('copyEmail')}
              </span>
            </span>
            <span className="relative flex gap-1 items-center group">
              <Button
                className="p-1 flex items-center gap-2 cursor-copy bg-transparent hover:bg-transparent  shadow-none focus:shadow-none"
                variant="ghost"
                onClick={() => handleCopy('phone')}
              >
                <Phone className="group-hover:text-primary group-hover:animate-pulse cursor-inherit transition-all" />
                <p className="cursor-inherit hover:text-primary">{phone}</p>
              </Button>
              <span className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 px-2 py-1 text-sm bg-muted rounded opacity-0 group-hover:opacity-100 transition-opacity">
                {t('copyPhone')}
              </span>
            </span>
          </div>
        </div>
        {copyMessage && <p className="text-green-500">{copyMessage}</p>}
      </div>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="max-w-4xl-md mx-auto p-6 rounded-lg bg-background border"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium mb-2">
            {t('name')}
          </label>
          <input
            id="name"
            type="text"
            name="name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder={t('yourName')}
            required
          />
          <ValidationError
            prefix="Name"
            field="name"
            errors={state.errors}
            className="text-red-500 text-sm"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block font-medium mb-2">
            {t('email')}
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder={t('yourEmail')}
            required
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="text-red-500 text-sm"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block font-medium mb-2">
            {t('message')}
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            rows={4}
            placeholder={t('yourMessage')}
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            className="text-red-500 text-sm"
          />
        </div>

        <button
          type="submit"
          disabled={state.submitting}
          className="w-full py-2 px-4 border rounded-md hover:bg-primary disabled:bg-gray-400"
        >
          {t('submit')}
        </button>
        {sendFormMessage && (
          <p
            className={clsx('text-green-500', {
              'text-red-500': formErrors
            })}
          >
            {sendFormMessage}
          </p>
        )}
      </form>
    </section>
  );
}
export default ContactForm;
