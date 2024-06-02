import React from 'react';
import Image from 'next/image';

const PromotionBanner = () => {
    return (
        <div className='w-full mx-auto'>
             <div className='bg-gray-300 w-full flex mt-8 lg:h-48  lg:mr-0 flex-col lg:flex-row h-auto gap-y-8'>
<div className='flex flex-col gap-y-2 lg:p-6 ml-6 pt-4 '>
<h2 className="text-4xl font-bold whitespace-nowrap">Get Up to <br/> 60%</h2>
<p className="text-md font-medium">For the Summer Season</p>
</div>
<Image src="/images/promoImage1.png" alt="Image of Promotion" width={190} height={120} className="lg:w-60 w-60 lg:pr-10"/>
</div> 

<div className="bg-zinc-800 w-full h-auto flex flex-col  mt-6 gap-y-4">
<h2 className="text-4xl font-bold text-white text-center mt-8"> GET 30% Off</h2>
<p className="text-md text-gray-100 text-center"> USE PROMO CODE</p>
<button className='bg-zinc-700 rounded-lg text-white mb-4 ml-12 pb-1 pt-1 mr-12 font-semibold tracking-widest cursor-pointer'>DINEWEEKEND SALE</button>
</div>
        </div>
    );
}

export default PromotionBanner;
