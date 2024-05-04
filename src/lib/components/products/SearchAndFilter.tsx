'use client'
import TextInput from "@/lib/uiComponents/inputs/TextInput";
import {BiSearch} from "react-icons/bi";
import Button from "@/lib/uiComponents/buttons/Button";
import IconBtn from "@/lib/uiComponents/buttons/IconBtn";
import {MdClear} from "react-icons/md";
import useSearchAndFilter from "@/lib/hooks/useSearchAndFilter";
import React from "react";



const SearchAndFilter = (props?: any) => {
    const { term, setTerm, prices, setPrices, applySearch } = useSearchAndFilter({})
    const changePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPrices(prev => ({ ...prev, [e.target.name]: Number(e.target.value) }))
    }

    return (
        <section
            className={'w-[250px] h-full hidden md:grid gap-4 auto-rows-max p-2 bg-white sticky top-[70px] rounded-xl shadow-xl'}>
            <span className={'text-[1.5rem] font-bold'}>Filter</span>
            <div className={'grid gap-2 border border-solid border-secondary-100 p-2 rounded-xl'}>
                <TextInput
                    placeholder={"Search"}
                    Icon={BiSearch}
                    value={term}
                    onChange={e=>setTerm(e.target.value)}
                />
                <Button
                    text={"Search"}
                    onClick={applySearch}
                    className={'!w-full !h-[30px]'}
                />
            </div>
            <div className={"grid gap-2 border border-solid border-secondary-100 p-2 rounded-xl"}>
                <p>Price</p>
                <TextInput
                    name={'max'}
                    type={'number'}
                    placeholder={'Max price'}
                    value={Number(prices.max) < 1 ? "":Number(prices.max)}
                    onChange={changePrice}
                />
                <TextInput
                    name={'min'}
                    type={'number'}
                    placeholder={'Min price'}
                    value={Number(prices.min) < 1 ? "":Number(prices.min)}
                    onChange={changePrice}
                />
                <span className={'flex gap-2'}>
                    <Button text={"Save"} className={'!w-full !h-[30px]'}/>
                    <IconBtn Icon={MdClear} kind={'secondary'} className={'outlined'} />
                </span>
            </div>
        </section>
    )
}


export default SearchAndFilter;