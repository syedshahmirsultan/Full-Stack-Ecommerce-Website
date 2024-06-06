import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Hero = () => {
    return (
        <section className='pt-8 flex flex-col-reverse lg:flex-row justify-center space-y-11 lg:space-y-0 lg:justify-between'>
<div className='flex flex-col pt-20 space-y-8 text-center'>
<button className='h-9 w-24 text-blue-700 bg-sky-200 font-semibold rounded-lg place-self-center lg:place-self-start'>
Sale 70%
</button>
<h1 className="text-5xl md:text-6xl font-bold text-center lg:text-start text-gray-900">
An Industrial <br/>Take on <br/> Streetwear
</h1>
<p className='text-zinc-900 text-lg text-center lg:text-start'>Anyone can beat you but no one can <br/> beat your outfit as long as you wear <br/> Dine outfits.</p>
<Link href="/products"><button className='flex bg-gray-950 h-16 w-36 border-2 border-slate-950 rounded-sm ml-6 lg:ml-0 lg:place-self-start'>
<ShoppingCart size={20} className="text-white place-self-center ml-2  mr-4" />
<div className="font-semibold text-gray-100 text-md place-self-center">Start <br/> Shopping</div>
</button></Link>
<div className="grid grid-cols-2 ml-8 lg:grid-cols-4 gap-x-6 gap-y-6">
<Image src="/images/bazaar.png" alt="Image of Bazaar logo" width={80} height={80}/>
<Image src="/images/bustle.png" alt="Image of Bustle Logo" width={80} height={80}/>
<Image src="/images/versace.png" alt="Image of Versace Logo" width={80} height={80}/>
<Image src="/images/instyle.png" alt="Image of InStyle Logo" width={80} height={80}/>
</div>
</div>

<div className='bg-red-100/70 rounded-full'>
   <Image src="/images/hero.png" alt="hero Image" width={600} height={600}/> 
</div>
        </section>
    );
}

export default Hero;
