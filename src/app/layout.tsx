import type { Metadata } from 'next';
import './globals.css';
import React, { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Angel Clinic',
  description: 'Dental Care'
}

interface LayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: LayoutProps ) => {
  return (
    <html lang="en">
      <body>
        <main className="app">
         <Navbar /> 
         {children}
         <Footer />
        </main>
      </body>
    </html>
  )
}

export default RootLayout;