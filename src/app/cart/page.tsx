import { LoginLink, getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { LogIn } from 'lucide-react';
import React from 'react';
import {getAllCartProductsByUserid} from '@/utils/apiCalling'
import { typeOfCart } from '@/lib/drizzle';
import CartMain from '../components/CartComp'

export const dynamic ='force-dynamic'
const Cart = async() => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user) {
        return (
            <div className="h-48 flex items-center justify-center gap-x-4">
                <LoginLink>
                    <LogIn color={'purple'} size={32} />
                
                <h2 className='text-xl font-semibold text-purple-700'>Please Login to View your Cart</h2></LoginLink>
            </div>
        );
    }


   const data :typeOfCart[] = await getAllCartProductsByUserid(user.id as string);
  
    return (
        <div>
             <CartMain data ={data} user={user}/> 
        </div>
    );
}

export default Cart;
