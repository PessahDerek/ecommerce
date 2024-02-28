import React from "react";

interface props extends React.InputHTMLAttributes<HTMLInputElement>{
    label?:string;
}

export default function TextInput({label, ...rest}:props){

    return (
        <span
            className={` `}
        >
            <input
                {...rest}
                className={`w-full bg-transparent border border-solid border-b-white focus:border-b-accent text-white ${rest.className}`}
            />
        </span>
    )
}

