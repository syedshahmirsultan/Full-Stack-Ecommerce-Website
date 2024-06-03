// import React from 'react';

// const NewsLetter = () => {
//     return (
//         <section className='pt-80 pb-80 flex flex-col relative'>
//             <h1 className="text-slate-950 text-5xl font-bold lg:mx-auto">Subscribe Our NewsLetter</h1>
//             <p className="text-slate-700 mt-6 lg:mx-auto text-xl font-semibold">Get the latest information and<br/> 
//                promo offers directly</p>
//               <div className=" absolute lg:mx-auto -z-50"> <h1 className="text-slate-300/70  text-8xl font-bold"> NEWSLETTER</h1>
//        </div> </section>
//     );
// }

// export default NewsLetter;

import React from 'react';

const NewsLetter = () => {
    return (
        <section className='pt-40 pb-40 mb-32 lg:pt-80 lg:pb-80 flex flex-col relative'>
            <div className="absolute inset-0 flex justify-center items-center -z-10">
                <h1 className="text-slate-300/50 text-6xl lg:text-8xl font-bold">NEWSLETTER</h1>
            </div>
            <h1 className="text-slate-950 text-4xl text-center lg:text-5xl font-bold lg:mx-auto">Subscribe Our NewsLetter</h1>
            <p className="text-slate-700 mt-6 lg:mx-auto text-center text-xl font-semibold">
                Get the latest information and<br/> 
                promo offers directly
            </p>
            <div className="flex gap-y-2 lg:gap-y-0 flex-col mx-auto lg:flex-row lg:gap-x-4 mt-12">
            <input type="email" placeholder="Enter your email  "className="h-10 rounded-lg  w-80 border text-center border-slate-900 focus:border-none"/>
            <button className="bg-slate-950 px-4   py-2 rounded-lg text-gray-100 hover:bg-slate-800"> Get started</button>
            </div></section>
    );
}

export default NewsLetter;
