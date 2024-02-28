'use client'
import Link from "next/link";
import {NavPath} from "../../../my-types";
import {usePathname} from "next/navigation";

interface props {
    path: NavPath
}

export default function NavButton({path}:props){
    const pathname = usePathname()
    return (
        <Link href={path.path} className={`h-[40px] leading-[40px] pl-2 pr-2 flex gap-2 
        ${pathname.endsWith(path.path)?"text-primary-950":"bg-transparent"} ` +
            "hover:bg-secondary-700"}
        >
            <span>{path.text}</span>
            {path.icon && <path.icon className={'m-auto'} />}
        </Link>
    )
}

