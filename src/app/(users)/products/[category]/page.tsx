'use client'
import SearchAndFilter from "@/lib/components/products/SearchAndFilter";
import {useParams, useRouter} from "next/navigation";
import useGetProducts from "@/lib/hooks/useGetProducts";
import React, {useContext, useEffect, useLayoutEffect, useMemo} from "react";
import {ProductsContext} from "@/lib/stores/ProductsStore";
import ListProduct from "@/lib/components/ListProduct";
import useSearchAndFilter from "@/lib/hooks/useSearchAndFilter";
import Button from "@/lib/uiComponents/buttons/Button";


const Page = () =>{
    const route = useParams();
    const {products} = useContext(ProductsContext);
    const { getByCategory } = useGetProducts();
    const [page, setPage] = React.useState(0);
    const showProducts = useMemo(()=>{
        return products.flatMap(
            f => (f.category === route['category']?.toString().toLowerCase()) ? f.products : []
        ).slice((page*10), 20)
    }, [page, products, route])

    const { searchList } = useSearchAndFilter({category: route['category'].toString(), list:showProducts})


    useEffect(() => {
        if(products.length < 1){
            getByCategory(route['category'].toString(), page)
                .catch(err =>{})
        }
    }, [products, getByCategory, page, route])


    return (
        <div className={'w-full h-[calc(100vh-70px)] grid grid-flow-col auto-cols-auto'}>
            <SearchAndFilter />
            <section className={'flex-1 max-w-[98%] h-full space-y-4 overflow-y-auto p-2'}>
                <div className={"w-full grid grid-cols-2 md:grid-cols-3 gap-2 outline-dashed justify-items-center"}>
                    {[...searchList.length < 1 ? showProducts : searchList].map(
                        (product, i)=>
                        <ListProduct key={i} product={product} />
                    )
                    }
                </div>
                <div className={'w-max h-max gap-4 p-2 m-auto flex justify-items-center bg-white rounded-full shadow-xl'}>
                    {[..." ".repeat(10).split('')].map((_count, i)=>
                        <Button className={`w-[30px] h-[30px] rounded-full ${page === (i) ? '' : "outlined"} m-auto`} text={`${i+1}`} key={i} />
                    )}
                </div>
            </section>
        </div>
    )
}

export default Page;

