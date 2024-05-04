import React from "react";
import {IconType} from "react-icons";
import {ButtonTypes} from "../../../../my-types";


interface props extends React.HtmlHTMLAttributes<HTMLButtonElement> {
    Icon: IconType;
    kind?: ButtonTypes;
}

const IconBtn = ({ Icon, kind='primary', ...rest }: props) => {

    return <button className={`w-max h-max p-[0.5rem] flex rounded-xl ${kind} ${rest.className??""}`}>
        <Icon className={'m-auto'} />
    </button>
}

export default IconBtn;