import React from "react";
import {IconType} from "react-icons";
import {CgSpinner} from "react-icons/cg";
import {ButtonTypes} from "../../../../my-types";

interface props extends React.HtmlHTMLAttributes<HTMLButtonElement>{
    text: string;
    Icon?: IconType;
    loading?: boolean;
    kind?: ButtonTypes;
}

const Button = ({text, Icon, loading, kind='primary', ...rest}:props) => {

    return (
        <button
            {...rest}
            className={`w-max h-[3em] flex gap-2 leading-loose pl-5 pr-5 rounded-full ${kind} ${rest.className??""}`}
        >
            {loading ?
                <CgSpinner />
                :
                <span className={'m-auto'}>{text}</span>
            }
            {Icon &&
                <Icon className={'mt-auto mb-auto'} />
            }

        </button>
    )
}


export default Button;