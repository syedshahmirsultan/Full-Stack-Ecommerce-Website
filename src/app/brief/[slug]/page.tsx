import allProductFetherFromSanity, { detailOfSingleProductFromSanity } from '@/utils/apiCalling';
import singleProductType, { allProductsFetcherType } from '../../../../types';
import BriefProduct from '@/app/components/BriefProduct';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { KindeUser } from '@kinde-oss/kinde-auth-nextjs/types';


export async function generateStaticParams(){
    const data = await allProductFetherFromSanity() as allProductsFetcherType;
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
    const { getUser } = getKindeServerSession();
    const user = await getUser();
return (
    <>
    <BriefProduct product={data.result[0]} user={user}/>
    </>
)
}

export default Brief;


