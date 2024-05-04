import BannerCarousel from "@/lib/components/home/BannerCarousel";
import CategoriesBanner from "@/lib/components/home/CategoriesBanner";
import HomeListProducts from "@/lib/components/home/HomeListProducts";
import {dummyData} from "@/lib/utils/dummyData";
import Image from "next/image";
import delivery from '@/lib/assets/images/delivery.jpeg'


export default function Home() {
    return (
        <main className="w-full h-full space-y-5 -top-[70px]">
            <BannerCarousel/>
            <CategoriesBanner/>
            <HomeListProducts
                title={"Trending"}
                items={dummyData}
                pathToMore={"/products/trending"}
            />
            <HomeListProducts
                title={"New arrivals"}
                items={[...dummyData.map(f =>f)].reverse()}
                pathToMore={"/products/new"}
            />
            <div className={"w-full h-[100vh] we-deliver-parent"}>
                <Image
                    src={delivery}
                    alt={"delivery"}
                    priority={true}
                    fill={true}
                    sizes={"(min-width: 100%),100%, 200%"}
                    className={`absolute brightness-50 top-0 w-full h-full object-cover object-bottom `}
                />
                <div className={"w-full h-full m-auto we-deliver flex"}>
                    <span className={'m-auto text-center z-[5]'}>
                        <h1 className={'text-[6vmax] font-black text-secondary-50'}>We deliver to Mars</h1>
                        <span className={'text-[4vmax] text-white font-bold'}>
                            You&apos;ll get the shoes no matter where you are, that&apos;s a promise
                        </span>
                    </span>
                </div>
            </div>
        </main>
    );
}
