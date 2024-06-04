import { LoginLink, getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { LogIn } from 'lucide-react';
import React from 'react';
import {getAllCartProductsUserid} from '@/utils/apiCalling'
import { typeOfCart } from '@/lib/drizzle';
import CartMain from '../components/CartComp'

const Cart = async() => {
    const { getUser } = getKindeServerSession();
    const user = getUser();

    if (!user) {
        return (
            <div className="h-48 flex items-center justify-center gap-x-4">
                <LoginLink>
                    <LogIn color={'purple'} size={32} />
                </LoginLink>
                <h2 className='text-xl font-semibold text-purple-700'>Please Login to View your Cart</h2>
            </div>
        );
    }


   const data :typeOfCart[] = await getAllCartProductsUserid(user.id as string);
  
    return (
        <div>
             <CartMain data ={data}/> 
        </div>
    );
}

export default Cart;
