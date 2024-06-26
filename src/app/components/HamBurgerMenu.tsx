"use client"
import React, { useState } from 'react';
import { Menu, ShoppingCart, X } from 'lucide-react';
import Link from 'next/link';

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="text-black focus:outline-none"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="absolute top-10 right-0 bg-white p-8 pr-40 rounded-lg shadow-lg">
          <ul className="flex flex-col items-center space-y-4">
            
          <li className='mb-6'>
              <Link href="/cart">
              <div className="absolute bg-gray-200 h-8 w-8 rounded-full flex items-center justify-center mr-16">
        <ShoppingCart size={22} className="text-black" />
    
      </div>
              </Link>
            </li>
            <li>
              <Link href="/female" className="text-slate-700  pl-16 pr-16 h-16 hover:bg-gray-200 mt-16">Female</Link>
            </li>

            <li>
              <Link href="/male" className="text-slate-700 pl-16 pr-16 hover:bg-gray-200">Male</Link>
            </li>
            <li>
              <Link href="/kids" className="text-slate-700 pl-16 pr-16 hover:bg-gray-200">Kids</Link>
            </li>
           <li>
  <Link href="/allProducts" className="text-slate-700 pl-16 pr-16 hover:bg-gray-200 whitespace-nowrap">
    All Products
  </Link>
</li>

          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
