import {ShoeCategory} from "../../../my-types";
import ShowCategory from "@/components/home/ShowCategory";
import unisex from "@/assets/images/unisex.jpeg";
import kids from "@/assets/images/kids.jpeg"
import sports from "@/assets/images/sports.jpeg"
import discounted from "@/assets/images/discounted.jpeg"
import mens from "@/assets/images/mens.jpeg"
import ladies from "@/assets/images/womens.jpeg"
import casual from "@/assets/images/casual.jpeg"
import {StaticImageData} from "next/image";


const CategoriesBanner = () => {
    const categories: Array<{ category: ShoeCategory, image: string | StaticImageData }> = [
        {category: "Unisex", image: unisex},
        {category: "Men", image: mens},
        {category: "Ladies", image: ladies},
        {category: "Kids", image: kids},
        {category: "Sports", image: sports},
        // {category: "Casual", image: casual},
        // {category: "Discounted", image: discounted},
    ]

    return (
        <div className={"w-[90%] m-auto grid gap-2 md:grid-cols-2 auto-rows-auto"}>
            <div className={"flex-1 h-full"}>
                <ShowCategory
                    image={categories[0].image}
                    category={categories[0].category}
                />
            </div>
            <div className={"w-full grid gap-2 grid-cols-2"}>
                {categories.slice(1).map((cat, i) =>
                    <ShowCategory
                        key={i}
                        category={cat.category}
                        image={cat.image}
                        className={'h-[15vmax]'}
                    />
                )}
            </div>
        </div>
    )
}

export default CategoriesBanner;

