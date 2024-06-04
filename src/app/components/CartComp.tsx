"use client"
import { typeOfCart } from '@/lib/drizzle';
import React, { useEffect, useState } from 'react';
import singleProductType from '../../../types';
import { ShoppingBagIcon } from 'lucide-react';
import Link from 'next/link'
import { productFromIdCart } from '@/utils/apiCalling';

const CartMain = ({data}:{data:typeOfCart[]}) => {
   const [productData,setProductData] = useState<singleProductType[]>();


   if(data.length == 0){
    return (
        <div className="h-[80vh] flex items-center justify-center flex-col gap-3 ">
            <ShoppingBagIcon color='purple' size={42}/>
            <h2 className="text-2xl font-semibold text-gray-600">Cart is Empty, <Link href="/products" className="text-xl">
               Browse Products  </Link>
            </h2>       </div>
    )
   }
   
 async function dataGetter(){
    const productPromise =  data.map((item) => {
return productFromIdCart(item.productid)

    })
   
try {
const productData = await Promise.all(productPromise);
// setProductData(productData)
}

catch(error){

}
}

useEffect(() => {
    dataGetter
}, [data]);


    return (
        <div>
            
        </div>
    );
}

export default CartMain;
