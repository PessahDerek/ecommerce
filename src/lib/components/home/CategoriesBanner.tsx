import {ProductCategoryType} from "../../../../my-types";
import ShowCategory from "@/lib/components/home/ShowCategory";
import unisex from "@/lib/assets/images/unisex.jpeg";
import kids from "@/lib/assets/images/kids.jpeg"
import sports from "@/lib/assets/images/sports.jpeg"
import discounted from "@/lib/assets/images/discounted.jpeg"
import mens from "@/lib/assets/images/mens.jpeg"
import ladies from "@/lib/assets/images/womens.jpeg"
import casual from "@/lib/assets/images/casual.jpeg"
import {StaticImageData} from "next/image";


const CategoriesBanner = () => {
    const categories: Array<{ category: ProductCategoryType, image: string | StaticImageData }> = [
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

