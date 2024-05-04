import {HtmlHTMLAttributes} from "react";
import {ProductObject} from "../../../../my-types";
import Button from "@/lib/uiComponents/buttons/Button";
import ListProduct from "@/lib/components/ListProduct";
import {initialEnv} from "@next/env";
import {BsArrowRight} from "react-icons/bs";


interface props extends HtmlHTMLAttributes<HTMLDivElement>{
    title: string;
    items: ProductObject[];
    pathToMore: string;
}


const HomeListProducts = ({title, items, pathToMore}:props) => {

    return (
        <div className={"w-[90%] grid gap-4 m-auto"}>
            <h2 className={'text-center text-secondary'}>{title}</h2>
            <div className={'p-4 grid grid-flow-col gap-4 overflow-x-auto hide-scrollbar'}>
                {items.map((item, index) =>
                    <ListProduct product={item} key={index} />
                )}
            </div>
            <Button
                text={"See all"}
                Icon={BsArrowRight}
                className={'m-auto'}
            />
        </div>
    )
}

export default HomeListProducts;
