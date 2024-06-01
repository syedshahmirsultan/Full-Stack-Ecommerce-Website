import React from 'react';
import Image from 'next/image';


const Promotions = () => {
    return (
        <section className='pt-40'>
            <div className=" flex flex-col mx-auto gap-y-6 ">
   <text className='text-blue-600 font-semibold place-self-center text-xl '> Promotions</text>
   <h1 className='text-3xl lg:text-4xl font-bold place-self-center'> Our Promotions Event</h1>
            </div>
           <div className='bg-gray-300 lg:w-5/12 w-full flex mt-20 h-48 justify-around '>
<div className='flex flex-col gap-y-2 lg:p-6 pl-4 pt-4 '>
<h2 className="text-4xl font-bold whitespace-nowrap">Get Up to <br/> 60%</h2>
<p className="text-md font-medium">For the Summer Season</p>
</div>
<Image src="/images/promoImage1.png" alt="Image of Promotion" width={190} height={120} className="lg:w-60 w-auto h-auto"/>
</div> 

<div className="bg-zinc-800 lg:w-5/12 w-full h-auto flex flex-col  mt-6 gap-y-4">
<h2 className="text-4xl font-bold text-white text-center mt-8"> GET 30% Off</h2>
<p className="text-md text-gray-100 text-center"> USE PROMO CODE</p>
<button className='bg-zinc-700 rounded-lg text-white mb-4 ml-12 pb-1 pt-1 mr-12 font-semibold tracking-widest cursor-pointer'>DINEWEEKEND SALE</button>
</div>

<div className="flex flex-col w-3/12 bg-rose-100 h-96 pt-4">
    <p>Flex SweatShirt</p>

</div>
</section>
    );
}

export default Promotions;
