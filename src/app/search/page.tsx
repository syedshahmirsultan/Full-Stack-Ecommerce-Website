"use client";

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import AllProductGridViewer from '../components/AllProductGridViewer';
import { searchProductsFetcherFromSanity } from '@/utils/apiCalling';
import { allProductsFetcherType } from '../../../types';

const SearchComponent = () => {
    const router = useRouter();
    const params = useSearchParams();
    const [productData, setProductData] = useState<allProductsFetcherType | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!params.has("query")) {
            router.push('/products');
            return;
        }

        const searchValue = params.get("query") as string;
        const fetchData = async () => {
            setLoading(true);
            try {
                const data = await searchProductsFetcherFromSanity(searchValue);
                setProductData(data as allProductsFetcherType);
            } catch (error) {
                console.error("Failed to fetch products", error);
                setProductData(null);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [params, router]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!productData || !productData.result || productData.result.length === 0) {
        return <div>No products found</div>;
    }

    return <AllProductGridViewer productData={productData.result} />;
};

const Search = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SearchComponent />
        </Suspense>
    );
};

export default Search;




// "use client"
// import React, { useEffect, useState } from 'react';
// import { useSearchParams, useRouter } from 'next/navigation';
// import AllProductGridViewer from '../components/AllProductGridViewer';
// import { searchProductsFetcherFromSanity } from '@/utils/apiCalling';
// import { allProductsFetcherType } from '../../../types';

// const Search = () => {


    
//     const router = useRouter(); // Using useRouter hook
//     const params = useSearchParams();
//     const [productData, setProductData] = useState<allProductsFetcherType | null>(null);
    
    
//     useEffect(() => {
//         if (!params.has("query")) {
//             router.push('/products'); // Using router.push instead of redirect
//         } else {
//             const searchValue = params.get("query") as string;
//             const fetchData = async () => {
//                 const data = await searchProductsFetcherFromSanity(searchValue);
//                 setProductData(data as allProductsFetcherType);
//             };
//             fetchData();
//         }
//     }, [params, router]);

//     if (!productData) {
//         return <div>Loading...</div>;
//     }
    
//     return <AllProductGridViewer productData={productData.result} />;
// };

// // Wrap Search component in a Suspense boundary
// const SearchWithSuspense = () => (
//     <React.Suspense fallback={<div>Loading...</div>}>
//         <Search />
//     </React.Suspense>
// );

// export default SearchWithSuspense;

