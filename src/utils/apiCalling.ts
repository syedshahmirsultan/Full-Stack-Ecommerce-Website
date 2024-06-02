
export default async function allProductsFetcherFromSanity(){
 const res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2024-06-02/data/query/production?query=*%5B_type+%3D%3D+%27products%27%5D%7B%0A++image%2C%0A++++productname%2C%0A++++slug%2C%0A++++price%2C%0A++++size%2C%0A++++description%2C%0A++++quantity%2C%0A++++producttype%0A%7D`)
 if(!res.ok){
    return "Error"
 }
 return res.json()
}