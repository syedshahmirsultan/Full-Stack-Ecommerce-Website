import allProductsFetcherFromSanity from '@/utils/apiCalling';
import React from 'react';
import { allProductsFetcherType } from '../../../types';
import AllProductGridViewer from '../components/AllProductGridViewer';

const Products = async () => {
    const data = await allProductsFetcherFromSanity() as allProductsFetcherType;
    return (
        <div>
        <AllProductGridViewer productData={data.result}/>
        </div>
    );
}

export default Products;

