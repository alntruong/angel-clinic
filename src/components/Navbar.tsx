"use client";

import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/assets/images/artscilogo.png';

const Nav = () => {
  
  return (
    <nav className="bg-black flex flex-between w-full h-[4.5rem] sticky top-0 z-50">
       <Link href="/" className="flex gap-2 flex-center flex-grow pl-3">
            <Image  
              src={logo}
              alt="Logo" 
              width={250} 
              height={150}
              className="object-contain"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
       </Link> 


       {/* Desktop Navigation */}
       <div className="sm:flex hidden">
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-0 pr-10" id="navbar-cta">
            <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent text-[18px]">            
              <li>
                <a href="/about" className="md:hover:bg-transparent md:hover:text-gray-500 md:dark:hover:text-gray dark:text-white">About</a>
              </li>
              <li className="nav-item dropdown relative z-20">
                <a href="/services-page" className="md:hover:bg-transparent md:hover:text-gray-500 md:dark:hover:text-gray dark:text-white dropdown-toggle">Services</a>            
                <div className="dropdown-content whitespace-nowrap">
                  <a href="/service1">Preventative Dentistry</a>
                  <a href="/service2">Restorative Dentistry</a>
                  <a href="/service3">Cosmetic Dentistry</a>
                  <a href="/service3">Emergency Dentistry</a>
                  <a href="/service3">Full Mouth Reconstruction</a>
                  <a href="/service3">Dental Implants</a>
                  <a href="/service3">Dental Crowns</a>
                  <a href="/service3">Dentures</a>
                  <a href="/service3">Root Canals</a>
                  <a href="/service3">Oral Surgery</a>
                  <a href="/service3">Dental Anxiety</a>
                  <a href="/service3">Veneers</a>
                </div>  
              </li>
              <li>
                <a href="/contact" className="md:hover:bg-transparent md:hover:text-gray-500 md:dark:hover:text-gray dark:text-white">Contact</a>
              </li>
              <li>
                <a href="/staff" className="md:hover:bg-transparent md:hover:text-gray-500 md:dark:hover:text-gray dark:text-white">Staff</a>
              </li>

            </ul>
          </div>
          <Link href="/booking" className="text-white mr-4 mt-[14px] pt-[10px] text-center rounded-full bg-[#7cb4b4] hover:bg-teal-200 focus:outline-none hover:bg-opacity-50" style={{ width: '110px', height: '45px'}}>
            Book Now
          </Link>
        </div>  
          
    </nav>
  )
}

export default Nav