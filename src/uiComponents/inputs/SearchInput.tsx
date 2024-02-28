import {BiSearch} from "react-icons/bi";
import TextInput from "@/uiComponents/inputs/TextInput";
import React, {useMemo, useState} from "react";
import {MdClear} from "react-icons/md";


export default function SearchInput(){
    const [term, setTerm] = useState("")
    const Icon = useMemo(()=> term.length >= 1 ?
        <MdClear
            onClick={()=>setTerm("")}
            className={"absolute w-[20px] h-[20px] text-white top-0 bottom-0 m-auto z-[5]"}
        /> :
        <BiSearch
            className={"absolute w-[20px] h-[20px] text-white top-0 bottom-0 m-auto z-[5]"}
        />, [term]);
    const change = (e:React.ChangeEvent<HTMLInputElement>) => setTerm(e.target.value);

    return (
        <span
            className={"w-full h-[40px]"}
        >
            {Icon}
            <TextInput
                className={"h-[40px] pl-[22px]"}
                value={term}
                placeholder={"Search"}
                onChange={change}
            />
        </span>
    )
}

