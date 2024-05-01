'use client'
import React from "react";
import {ProductObject} from "../../my-types";
import Image from "next/image";


interface props extends React.HtmlHTMLAttributes<HTMLDivElement> {
    product: ProductObject;
}


const ListProduct = ({product, ...rest}: props) => {
    const [hover, setHover] = React.useState(false);
    return (
        <div
            {...rest}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onMouseOver={e=>{
                e.currentTarget.scrollIntoView({block: 'nearest', behavior: 'smooth', inline: "nearest"})
            }}
            className={`w-full min-w-[300px] h-[50vh] cursor-pointer hover:scale-[99.5%] bg-white hover:shadow-xl overflow-hidden active:shadow-none rounded-xl ${rest.className ?? ''}`}
        >
            <Image
                src={product.images[0]}
                alt={product.name}
                fill={true}
                sizes={"(min-width: 100%),100%, 100%"}
                priority={true}
                className={` ${hover ? "scale-110" : ""}`}
            />
            <div className={`absolute bottom-0 grid p-4 bg-white rounded-t-full ${hover?"rounded-t-none w-full":""}`}>
                <div className={"grid"}>
                    {product.discount ?
                        <span className={"grid"}>
                                <del className={'w-max text-accent'}>
                                    {product.price}/=
                                </del>
                                <strong className={'text-[2.5vmax] font-bold'}>
                                    {product.discount}/=
                                </strong>
                            </span> :
                        <strong className={'text-[2.5vmax] font-bold'}>
                            {product.price}/=
                        </strong>
                    }
                    <span>
                        {product.name}
                    </span>
                </div>

            </div>
        </div>
    )
}


export default ListProduct;