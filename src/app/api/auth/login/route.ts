import {NextApiRequest} from "next";
import {NextResponse} from "next/server";


export const GET = (req: NextApiRequest) => {
    return NextResponse.json({
        'status': 'success',
    })
}

