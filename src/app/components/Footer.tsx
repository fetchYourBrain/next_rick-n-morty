import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const githubUrl = 'https://github.com/fetchYourBrain/next_rick-n-morty';

  const links = [
    { text: 'About', href: githubUrl },
    { text: 'Privacy Policy', href: githubUrl },
    { text: 'Licensing', href: githubUrl },
    { text: 'Contact', href: githubUrl },
  ];

  return (
    <footer className="bg-[#0f0f0f] shadow">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <Image
              src="/images/logo.svg"
              width={120}
              height={40}
              className="block"
              alt="Logo"
            />
           <ul className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-500 py-2 sm:py-4 space-y-2 sm:space-y-0 sm:space-x-4">
            {links.map((link) => (
              <li key={link.text}>
                <Link href={link.href} className="hover:underline me-4 md:me-6">
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <hr className="my-2 mb-4 border-gray-400 sm:mx-auto" />
        <span className="block text-sm text-gray-500 text-center">© 2024 <Link href={githubUrl} className="hover:underline">Rick and Morty™</Link>. All Rights Reserved.</span>
      </div>
    </footer>
  );
}
