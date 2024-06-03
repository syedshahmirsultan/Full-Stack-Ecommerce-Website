import React from 'react';
import AllProductGridViewer from '../components/AllProductGridViewer';
import { maleProductsFetcherFromSanity } from '@/utils/apiCalling';
import { allProductsFetcherType } from '../../../types';

const MaleProducts = async () => {
    const data = await maleProductsFetcherFromSanity() as allProductsFetcherType;
    return (
        <div>
        <AllProductGridViewer productData={data.result}/>
        </div>
    );
}

export default MaleProducts;
