import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Bobotto | About',
  description: 'Short description of Bobotto'
}

export default function AboutLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <>
      {children}
    </>
  )
}