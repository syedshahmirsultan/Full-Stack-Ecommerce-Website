import React from 'react';
import singleProductType from './../../../types';
import Image from 'next/image';
import { urlForImage } from '../../../sanity/lib/image';
import Link from 'next/link';

const AllProductGridViewer = ({productData }: {productData: Array<singleProductType>}) => {
    return (
        <section className="grid grid-cols-1 mt-20 lg:grid-cols-3 gap-x-4 w-full gap-y-10 mb-40">
            {productData.map((item: singleProductType) => {
                return (
                    <Link key={item.slug.current} href={`/brief/${item.slug.current}`}>
                        <div className='flex flex-col overflow-hidden mt-8 lg:mt-0 m-8 lg:m-0 hover:scale-110 duration-200'>
                            <div className='w-full lg:w-10/12 h-96 bg-gray-300'>
                                <Image
                                    src={urlForImage(item.image[0])}
                                    height={250}
                                    width={250}
                                    alt={item.productname}
                                    className="h-full w-auto object-center object-cover"
                                />
                            </div>
                            <div className='flex flex-col text-center lg:text-start'>
                                <p className='text-slate-900 text-lg font-semibold mt-4'>{item.productname}</p>
                                <p className='text-slate-900 text-lg font-semibold'>${item.price}</p>
                            </div>
                        </div>
                    </Link>
                );
            })}
        </section>
    );
};

export default AllProductGridViewer;
