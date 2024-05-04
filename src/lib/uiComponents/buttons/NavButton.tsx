'use client'
import Link from "next/link";
import {NavPath} from "../../../../my-types";
import {usePathname} from "next/navigation";

interface props {
    path: NavPath
}

export default function NavButton({path}:props){
    const pathname = usePathname()

    return (
        <Link href={path.path} className={`h-[40px] leading-[40px] bg-primary rounded-full pl-4 pr-4 flex justify-center 
        ${pathname.endsWith(path.path)?"bg-secondary text-primary":" "} ` +
            "hover:bg-secondary-700"}
        >
            <span>{path.text}</span>
            {path.icon && <path.icon className={'mt-auto mb-auto'} />}
        </Link>
    )
}

