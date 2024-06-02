import React from 'react';
import singleProductType from '../../../types';
import Image from 'next/image'
import { urlForImage } from '../../../sanity/lib/image';

const ProductGridViewer = ({productData}:{productData :Array<singleProductType>}) => {
    return (
        <section className=" flex flex-col lg:flex-row gap-x-6 w-full">
        {
         productData.map((item:singleProductType,index:number) =>{
            console.log(urlForImage(item.image[0]));

            return (
                <div key={index} className='flex flex-col overflow-hidden mt-8 lg:mt-0 m-8 lg:m-0 hover:scale-110 duration-200'>
                <div className='w-full lg:w-12/12 h-96 bg-gray-300' >
                <Image src={urlForImage(item.image[0])} height={500} width={500} alt={item.productname} className=" h-full w-auto object-center object-cover"/>
                </div>
                <div className='flex flex-col text-center lg:text-start'><p className='text-slate-900 text-lg font-semibold mt-4'>{item.productname}</p>
                <p className='text-slate-900 text-lg font-semibold'>${item.price}</p>
                </div></div>
            )
         })
        }
            
        </section>
    );
}

export default ProductGridViewer;
