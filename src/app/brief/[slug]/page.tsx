import allProductsFetcherFromSanity, { detailOfSingleProductFromSanity } from '@/utils/apiCalling';
import React from 'react';
import singleProductType, { allProductsFetcherType } from '../../../../types';
import BriefProduct from '@/app/components/BriefProduct';


export async function generateStaticParams(){
    const data = await allProductsFetcherFromSanity() as allProductsFetcherType;
    return data.result.map((item:singleProductType) => {slug :item.slug })

}

export async function generateMetadata({params}:{params :{slug :string}}){
    const slug = params.slug;
    const detail = await detailOfSingleProductFromSanity(slug) as allProductsFetcherType;
    return{
     title : detail.result[0].productname,
    }  
}


const Brief = async({params} :{params :{slug:string}}) => {
    return (
        <div>
            <Detail slug={params.slug}/>
        </div>
    );
}


async function Detail ({slug} :{slug:string}){
    const data = await detailOfSingleProductFromSanity(slug);
return (
    <>
    <BriefProduct product={data.result[0]}/>
    </>
)
}

export default Brief;
