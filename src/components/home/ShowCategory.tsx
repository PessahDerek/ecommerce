'use client'
import React from "react";
import {ShoeCategory} from "../../../my-types";
import Image, {StaticImageData} from "next/image";

interface props extends React.HtmlHTMLAttributes<HTMLDivElement> {
    image: string | StaticImageData;
    category: ShoeCategory
}

const ShowCategory = ({image, category, ...rest}: props) => {
    const [hover, setHover] = React.useState(false);
    return (
        <div
            {...rest}
            onMouseEnter={()=>setHover(true)}
            onMouseLeave={()=>setHover(false)}
            className={`w-full h-full min-h-[20vh] flex overflow-hidden rounded-xl ${rest.className ?? ""}`}
        >
            <Image
                src={image}
                alt={category}
                fill={true}
                priority={true}
                sizes={"(min-width: 100%),100%, 100%"}
                className={`absolute top-0 block ${hover?"scale-110":""} left-0 w-full object-cover object-center h-full`}
            />
            <div className={`w-1/2 h-1/2 !duration-1000 ${hover?"md:w-1/2 md:h-1/2":"md:w-max md:h-max"} rounded-t-full mt-auto flex bg-secondary bg-opacity-70 `}>
                <h2 className={'m-auto p-2 rounded-full text-primary font-black text-[2em]'}>
                    {category}
                </h2>
            </div>
        </div>
    )
}


export default ShowCategory;