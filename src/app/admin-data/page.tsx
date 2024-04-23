"use client";

import { useEffect, useState } from "react";

export default function AdminData() {
    const [adminData, setAdminData] = useState<Array<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        stringHash: string;
        passwordHash: string;
    }>>([]);
    const [pictureData, setPictureData] = useState<Array<{
        id: number;
        authorId: number;
        public: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string;
        imageURL: string;
        downloadURL: string;
    }>>([]);
    const userTableHeader = ["id", "email", "passwordHash", "stringHash", "createdAt", "updatedAt"] as const;
    const pictureTableHeader = ["id", "authorId", "title", "description", "public", "imageURL", "downloadURL", "createdAt", "updatedAt"] as const;

    useEffect(() => {
        fetchUsers();
        fetchPictures();
    }, []);

    async function fetchUsers() {
        try {
            const response = await fetch("/api/get-all-users", {
                method: "GET"
            });
            const data = await response.json();
            setAdminData(data.adminData);
        } catch (e) {
            console.log(e);
        }
    }

    async function fetchPictures() {
        try {
            const response = await fetch("/api/get-all-pictures", {
                method: "GET"
            });
            const data = await response.json();
            setPictureData(data.adminData);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="mt-16">
            <p className="text-xl text-center">Admin Data</p>
            <div className="flex justify-between mb-2 items-end">
                <p className="text-xl mt-6">User Data</p>
                <button
                    className="mt-6 p-1.5 rounded-lg bg-[#dddddd] hover:text-[#ce2e54] duration-200"
                    onClick={fetchUsers}
                >
                    Refresh Data
                </button>
            </div>
            <table className="w-full border-black border border-solid border-r">
                <tbody>
                    <tr className="bg-[#dddddd]">
                        {userTableHeader.map((header, i) => {
                            return (
                                <th className="border-black border border-solid" key={i}>{header}</th>
                            )
                        })}
                    </tr>
                    {adminData.map((index, i) => {
                        return (
                            <tr key={i}>
                                {userTableHeader.map((header, j) => {
                                    return (
                                        <td className="border-black border border-solid p-1 m-1" key={j}>{JSON.stringify(index[header])}</td>
                                    )
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className="flex justify-between mb-2 items-end">
                <p className="text-xl mt-6">Picture Data</p>
                <button
                    className="mt-6 p-1.5 rounded-lg bg-[#dddddd] hover:text-[#ce2e54] duration-200"
                    onClick={fetchPictures}
                >
                    Refresh Data
                </button>
            </div>
            <table className="w-full border-black border border-solid border-r">
                <tbody>
                    <tr className="bg-[#dddddd]">
                        {pictureTableHeader.map((header, i) => {
                            return (
                                <th className="border-black border border-solid" key={i}>{header}</th>
                            )
                        })}
                    </tr>
                    {pictureData.map((index, i) => {
                        return (
                            <tr key={i}>
                                {pictureTableHeader.map((header, j) => {
                                    return (
                                        <td className="border-black border border-solid p-1 m-1" key={j}>{JSON.stringify(index[header])}</td>
                                    )
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
