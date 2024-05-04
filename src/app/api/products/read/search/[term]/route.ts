import {NextApiRequest} from "next";
import {NextRequest, NextResponse} from "next/server";
import {dummyData} from "@/lib/utils/dummyData";
import {ProductObject} from "../../../../../../../my-types";


export const GET = (req: NextRequest) => {
    // get the term string
    const search = req.nextUrl.searchParams.get('term');
    if(!search) return NextResponse.json({
        message: "Sorry, we couldn't find any search",
    })
    const response: Array<ProductObject> = dummyData.filter(data =>
        Object.values(data).join("").includes(search.toLowerCase()))
    return NextResponse.json(response, {status: 200})
}

