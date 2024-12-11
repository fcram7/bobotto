import { NavbarLinks } from './NavbarLinks';

export const Navbar = () => {
  return (
    <header className='bobotto-header fixed w-full'>
      <nav className='bobotto-header__content flex items-center justify-between py-8 px-[4%] lg:px-[2%] text-serikaWhite'>
        <h1 className='text-2xl lg:text-4xl'>Bobotto</h1>
        <NavbarLinks />
      </nav>
    </header>
  );
};
