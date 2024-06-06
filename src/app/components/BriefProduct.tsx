"use client"
import React, { useState } from 'react';
import singleProductType from '../../../types'; 
import { urlForImage } from '../../../sanity/lib/image'; 
import { ShoppingCart } from 'lucide-react';
import { KindeUser } from '@kinde-oss/kinde-auth-nextjs/types';
import { addToCartApiCall } from '@/utils/apiCalling';
import { useToast } from '@/components/ui/use-toast';

export const dynamic = 'force-dynamic';

const BriefProduct = ({ product ,user }: { product: singleProductType, user:KindeUser|null }) => {
    const [size, setSize] = useState<string>(product.size[0]);
    const [activeImageUrl, setActiveImageUrl] = useState<string>(urlForImage(product.image[0]));
    const [imageArray, setImageArray] = useState<string[]>(() => {
        return product.image.map((element) => {
            return urlForImage(element);
        });
    });


const { toast } = useToast();

      async function handleAddToCart(){
     
        if(user){
            await addToCartApiCall(user.id,product._id);
            toast({
                title: "Successfully",
                description: "Added to Cart Successfully !",
              })
        }
        else {
            toast({
                title: "Unsuccessfully",
                description: "Cannot Add to Cart Successfully !",
                variant :"destructive"
              })
        }
      }

    return (
        <section className="text-gray-600 body-font overflow-hidden gap-y-8 mb-40">
            <div className="container mt-8 px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt="ProductImage" className="lg:w-1/2 w-full lg:h-auto h-10/12 object-cover object-center rounded" src={activeImageUrl} />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h1 className="text-gray-900 text-3xl font-medium mb-1">{product.productname}</h1>
                        <h2 className="text-2xl mt-2 font-semibold text-pink-500">{product.producttype}</h2>
                  
                        <div className="mt-4">
                            {product.description.map((descItem, index) => (
                                <p key={descItem._key} className="text-slate-800 text-lg">
                                    {descItem.children.map((child, childIndex) => (
                                        <React.Fragment key={child._key}>
                                            {child.text}
                                        </React.Fragment>
                                    ))}
                                </p>
                            ))}
                        </div>
                        <div>
    <h3 className="text-slate-800 font-bold text-lg mt-6">Select Size</h3>
    <div className="flex gap-x-2 gap-y-4">
        {
            product.size.map((item:string,index:number) => {
                return (
                    <div key={index} className="bg-gray-100 flex items-center justify-center h-[50px] mt-4 mb-4 w-[50px] hover:shadow-xl cursor-pointer rounded-full">
                        <p className="text-[16px] font-semibold text-pink-500">{item}</p>
                    </div>
                );
            })
        }
    </div>
</div>
                        <div className="flex gap-x-6 mt-16">
                        <button 
                        aria-label='This will add product to the cart'
                        onClick={handleAddToCart}
                        className='flex  bg-slate-900 hover:bg-slate-800 hover:border-slate-800 h-10 
                        w-36 border-2 border-slate-950 rounded-lg '>
<ShoppingCart size={24} 
className="text-gray-200 place-self-center ml-2  mr-4" />
<div className=" text-gray-100 text-[16px] place-self-center">Add to Cart</div>
</button>
                            <span className="title-font font-bold text-2xl text-slate-950">${product.price}.00</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BriefProduct;


