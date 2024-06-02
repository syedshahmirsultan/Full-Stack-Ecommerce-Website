import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { GitBranchIcon } from 'lucide-react';
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs';


const Footer = () => {
    return (
        <section>
         <div className="grid grid-cols-1 lg:grid-cols-4 ml-12 lg:ml-0 lg:justify-between">
         <div className='flex flex-col '>
    <Link href="/"><Image src="/images/Logo.png" alt="Logo Image" width={150} height={150}/></Link>
    <p className='text-gray-600 mt-4'>Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>
</div>
            <div className=" lg:ml-32 flex flex-col gap-y-4">
            <h2 className="font-bold text-2xl text-gray-700 mt-8 lg:mt-0">Company</h2>
            <span className="text-lg text-gray-700 cursor-pointer">About</span>
            <span className="text-lg text-gray-700 cursor-pointer">Privacy Policy</span>
            <span className="text-lg text-gray-700 cursor-pointer">Terms of Use</span>
            <span className="text-lg text-gray-700 cursor-pointer">How it works</span>
            <span className="text-lg text-gray-700 cursor-pointer">Contacts</span>
            </div>
            <div className=" lg:ml-32 flex flex-col gap-y-4">
            <h2 className="font-bold text-2xl text-gray-700 mt-8 lg:mt-0">Support</h2>
            <span className="text-lg text-gray-700 cursor-pointer">Support Carrer</span>
            <span className="text-lg text-gray-700 cursor-pointer">24/7 Service</span>
            <span className="text-lg text-gray-700 cursor-pointer">Quick Chat</span>
            </div>
            <div className=" lg:ml-32 flex flex-col gap-y-4">
            <h2 className="font-bold text-2xl text-gray-700 mt-8 lg:mt-0">Contact</h2>
            <span className="text-lg text-gray-700 cursor-pointer">Whatsapp</span>
            <span className="text-lg text-gray-700 cursor-pointer">Support 24/7 </span>
            </div>
            </div>   

    <div className="h-24 lg:h-16 w-full bg-gray-200 mt-28 pb-12 ">
<div className="flex flex-col lg:flex-row gap-y-2 ml-4 pt-6 justify-between">
<Link href="https://github.com/syedshahmirsultan"><p className='text-[15px] text-slate-800'>© 2024 syedshahmirsultan —@syedshahmirsultan</p></Link>
<div className="flex gap-x-4 justify-center mr-8 mt-4">
<Link href="https://github.com/syedshahmirsultan"><BsGithub size={22}/></Link>
    <Link href="https://www.linkedin.com/in/syedshahmirsultan/"><BsFacebook size={22}/></Link>
<Link href="https://github.com/syedshahmirsultan"><BsInstagram size={22}/></Link>
<Link href="https://www.linkedin.com/in/syedshahmirsultan/"><BsTwitter size={22}/></Link>
<Link href="https://www.linkedin.com/in/syedshahmirsultan/"><BsLinkedin size={22}/></Link>
<Link href="https://github.com/syedshahmirsultan"><BsYoutube size={25}/></Link>
</div>

</div>
     </div>
        </section>
    );
}

export default Footer;
