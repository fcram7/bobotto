import Link from 'next/link';

type menu = {
  menu: string;
  href: string;
};

export const NavbarMenu = ({ menu, href }: menu) => {
  return (
    <li className='nav-link-menu menu hover:text-serikaYellow transition-colors duration-200 ease-in-out'>
      <Link href={href} className='lg:text-lg'>
        {menu}
      </Link>
    </li>
  );
};
