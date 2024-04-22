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
    const userTableHeader = ["id", "email", "passwordHash", "stringHash", "createdAt", "updatedAt"] as const;

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
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

    return (
        <div className="mt-16">
            <p className="text-xl text-center">Admin Data</p>  
            <p className="text-xl mt-6">User Data</p>
            <table className="w-full border-black border border-solid border-r">
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
            </table>
        </div>
    );
}
