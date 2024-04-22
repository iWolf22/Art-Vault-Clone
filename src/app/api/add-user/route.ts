import { PrismaClient } from "@prisma/client";
import hashing from "@/scripts/hashing";

export async function POST(request: Request) {

    const data = await request.json();
    console.log(data);

    const randomHash = (Math.random().toString(36)+'00000000000000000').slice(2, 12);

    const passwordHash = hashing(data.password, randomHash, 10);

    const prisma = new PrismaClient();


    try {
        await prisma.user.create({
            data: {
                email: data.username,
                passwordHash: passwordHash,
                stringHash: randomHash,
            },
        });
    } catch (e) {
        console.log(e);
    }

	await prisma.$disconnect();


    return new Response(JSON.stringify(data), {
        headers: {
            "Content-Type": "application/json",
        },
        status: 201,
    });
}