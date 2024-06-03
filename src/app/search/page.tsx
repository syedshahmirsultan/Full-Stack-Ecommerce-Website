"use client"
import React from 'react';
import  { searchProductsFetcherFromSanity } from '@/utils/apiCalling';
import { allProductsFetcherType } from '../../../types';
import { useSearchParams,redirect } from 'next/navigation';
import AllProductGridViewer from '../components/AllProductGridViewer';


const Search = async() => {
const params = useSearchParams();

if(!params.has("query")) redirect('/products');

const searchValue = params.get("query") as string ;
const data = await searchProductsFetcherFromSanity(searchValue ) as allProductsFetcherType;

    return (
        <div>
        <AllProductGridViewer productData={data.result}/>
        </div>
    );
}

export default Search;
