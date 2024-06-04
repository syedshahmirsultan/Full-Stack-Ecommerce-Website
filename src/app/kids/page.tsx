import React from 'react';
import AllProductGridViewer from '../components/AllProductGridViewer';
import { kidProductsFetcherFromSanity } from '@/utils/apiCalling';
import { allProductsFetcherType } from '../../../types';

const KidsProducts = async () => {
    const data = await kidProductsFetcherFromSanity() as allProductsFetcherType;
    return (
        <div>
        <AllProductGridViewer productData={data.result}/>
        </div>
    );
}

export default KidsProducts;



