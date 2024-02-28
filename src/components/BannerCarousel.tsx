'use client'
import {Banner} from "../../my-types";
import banner1 from '../assets/images/banner1.jpg'
import banner2 from '../assets/images/banner2.jpg'
import banner3 from '../assets/images/banner3.jpg'
import Image from "next/image";
import {useEffect, useState} from "react";
import {clearInterval} from "node:timers";

export default function BannerCarousel() {
    const banners: Banner[] = [
        {
            image: banner1.src, product_id: (Math.random() * 10).toString()
        },
        {
            image: banner2.src, product_id: (Math.random() * 10).toString()
        },
        {
            image: banner3.src, product_id: (Math.random() * 10).toString()
        },
    ]

    const [counter, setCounter] = useState(0)


    useEffect(() => {
        const addCounter = () => {
            if (counter < (banners.length - 1)) return setCounter(counter + 1);
            setCounter(0)
        }
        const counterTimer = window.setInterval(addCounter, 10000)
        return ()=>window.clearInterval(counterTimer)
    }, [banners.length, counter])

    return (
        <div className={"w-full h-max p-5 "}>
            <div className={"w-full h-[400px] flex"}>
                {banners.map((banner, i) =><div
                        key={banner.product_id} data-aos={'zoom-out'} data-aos-duration={3000}
                        className={`w-full ${counter === i ? "block":"hidden"}`}
                        >
                            <Image
                                className={"w-full max-h-[400px] relative"}
                                width={500}
                                height={300}
                                layout={"responsive"}
                                src={banner.image}
                                alt={"banner"}/>
                        </div>
                )
                }
            </div>
        </div>
    )
}

