"use client"
import React from 'react';
import { useSearchParams, redirect } from 'next/navigation';
import AllProductGridViewer from '../components/AllProductGridViewer';
import { searchProductsFetcherFromSanity } from '@/utils/apiCalling';
import { allProductsFetcherType } from '../../../types';

const Search = () => {
    const params = useSearchParams();
    
    if (!params.has("query")) {
        redirect('/products');
        return null;
    }
    
    const searchValue = params.get("query") as string;
    const [productData, setProductData] = React.useState<allProductsFetcherType | null>(null);
    
    React.useEffect(() => {
        const fetchData = async () => {
            const data = await searchProductsFetcherFromSanity(searchValue);
            setProductData(data as allProductsFetcherType);
        };
        fetchData();
    }, [searchValue]);
    
    if (!productData) {
        return <div>Loading...</div>;
    }
    
    return <AllProductGridViewer productData={productData.result} />;
};

export default Search;
