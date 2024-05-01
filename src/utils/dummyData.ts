import {ProductObject} from "../../my-types";
import air from "@/assets/images/mens.jpeg"
import shoe2 from "@/assets/images/discounted.jpeg"
import shoe3 from "@/assets/images/sports.jpeg"

export const dummyData: Array<ProductObject> = [
    {
        brand: "Nike",
        name: "Air force 1",
        category: ['Unisex'],
        images: [air],
        price: 3500,
        discount: 3000,
    },
    {
        brand: "Nike",
        name: "Air force 1",
        category: ['Unisex'],
        images: [shoe2],
        price: 3500
    },
    {
        brand: "Nike",
        name: "Air force 1",
        category: ['Unisex'],
        images: [air],
        price: 3500
    },
    {
        brand: "Nike",
        name: "Air force 1",
        category: ['Unisex'],
        images: [shoe3],
        price: 3500
    },
]