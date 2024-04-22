import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Container from "@/components/Container";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "ArtVault Clone",
    description: "ArtVault Clone by Joshua Dierickse",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Container>
                    <div className="flex flex-col h-screen justify-between">
                        <div>
                            <Navbar />
                            {children}
                        </div>
                        <p className="text-center p-4">Copyright Art Vault 2024 ©</p>
                    </div>
                </Container>
            </body>
        </html>
    );
}
