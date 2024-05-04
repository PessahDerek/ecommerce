import React from "react";
import {IconType} from "react-icons";


interface props extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    Icon?: IconType;
}

export default function TextInput({label, Icon, ...rest}: props) {
    const [focus, setFocus] = React.useState(false);

    return (
        <div
            className={`flex border border-solid ${focus ? "border-b-accent" : "border-b-secondary"} `}
        >
            {Icon && <Icon
                className={`w-[20px] mt-auto mb-auto ${focus ? 'text-accent': "text-secondary"} `}
            />}
            <input
                {...rest}
                onFocus={()=> setFocus(true)}
                onBlur={()=> setFocus(false)}
                className={`w-full h-[50px] pl-2 bg-transparent outline-transparent ${rest.className ?? ""}`}
            />
        </div>
    )
}

