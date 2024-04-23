import { put } from "@vercel/blob";
import { NextRequest, NextResponse } from "next/server";
import { customAlphabet } from "nanoid";
import { PrismaClient } from "@prisma/client";
import { cookies } from 'next/headers'

const nanoid = customAlphabet(
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijkimnopqrstuvwxyz", 7
)

export async function POST(request: NextRequest) {

    const searchParams = request.nextUrl.searchParams;
    const title = searchParams.get("title");
    const description = searchParams.get("description");
    const file = request.body || '';
    const contentType = request.headers.get("content-type") || "text/plain";
    const filename = `${title}-${nanoid()}.${contentType.split('/')[1]}`;
    var returnMsg = "unsupported action";

    const cookieStore = cookies();
    const email = cookieStore.get('ArtVaultCookie');

    if (email === undefined) {
        returnMsg = "must be logged in";
    } else {
        try {

            returnMsg = "successful image upload";

            const blob = await put(filename, file, {
                contentType,
                access: "public",
            });

            const prisma = new PrismaClient();

            await prisma.user.update({
                where: { email: email?.value },
                data: {
                    pictures: {
                        create: [
                        {
                            title: title?.replaceAll("_", " ") as string,
                            description: description?.replaceAll("_", " ") as string,
                            imageURL: blob.url,
                            downloadURL: blob.downloadUrl,
                            public: "false",
                        }
                    ]}
                },
            });

            await prisma.$disconnect();

        } catch (e) {
            returnMsg = "server side error";
            console.log(e);
        }
    }

    return NextResponse.json({returnMsg: returnMsg});
}