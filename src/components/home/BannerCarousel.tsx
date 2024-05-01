'use client'
import Image from "next/image";
import img1 from "@/assets/images/landing1.jpeg";

export default function BannerCarousel() {

    return (
        <div className={"w-full h-[80vh] flex relative "}>
            <div className={'w-full h-full z-0 absolute white-hover'}>
                <Image
                    src={img1} alt={"landing"}
                    fill={true}
                    sizes={"(min-width: 100%),100%, 100%"}
                    className={'w-full !h-[80vh] absolute object-cover object-bottom'}
                />
            </div>
            <div className={'mt-auto ml-auto mr-auto mb-20 text-secondary-600'}>
                <span className={'grid justify-items-center'}>
                    <h1 className={'font-black text-[6vmax]'}>Kick Rocks</h1>
                    <p>Walk in style</p>
                </span>
            </div>
        </div>
    )
}

