import React from 'react';
import AllProductGridViewer from '../components/AllProductGridViewer';
import { femaleProductsFetcherFromSanity } from '@/utils/apiCalling';
import { allProductsFetcherType } from '../../../types';

const FemaleProducts = async () => {
    const data = await femaleProductsFetcherFromSanity() as allProductsFetcherType;
    return (
        <div>
        <AllProductGridViewer productData={data.result}/>
        </div>
    );
}

export default FemaleProducts;





