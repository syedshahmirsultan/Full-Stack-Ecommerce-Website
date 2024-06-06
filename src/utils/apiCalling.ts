import refreshData from "./action"
import BASE_PATH_FORAPI from "./basePath"

export default async function allProductsFetcherFromSanity(){
 const res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2024-06-02/data/query/production?query=*%5B_type+%3D%3D+%27products%27%5D%7B%0A++image%2C%0A++++productname%2C%0A++++slug%2C%0A++++price%2C%0A++++size%2C%0A++++description%2C%0A++++quantity%2C%0A++++producttype%2c_id%0A%7D`)
 if(!res.ok){
    return "Error"
 }
 return res.json()
}


export async function maleProductsFetcherFromSanity(){
   const res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2024-06-02/data/query/production?query=*%5B_type+%3D%3D+%27products%27+%26%26+producttype+%3D%3D+%27Male%27%5D%7B%0A++image%2C%0A++++productname%2C%0A++++slug%2C%0A++++price%2C%0A++++size%2C%0A++++description%2C%0A++++quantity%2C%0A++++producttype%2c_id%0A%7D`)
   if(!res.ok){
      return "Error"
   }
   return res.json()


}


export async function femaleProductsFetcherFromSanity(){
   const res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2024-06-02/data/query/production?query=*%5B_type+%3D%3D+%27products%27+%26%26+producttype+%3D%3D+%27Female%27%5D%7B%0A++image%2C%0A++++productname%2C%0A++++slug%2C%0A++++price%2C%0A++++size%2C%0A++++description%2C%0A++++quantity%2C%0A++++producttype%2c_id%0A%7D`)
   if(!res.ok){
      return "Error"
   }
   return res.json()


}

export async function kidProductsFetcherFromSanity(){
   const res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2024-06-02/data/query/production?query=*%5B_type+%3D%3D+%27products%27+%26%26+producttype+%3D%3D+%27Kids%27%5D%7B%0A++image%2C%0A++++productname%2C%0A++++slug%2C%0A++++price%2C%0A++++size%2C%0A++++description%2C%0A++++quantity%2C%0A++++producttype%2c_id%0A%7D`)
   if(!res.ok){
      return "Error"
   }
   return res.json()

}

export async function searchProductsFetcherFromSanity(search:string){
   const res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2024-06-02/data/query/production?query=*%5B_type+%3D%3D+%27products%27+%26%26+productname+match+%27${search}%27%5D%7B%0A++image%2C%0A++++productname%2C%0A++++slug%2C%0A++++price%2C%0A++++size%2C%0A++++description%2C%0A++++quantity%2C%0A++++producttype%2c_id%0A%7D`)
   if(!res.ok){
      return "Error"
   }
   return res.json()

}


export async function detailOfSingleProductFromSanity(search:string){
   const res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2024-06-02/data/query/production?query=*%5B_type+%3D%3D+%27products%27+%26%26+slug.current+match+%27${search}%27%5D%7B%0A++image%2C%0A++++productname%2C%0A++++slug%2C%0A++++price%2C%0A++++size%2C%0A++++description%2C%0A++++quantity%2C%0A++++producttype%2c_id%0A%7D`)
   if(!res.ok){
      return "Error"
   }
   return res.json()
}

 

export async function getAllCartProductsByUserid(userid:string){
const res = await fetch(`https://shahmir-full-stack-ecommerce-website.vercel.app/api/cartFunc?userid=${userid}`)

if(!res.ok){
   return "Error"
}

return res.json();

}




export async function  productFromIdCart(productid:string){
   const res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2024-06-02/data/query/production?query=*%5B_type+%3D%3D+%27products%27+%26%26+_id+%3D%3D+%27${productid}%27%5D%7B%0A++image%2C%0A++++productname%2C%0A++++slug%2C%0A++++price%2C%0A++++size%2C%0A++++description%2C%0A++++quantity%2C%0A++++producttype%2C%0A++++_id%0A%7D`)
  
  if(!res.ok){
return "Error"
  }
  
   return res.json()
}





export async function addToCartApiCall(userid:string,productid:string){
   const res = await fetch(`https://shahmir-full-stack-ecommerce-website.vercel.app/api/cartFunc`,{
      method :"POST",
      body :JSON.stringify({
         userid:userid,
         productid:productid,
         quantity: 1
      })
   })

   return "Okay"

}



export async function updateCartItem(userid:string,productid:string,quantity:number){
   console.log("QUANTITY :",quantity);
   const res = await fetch(`https://shahmir-full-stack-ecommerce-website.vercel.app/api/cartFunc`,{
      method :"PUT",
      body :JSON.stringify({
         userid:userid,
         productid:productid,
         quantity: quantity
      })
   })

   await refreshData();
}


export async function handleDelete(userid:string,productid:string){
   const res = await fetch(`https://shahmir-full-stack-ecommerce-website.vercel.app/api/cartFunc?userid=${userid}&productid=${productid}`,{
method :"DELETE"
   })
   await refreshData();
   
}