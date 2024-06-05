import React from 'react';
import Image from 'next/image'
import Link from 'next/link';


const Jewellery = () => {
    return (
        <section className='pt-20'>
            <h1 className='text-4xl font-bold text-slate-800 lg:mb-8 lg:text-5xl text-center lg:text-end lg:gap-y-2'>
    <span className="block mr-0 lg:mr-36">Unique and</span>
    <span className="block">Authentic Vintage</span>
    <span className="block mr-0 lg:mr-52">Designer</span>
    <span className="block mr-0 lg:mr-[200px]">Jewellery</span>
</h1>
<div className='flex flex-col lg:flex-row lg:mt-8 relative pt-10'>
<div className="grid grid-cols-1 lg:grid-rows-2 w-full lg:w-[40%] gap-y-16">
<div className="flex flex-col gap-y-8 lg:gap-y-0 lg:flex-row lg:justify-between text-center">
<div className='flex flex-col gap-y-4 lg:gap-y-2'>
<h3 className='text-xl font-bold text-slate-800'>Using Good Quality <br/> Materials</h3>
<p className='text-slate-700 text-lg'>Lorem ipsum dolor sit <br/> amt, consectetur <br/> adipiscing elit.</p>
</div>
<div className='flex flex-col gap-y-2'>
<h3 className='text-xl font-bold text-slate-800'>Using Good Quality <br/> Materials</h3>
<p className='text-slate-700 text-lg'>Lorem ipsum dolor sit <br/> amt, consectetur <br/> adipiscing elit.</p>
</div></div>
<div className="flex flex-col lg:flex-row lg:justify-between gap-y-8 lg:gap-y-0 text-center">
<div className='flex flex-col gap-y-2'>
<h3 className='text-xl font-bold text-slate-800'>Using Good Quality <br/> Materials</h3>
<p className='text-slate-700 text-lg'>Lorem ipsum dolor sit <br/> amt, consectetur <br/> adipiscing elit.</p>
</div>
<div className='flex flex-col gap-y-2'>
<h3 className='text-xl font-bold text-slate-800'>Using Good Quality <br/> Materials</h3>
<p className='text-slate-700 text-lg'>Lorem ipsum dolor sit <br/> amt, consectetur <br/> adipiscing elit.</p>
</div></div>

<h1 className="lg:text-9xl text-[80px] text-slate-200/65 font-bold absolute lg:text-start text-center -z-50 mt-0 mb-12">
    Different <br/> from <br/> others
</h1>

</div>
<div className='flex flex-col justify-center ml-20 lg:flex-row lg:gap-x-4 w-[60%] lg:ml-20 mt-24 lg:mt-0'>
<div>
<Image src="/images/jewelleryImage.png" alt="Jewellery Section Image" width={1000} height={1000} className="w-full  h-full self-center lg:h-full"/>
</div>
<div className="mt-6 lg:mt-2 lg:ml-3 text-center">
   <p className='text-[20px] text-gray-700 '>
   This piece is ethically<br/> crafted in our small<br/> family-owned workshop in Peru with unmatched<br/> attention to detail and<br/> care. The Natural color<br/> is the actual
    natural<br/> color of the fiber<br/>, undyed and 100%<br/> traceable.
    </p>
    <Link href="/products"><button className="px-6 py-2 mt-8 text-gray-100 text-center bg-gray-900  rounded-lg hover:bg-gray-800">
See All Products
        </button> </Link>
</div>
</div>
 </div>  
  
        </section>
    );
}

export default Jewellery;
