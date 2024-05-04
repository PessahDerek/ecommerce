
import {ProductObject} from "../../../my-types";
import {useCallback, useContext, useMemo} from "react";
import {ProductsContext} from "@/lib/stores/ProductsStore";


const useGetProducts = () => {
    const { addProducts } = useContext(ProductsContext)

    // TODO: Fetch using count
    const getByCategory = useCallback((category: string, from?: number): Promise<ProductObject[]> => {
        return new Promise((resolve, reject) => {
            fetch(`/api/products/read/find?term=${category}`, {
                    method: "GET"
                }
            )
                .then(response=>response.json())
                .then(responseData=>{
                    addProducts(category.toLowerCase(), responseData)
                    return resolve(responseData)
                })
                .catch(err => reject(err));
        })
    }, [addProducts])

    const getBySearch = (term: string) => {
        return new Promise((resolve, reject) => {
            fetch(`/api/products/read/search/find?term=${term}`)
                .then(res => res.json())
                .then(responseData=>{
                    resolve(responseData)
                })
                .catch(err => reject(err));
        })
    }

    return {
        getByCategory,
        getBySearch,
    }
}

export default useGetProducts;