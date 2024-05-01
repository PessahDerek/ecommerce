'use client'
import Link from "next/link";
import {NavPath} from "../../../my-types";
import {BiCart, BiHome} from "react-icons/bi";
import NavButton from "@/uiComponents/buttons/NavButton";
import {PiSneaker} from "react-icons/pi";


export default function NavigationBar(){
    const paths: NavPath[] = [
        {text: "Home", path: "/", icon: BiHome},
        {text: "Cart", path: "/cart", icon: BiCart},
    ]
    return <nav
        className={"w-full h-navBar z-50 sticky top-0 flex justify-between bg-transparent text-secondary-700 leading-[50px] pl-2 pr-2 "}>
        <Link href={'/'} className={'reenie-h1 h-max'}>
            KickRocks
        </Link>
        <span className={'h-max flex gap-2 mt-auto mb-auto'}>
            {
                paths.map((path, i)=>
                    <NavButton key={i} path={path} />)
            }
        </span>
    </nav>
}

