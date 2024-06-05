"use client"
import { useState } from 'react';
import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { Search, ShoppingCart } from 'lucide-react';
import HamburgerMenu from './HamBurgerMenu';


const NavBar = () => {
    const [searchVal,setSearchVal] = useState("");
    return (
        <section className='flex justify-between drop-shadow-xs pt-6 pb-6  top-0 sticky backdrop-blur-md transition-colors duration-200 z-50'>
          <div>
       <Link href="/"> <Image src="/images/Logo.png" alt="Logo" width={150} height={150} className='min-w-[20px] min-h-[20px] p-4 lg:p-0'/></Link>
            </div> 

            <div>
            <ol className="lg:flex hidden justify-between gap-x-8 text-purple-900 text-md font-semibold">
           <Link href="/female"> <li className="p-1 hover:bg-gray-100" >Female</li></Link>
           <Link href="/male"> <li className="p-1 hover:bg-gray-100" >Male</li></Link>

           <Link href="/kids"><li className="p-1 hover:bg-gray-100" >Kids</li></Link>
           <Link href="/products"><li className="p-1 hover:bg-gray-100" >All Products</li></Link>
            </ol>
            </div>


            <div className="lg:flex hidden border border-gray-300 w-80 h-[30px] rounded-md">
           <Link href={`/search?query=${searchVal}`} className='flex self-center'> <Search size={15} className=" mx-2 text-gray-500"/></Link>
            <input placeholder='Search in our store    ' 
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
            className='border-none focus:outline-none bg-transparent'/>
            </div>
            <div className="relative hidden lg:flex items-center justify-center bg-gray-100">
       <div className="absolute bg-gray-200 h-10 w-10 rounded-full flex items-center justify-center mr-16"> 
      <Link href="/cart"> <ShoppingCart size={26} className="text-black" />
        </Link>
       </div> 
     </div>
<div  className="lg:hidden flex pt-4 pr-4">
    <HamburgerMenu/>
    </div>
        </section>
    );
}

export default NavBar;
