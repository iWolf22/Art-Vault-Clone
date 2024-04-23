"use client";

import { useState, useEffect } from "react";

export default function PublicGallery() {

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

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            var response = await fetch("/api/get-all-users", {
                method: "GET"
            });
            var data = await response.json();
            setAdminData(data.adminData);

            response = await fetch("/api/get-all-pictures", {
                method: "GET"
            });
            data = await response.json();
            data = data.adminData;
            var newList = [];
            for (let i = 0; i < data.length; i++) {
                if (data[i].public === "true" || data[i].public === "false") {
                    newList.push(data[i]);
                }
            }
            setPictureData(newList);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="mt-16">
            <p className="text-xl text-center mb-4">Public Gallery</p>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {pictureData.map((picture, index) => {
                    var j = 0;
                    for (let i = 0; i < adminData.length; i++) {
                        if (adminData[i].id === picture.authorId) {
                            j = i;
                            break;
                        }
                    } 

                    return (
                        <div key={index} className="bg-[#dddddd] p-4 rounded-lg col-span-1">
                            <p className="text-lg text-center font-bold">{picture.title}</p>
                            <p className="text-xs text-center italic">{JSON.stringify(picture.createdAt)}</p>
                            <p>{picture.description}</p>
                            <img src={picture.imageURL}></img>
                            <p>Uploaded by: {adminData[j].email}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}