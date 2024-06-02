import React from 'react';
import Image from 'next/image';


const PromotionBanner2 = () => {
    return (
        <div className="w-full lg:h-100 h-auto mt-8 flex flex-col lg:flex-row gap-x-4 gap-y-8">
        <div className=" w-full lg:w-[50%] bg-sky-100 flex flex-col h-100 gap-y-1">
     <p className='mx-14 text-lg mt-5 text-gray-800 font-semibold'>Flex Sweatshirt</p>
     <div className="flex mx-14">
    <p className=" text-lg text-gray-800 line-through">$100.00</p>
    <p className=" mx-4 font-bold text-lg text-gray-800 underline">$75.00</p>
     </div>
     <Image src="/images/promoImage2.png" width={200} height={200} alt="Image" className='mx-4 mt-6 w-10/12 h-full mb-2'/>
        </div>
        <div className="w-full lg:w-[50%] bg-gray-100 flex flex-col h-100 gap-y-1 gap-x-4">
     <p className='mx-14 text-lg mt-5 text-gray-800 font-semibold'>Flex Sweatshirt</p>
     <div className="flex mx-14">
    <p className=" text-lg text-gray-800 line-through">$225.00</p>
    <p className=" mx-4 font-bold text-lg text-gray-800 underline">$190.00</p>
     </div>
     <Image src="/images/promoImage3.png" width={200} height={200} alt="Image" className='mx-4 mt-6 w-10/12 h-full mb-2'/>
        </div> 
        </div>
    );
}

export default PromotionBanner2;
