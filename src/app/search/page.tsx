"use client"
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import AllProductGridViewer from '../components/AllProductGridViewer';
import { searchProductsFetcherFromSanity } from '@/utils/apiCalling';
import { allProductsFetcherType } from '../../../types';

const Search = () => {
    const router = useRouter();
    const params = useSearchParams();
    const [productData, setProductData] = useState<allProductsFetcherType | null>(null);
    
    useEffect(() => {
        if (!params.has("query")) {
            router.push('/products');
        } else {
            const searchValue = params.get("query") as string;
            const fetchData = async () => {
                const data = await searchProductsFetcherFromSanity(searchValue);
                setProductData(data as allProductsFetcherType);
            };
            fetchData();
        }
    }, [params, router]);
    
    if (!productData) {
        return <div>Loading...</div>;
    }
    
    return <AllProductGridViewer productData={productData.result} />;
};

export default Search;
