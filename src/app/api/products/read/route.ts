import {NextApiRequest} from "next";
import {NextResponse} from "next/server";
import {dummyData} from "@/lib/utils/dummyData";


export const GET = (req: NextApiRequest) => {

    return NextResponse.json(dummyData, {status: 200})
}

