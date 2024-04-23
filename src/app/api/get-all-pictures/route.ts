import { PrismaClient } from "@prisma/client";

export async function GET() {
    const prisma = new PrismaClient();
    var status = 501;
    var fetchData: Array<{
        id: number;
        authorId: number;
        public: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string;
        imageURL: string;
        downloadURL: string;
    }> = [];

    try {
        status = 200;
        fetchData = await prisma.picture.findMany();
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