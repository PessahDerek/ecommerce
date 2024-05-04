import {IconType} from 'react-icons'
import {StaticImageData} from "next/image";

declare type NavPath = {
    text: string;
    path: string;
    icon?: IconType
}

declare type Banner = {
    image: string;
    product_id: string
}

declare interface ProductObject {
    _id: string;
    brand: string;
    name: string;
    price: number;
    images: Array<string | StaticImageData>
    category: ProductCategoryType[]
    discount?: number;
}

declare type ProductList = { category: string | ProductCategoryType, products: ProductObject[] }[]

declare type ButtonTypes = 'primary' | 'secondary' | 'danger';

declare type ProductCategoryType = "Unisex" | "Men" | "Ladies" | "Kids" | "Sports" | "Casual" | "Discounted"
