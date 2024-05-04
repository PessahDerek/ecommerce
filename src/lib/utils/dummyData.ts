import {ProductObject} from "../../../my-types";
import air from "@/lib/assets/images/mens.jpeg"
import shoe2 from "@/lib/assets/images/discounted.jpeg"
import shoe3 from "@/lib/assets/images/sports.jpeg"

export const dummyData: Array<ProductObject> = [
    {
        _id: '1',
        brand: "Nike",
        name: "Air force 1",
        category: ['Unisex'],
        images: [air],
        price: 3500,
        discount: 3000,
    },
    {
        _id: '12',
        brand: "Fila",
        name: "Check X",
        category: ['Unisex'],
        images: [shoe2],
        price: 3500
    },
    {
        _id: '123',
        brand: "Nike",
        name: "Air force 1",
        category: ['Unisex'],
        images: [air],
        price: 3500
    },
    {
        _id: '1234',
        brand: "Nike",
        name: "Air force 1",
        category: ['Unisex'],
        images: [shoe3],
        price: 3500
    },
]