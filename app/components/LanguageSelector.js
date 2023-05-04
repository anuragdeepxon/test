import Link from 'next/link';

const LanguageSelector = () => {
  const links = [
    { locale: 'en', label: 'English' },
    { locale: 'tl', label: 'Tagalog' },
    { locale: 'pa', label: 'Punjabi' },
    { locale: 'zh', label: 'Mandarin' },
    { locale: 'ar', label: 'Arabic' },
  ];

  return (
    <div className="flex space-x-2">
      {links.map(({ locale, label }) => (
        <Link href="/" locale={locale} key={locale} passHref>
          <span className="cursor-pointer border-b-2 border-gray-300 hover:border-black focus:outline-none">
            {label}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default LanguageSelector;
