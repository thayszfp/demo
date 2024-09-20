import { Logo } from './Logo';

export type NavBarLinksType = {
  href: string;
  pageName: string;
};

export const Header = () => {
  const links = [
    {
      href: '/home',
      pageName: 'Home',
    },
    {
      href: '/about',
      pageName: 'About',
    },
  ];
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Logo />
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {links.map((link) => {
            return (
              <a
                href={link.href}
                key={link.pageName}
                className="mr-5 hover:text-gray-900"
              >
                {link.pageName}
              </a>
            );
          })}
        </nav>
        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Login
        </button>
      </div>
    </header>
  );
};
