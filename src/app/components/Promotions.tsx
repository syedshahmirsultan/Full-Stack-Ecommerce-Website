import allProductsFetcherFromSanity from '@/utils/apiCalling';
import React from 'react';
import {allProductsFetcherType} from '../../../types';
import ProductGridViewer from './ProductGridViewer';

const Promotions = async () => {
 const data = await allProductsFetcherFromSanity() as allProductsFetcherType;
    return (
        <section className='pt-40'>
        <div className=" flex flex-col mx-auto gap-y-4 ">
<text className='text-blue-700 place-self-center text-xl '> Promotions</text>
<h1 className='text-3xl lg:text-4xl font-bold place-self-center'> Our Promotion Events</h1>
        </div>
        <div className="mt-20">
        <ProductGridViewer productData={data.result.slice(0,3)}/>
        </div>
        
        </section>
    );
}

export default Promotions;
