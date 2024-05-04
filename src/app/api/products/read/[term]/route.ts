import {NextRequest, NextResponse} from "next/server";
import {dummyData} from "@/lib/utils/dummyData";


export const GET = (req: NextRequest) => {
    const term = req.nextUrl.searchParams.get('term');
    console.log("xx: ",req.nextUrl.searchParams);
    return NextResponse.json(term ? dummyData.filter(f =>
        `${Object.values(f).join('')}`.toLowerCase().includes(term.toLowerCase())
    ):dummyData, {status: 200})
}

