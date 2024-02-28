'use client'

import SearchInput from "@/uiComponents/inputs/SearchInput";

export default function LeftFilterPanel(){

    return (
        <section className={"w-[250px] h-[calc(100vh-50px)] p-2 grid bg-secondary-700"}>
            <SearchInput />
        </section>
    )
}


