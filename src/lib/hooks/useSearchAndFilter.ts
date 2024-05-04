'use client'
import React, {useState} from "react";
import {ProductList, ProductObject} from "../../../my-types";
import useGetProducts from "@/lib/hooks/useGetProducts";

interface props {
    category?: string;
    list?: ProductObject[]
}

const useSearchAndFilter = ({category, list}: props) => {
    const {getByCategory, getBySearch} = useGetProducts();
    const [term, setTerm] = useState('');
    const [prices, setPrices]
        = useState<{ min: number, max: number }>({min: 0, max: 0});

    React.useEffect(() => {
        // ensure the minimum is not greater than max
        if (prices.min > prices.max) setPrices(prev => ({...prev, max: prices.min}))
        // ensure the max is not less than min
        if (prices.max < prices.min) setPrices(prev => ({...prev, min: prices.max}))
    }, [prices.max, prices.min])

    const [searchList, setSearchList] = useState<ProductObject[]>([])

    const searchInProductObject = (products: ProductObject[]): Array<ProductObject> => {
        return products.filter(item => {
            return Object.keys(item).join("").toLowerCase().includes(term.toLowerCase())
        })
    }

    const applySearch = async () => {
        // search in current list
        const currentList = searchInProductObject((list ? list : []));
        // search online
        const fetched = await getByCategory(term);
        const addition = searchInProductObject(fetched);
        for (let prod of addition) {
            if(!currentList.map(c => c._id).includes(prod._id))
                currentList.push(prod)
        }
        setSearchList(currentList);
    }

    return {
        searchList,
        term, setTerm,
        prices, setPrices,
        applySearch,
    }
}

export default useSearchAndFilter;