import LeftFilterPanel from "@/components/LeftFilterPanel";
import BannerCarousel from "@/components/BannerCarousel";

export default function Home() {
    return (
        <main className="w-screen h-full grid grid-flow-col auto-cols-max">
            <LeftFilterPanel />
            <section className={"w-full md:min-w-[calc(100vw-250px)]"}>
                <BannerCarousel />
            </section>
        </main>
    );
}
