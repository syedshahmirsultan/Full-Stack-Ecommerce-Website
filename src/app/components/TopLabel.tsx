import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import React from 'react';


const TopLabel = async () => {
    const {getUser} = getKindeServerSession();
    const user = getUser();
    return (
        <section className="flex flex-col lg:flex-row w-full justify-between h-15 bg-slate-700 ">
 <div className="ml-6 place-self-center">
 <a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=18&pause=1000&color=4015F7&random=false&width=435&lines=Welcome+to+Shahmir+Ecommerce+Website+!;Nice+to+meet+you+!;Here+to+provide+you+with+best+services+!;Find+variety+of+different+products+!;Signup+to+get+big+deals+!" alt="Typing SVG" /></a> </div>
 <div className="flex justify-stretch md:justify-end gap-x-4  md:pb-2  pl-4 pr-4 pt-2 lg:pr-14">
     { await  user ?  (
    <LogoutLink className=" text-white px-4 py-2 mb-2 border border-black bg-black rounded-lg text-[14px] hover:bg-slate-700 hover:border-purple-800">Log out</LogoutLink>
) : ( <div className="flex gap-x-4 pb-2 md:pb-0"><LoginLink className=" text-white px-3 py-1 border border-black bg-black rounded-lg text-[14px] hover:bg-slate-700 hover:border-purple-800">Sign in</LoginLink>
<RegisterLink className="border border-purple-800 text-white px-3 py-1 rounded-lg text-[14px] hover:bg-black">Sign up</RegisterLink></div>) 
}</div>

</section>
    );
}

export default TopLabel;


