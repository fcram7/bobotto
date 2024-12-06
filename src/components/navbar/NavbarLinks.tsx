import { NavbarMenu } from './NavbarMenu'

export const NavbarLinks = () => {
  return (
    <ul className="navbar-links flex items-center justify-between gap-4">
      <NavbarMenu href='/' menu='Home' />
      <NavbarMenu href='/about' menu='About' />
    </ul>
  )
}