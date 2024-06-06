"use client";
import { typeOfCart } from "@/lib/drizzle";
import React, { useEffect, useState } from "react";
import singleProductType, { allProductsFetcherType } from "../../../types";
import { DeleteIcon, ShoppingBagIcon, ClockIcon, Trash2 } from "lucide-react";
import Link from "next/link";
import { handleDelete, productFromIdCart } from "@/utils/apiCalling";
import { urlForImage } from "../../../sanity/lib/image";
import Image from "next/image";
import Quantity from "./Quantity";
import Pricing from "./Pricing";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";

export const dynamic="force-dynamic"

const CartMain = ({ data,user }: { data: typeOfCart[],user:KindeUser }) => {
  const [productData, setProductData] = useState<singleProductType[]>([]);

  useEffect(() => {
    dataGetter();
  }, [data]);

  async function dataGetter() {
    const productPromise = data.map((item) => {
      return productFromIdCart(item.productid);
    });

    try {
      const productData = await Promise.all(productPromise);
      console.log("PRODUCT DATA:", productData);
      setProductData(
        productData.map((item: allProductsFetcherType) => {
          return item.result[0];
        })
      );
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  }



  if (data.length === 0) {
    return (
      <div className="h-[80vh] flex items-center justify-center flex-col gap-3 ">
        <ShoppingBagIcon color="purple" size={42} />
        <h2 className="text-2xl font-semibold text-gray-600">
          Cart is Empty,{" "}
          <Link href="/products" className="text-xl">
            Browse Products
          </Link>
        </h2>
      </div>
    );
  }

  return (
    <section className="lg:ml-20 ml-2 lg:mb-60 mb-80">
      <h1 className="text-slate-800 font-bold text-3xl mx-auto flex justify-center lg:justify-start mb-12 mt-12">
        Shopping Cart
      </h1>
      <div className="grid lg:grid-cols-2 gap-4">
        {productData.map((item, index: number) => (
          <div
            key={index}
            className="flex flex-col gap-4 border rounded-lg p-4 relative"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-lg lg:text-xl text-slate-800 font-bold">
                {item.productname}
              </h2>
              <Trash2 size={24} color={'red'} onClick={()=>
                handleDelete(user.id as string,item._id)
              } className="cursor-pointer"/>
            </div>
            <div className="flex justify-between items-center">
              <Image
                src={urlForImage(item.image[0])}
                width={120}
                height={70}
                alt="Product Image"
                className="object-cover"
              />
              <Quantity item={item} data={data[index]} user={user} />
            </div>
            <p className="text-md text-orange-700 font-semibold">
              {item.producttype}
            </p>
            <div className="flex justify-between items-center flex-wrap">
              <div className="flex items-center">
                <ClockIcon size={16} className="mr-1 text-orange-700" />
                <p className="text-md text-orange-700 font-semibold">
                  Estimated Delivery:
                </p>
                <p className="text-md text-slate-700 font-semibold ml-1">
                  5 Working Days
                </p>
              </div>
              <p className="text-md text-gray-950 font-bold">
                ${item.price}.00
              </p>
            </div>
          </div>
        ))}
      </div>
     <Pricing productData={productData} data={data}/>
    </section>
  );
};

export default CartMain;
