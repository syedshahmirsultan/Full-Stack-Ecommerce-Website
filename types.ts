import { Image } from "sanity";

export interface singleProductTypeDescription {
  _key: string;
  markDefs: [];
  children: any[];
  _type: string;
  style: string;
}

export interface singleProductTypeSlug {
  current: string;
  _type: string;
}

export default interface singleProductType {
  quantity: number;
  producttype: string;
  image: Image[];
  productname: string;
  slug: singleProductTypeSlug; 
  price: number;
  size: string[];
  description: singleProductTypeDescription[];
  _id:string
}

export interface allProductsFetcherType {
  result: Array<singleProductType>;
  query: string;
}
