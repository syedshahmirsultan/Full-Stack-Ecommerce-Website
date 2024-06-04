"use client"
import React, { useState } from 'react';
import singleProductType from '../../../types'; // Make sure this import is correct
import { urlForImage } from '../../../sanity/lib/image'; // Make sure this import is correct
import { ShoppingCart } from 'lucide-react';
import { KindeUser } from '@kinde-oss/kinde-auth-nextjs/types';
import { addToCartApiCall } from '@/utils/apiCalling';

const BriefProduct = ({ product ,user }: { product: singleProductType, user:KindeUser }) => {
    console.log("USERID :", user.id)
    console.log("USERNAME:", user.given_name)
    console.log("USEREmail :", user.email)
    const [size, setSize] = useState<string>(product.size[0]);
    const [activeImageUrl, setActiveImageUrl] = useState<string>(urlForImage(product.image[0]));
    const [imageArray, setImageArray] = useState<string[]>(() => {
        return product.image.map((element) => {
            return urlForImage(element);
        });
    });
    const [quantity, setQuantity] = useState(1);


    function incrementTheQuantity() {
        setQuantity(quantity + 1);
      };
    
      function decrementTheQuantity() {
        if (quantity !== 1) {
          setQuantity(quantity - 1);
        }
      };



      async function handleAddToCart(){
     
        if(!user){
          alert("Please Login First !")
        }
        else if(user){
            await addToCartApiCall(user.id as string,product._id);
            alert("Done !")
        }
      }

    return (
        <section className="text-gray-600 body-font overflow-hidden gap-y-8 mb-40">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt="ProductImage" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={activeImageUrl} />
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
<div className="flex mt-8 gap-x-4">
            <p className="font-bold text-xl text-slate-900">Quantity:</p>
            <div className="flex gap-2 items-center text-lg">
              <div
                onClick={decrementTheQuantity}
                className="select-none cursor-pointer flex justify-center  bg-gray-300 items-center w-9 h-9 rounded-full font-semibold text-lg">-<span className="">-</span></div>
              <p className="text-lg">{quantity}</p>
              <div
                onClick={incrementTheQuantity}
                className="select-none cursor-pointer flex justify-center items-center w-9 h-9 rounded-full border border-gray-800">+</div>
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



// "use client"
// import React, { useState, useEffect } from 'react';
// import singleProductType from '../../../types';
// import { urlForImage } from '../../../sanity/lib/image';
// import { ShoppingCart } from 'lucide-react';
// import { KindeUser } from '@kinde-oss/kinde-auth-nextjs/types';
// import { addToCartApiCall } from '@/utils/apiCalling';



//  const BriefProduct = ({ product, user }: { product: singleProductType; user: KindeUser | null }) => {
//     const [size, setSize] = useState<string>(product.size[0]);
//     const [activeImageUrl, setActiveImageUrl] = useState<string>(urlForImage(product.image[0]));
//     const [imageArray, setImageArray] = useState<string[]>(() => {
//         return product.image.map((element) => {
//             return urlForImage(element);
//         });
//     });
//     const [quantity, setQuantity] = useState(1);

//     useEffect(() => {
//         if (user) {
//             // Additional logic related to user if needed
//         }
//     }, [user]);

//     function incrementTheQuantity() {
//         setQuantity(quantity + 1);
//     };

//     function decrementTheQuantity() {
//         if (quantity !== 1) {
//             setQuantity(quantity - 1);
//         }
//     };

//     async function handleAddToCart() {
//         if (user) {
//             await addToCartApiCall(user.id, product._id);
//             alert("Done !");
//         } else {
//             // Handle case when user is null
//         }
//     }

//     return (
//         <section className="text-gray-600 body-font overflow-hidden gap-y-8 mb-40">
//             <div className="container px-5 py-24 mx-auto">
//                  <div className="lg:w-4/5 mx-auto flex flex-wrap">
//                      <img alt="ProductImage" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={activeImageUrl} />
//                      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
//                          <h1 className="text-gray-900 text-3xl font-medium mb-1">{product.productname}</h1>
//                          <h2 className="text-2xl mt-2 font-semibold text-pink-500">{product.producttype}</h2>
                  
//                          <div className="mt-4">
//                              {product.description.map((descItem, index) => (
//                                  <p key={descItem._key} className="text-slate-800 text-lg">
//                                      {descItem.children.map((child, childIndex) => (
//                                          <React.Fragment key={child._key}>
//                                              {child.text}
//                                          </React.Fragment>
//                                      ))}
//                                  </p>
//                              ))}
//                          </div>
//                          <div>
//      <h3 className="text-slate-800 font-bold text-lg mt-6">Select Size</h3>
//      <div className="flex gap-x-2 gap-y-4">
//          {
//              product.size.map((item:string,index:number) => {
//                  return (
//                      <div key={index} className="bg-gray-100 flex items-center justify-center h-[50px] mt-4 mb-4 w-[50px] hover:shadow-xl cursor-pointer rounded-full">
//                          <p className="text-[16px] font-semibold text-pink-500">{item}</p>
//                      </div>
//                  );
//              })
//          }
//      </div>
//  </div>
//  <div className="flex mt-8 gap-x-4">
//              <p className="font-bold text-xl text-slate-900">Quantity:</p>
//              <div className="flex gap-2 items-center text-lg">
//                <div
//                  onClick={decrementTheQuantity}
//                  className="select-none cursor-pointer flex justify-center  bg-gray-300 items-center w-9 h-9 rounded-full font-semibold text-lg">-<span className="">-</span></div>
//                <p className="text-lg">{quantity}</p>
//                <div
//                  onClick={incrementTheQuantity}
//                  className="select-none cursor-pointer flex justify-center items-center w-9 h-9 rounded-full border border-gray-800">+</div>
//              </div>
//            </div>


//                          <div className="flex gap-x-6 mt-16">
//                          <button 
//                          aria-label='This will add product to the cart'
//                          onClick={handleAddToCart}
//                          className='flex  bg-slate-900 hover:bg-slate-800 hover:border-slate-800 h-10 
//                          w-36 border-2 border-slate-950 rounded-lg '>
//  <ShoppingCart size={24} 
//  className="text-gray-200 place-self-center ml-2  mr-4" />
//  <div className=" text-gray-100 text-[16px] place-self-center">Add to Cart</div>
//  </button>
//                              <span className="title-font font-bold text-2xl text-slate-950">${product.price}.00</span>
//                          </div>
//                      </div>
//                  </div>         </div>
//         </section>
//     );
// };





// export default BriefProduct;