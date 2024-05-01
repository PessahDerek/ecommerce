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
    brand: string;
    name: string;
    price: number;
    images: Array<string | StaticImageData>
    category: ShoeCategory[]
    discount?: number;
}

declare type ButtonTypes = 'primary' | 'secondary' | 'danger';

declare type ShoeCategory = "Unisex" | "Men" | "Ladies" | "Kids" | "Sports" | "Casual" | "Discounted"
