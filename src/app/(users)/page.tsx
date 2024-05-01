import BannerCarousel from "@/components/home/BannerCarousel";
import CategoriesBanner from "@/components/home/CategoriesBanner";
import HomeListProducts from "@/components/home/HomeListProducts";
import {dummyData} from "@/utils/dummyData";
import Image from "next/image";
import delivery from '@/assets/images/delivery.jpeg'


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
                            You&apos;ll get the shoe no matter where you are
                        </span>
                    </span>
                </div>
            </div>
        </main>
    );
}
