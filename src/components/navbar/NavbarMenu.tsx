import Link from 'next/link';

type menu = {
  menu: string;
  href: string;
};

export const NavbarMenu = ({ menu, href }: menu) => {
  return (
    <li className='nav-link-menu menu'>
      <Link href={href} className='lg:text-lg'>
        {menu}
      </Link>
    </li>
  );
};
