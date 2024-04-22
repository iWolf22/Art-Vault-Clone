import { put } from "@vercel/blob";
import { NextResponse } from "next/server";
import { customAlphabet } from "nanoid";

const nanoid = customAlphabet(
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijkimnopqrstuvwxyz", 10
)

export async function POST(request: Request) {
    const file = request.body || '';
    const contentType = request.headers.get("content-type") || "text/plain";
    const filename = `${nanoid()}.${contentType.split('/')[1]}`;
    console.log(filename);
    const blob = await put(filename, file, {
        contentType,
        access: "public",
    });
    console.log(blob);
    return NextResponse.json(blob);
}