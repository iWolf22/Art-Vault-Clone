import { PrismaClient } from "@prisma/client";
import hashing from "@/scripts/hashing";

export async function POST(request: Request) {
    const data = await request.json();

    const prisma = new PrismaClient();
    var returnMsg = "null";
    var status = 501;

    try {
        const userFetch = await prisma.user.findUnique({
            where: { email: data.username },
        });

        if (userFetch !== null) {
            if (
                userFetch.passwordHash ===
                hashing(data.password, userFetch.stringHash, 10)
            ) {
                returnMsg = "successful log in";
                status = 202;
            } else {
                returnMsg = "failed log in";
                status = 200;
            }
        } else {
            returnMsg = "account created successfully";
            status = 201;
            const randomHash = (
                Math.random().toString(36) + "00000000000000000"
            ).slice(2, 12);

            await prisma.user.create({
                data: {
                    email: data.username,
                    passwordHash: hashing(data.password, randomHash, 10),
                    stringHash: randomHash,
                },
            });
        }
    } catch (e) {
        returnMsg = "server side error";
        status = 500;
        console.log(e);
    }

    await prisma.$disconnect();

    return new Response(
        JSON.stringify({
            returnMsg: returnMsg,
        }),
        {
            headers: {
                "Content-Type": "application/json",
                "Set-Cookie": "ArtVaultCookie=" + data.username,
            },
            status: status,
        }
    );
}
