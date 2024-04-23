import { PrismaClient } from "@prisma/client";

export const dynamic = "force-dynamic";

export async function GET() {
    const prisma = new PrismaClient();
    var status = 501;
    var fetchData: Array<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        stringHash: string;
        passwordHash: string;
    }> = [];

    try {
        status = 200;
        fetchData = await prisma.user.findMany();
    } catch (e) {
        status = 500;
        console.log(e);
    }

    await prisma.$disconnect();

    return new Response(
        JSON.stringify({
            "adminData": fetchData,
        }),
        {
            headers: {
                "Content-Type": "application/json",
            },
            status: status,
        }
    );
}
