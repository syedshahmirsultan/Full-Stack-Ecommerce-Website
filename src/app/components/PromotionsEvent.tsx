import React from 'react';
import PromotionBanner from './PromotionBanner';
import PromotionBanner2 from './PromotionBanner2';


const PromotionsEvent = () => {
    return (
        <section className='pt-40 max-h-screen'>
            <div className=" flex flex-col mx-auto gap-y-6 ">
   <text className='text-blue-600 font-semibold place-self-center text-xl '> Promotions</text>
   <h1 className='text-3xl lg:text-4xl font-bold place-self-center'> Our Promotions Event</h1>
            </div>
        <div className="flex flex-col-reverse place-self-center mr-8 lg:pr-0 m-6 lg:flex-row lg:gap-x-6 lg:m-0 w-10/12 lg:w-full">
          <PromotionBanner/>
          <PromotionBanner2/>

          </div>
</section>
    );
}

export default PromotionsEvent;
