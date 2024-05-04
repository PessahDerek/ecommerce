'use client'

import React, {useState} from "react";
import {ProductCategoryType, ProductList, ProductObject} from "../../../my-types";

export const ProductsContext = React.createContext<{
    addProducts: (category: string | ProductCategoryType, products_to_add: ProductObject[]) => void;
    products: ProductList;
}>({
    addProducts: () => {
    },
    products: []
})

const ProductsStore = ({
                           children,
                       }: Readonly<{
    children: React.ReactNode;
}>) => {
    const [products, setProducts]
        = useState<ProductList>([])

    const addProducts = (category: string | ProductCategoryType, products_to_add: ProductObject[]) => {
        const categoryIndex = products.findIndex(f => f.category === category);
        let newList = [...products];
        if (categoryIndex === -1)
            newList.push({category: category, products: products_to_add})
        else newList[categoryIndex].products.concat(products_to_add);
        setProducts(newList);
    }

    return (
        <ProductsContext.Provider value={{
            addProducts: addProducts,
            products: products
        }}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsStore;