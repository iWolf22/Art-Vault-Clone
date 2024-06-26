"use client";

import { ChangeEvent, useEffect, useState } from "react";

export default function PrivateGallery() {
    const [file, setFile] = useState<File | null>(null);
    const [previewURL, setPreviewURL] = useState(
        "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
    );
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("waiting for image upload");

    function onChangePicture(e: ChangeEvent<HTMLInputElement>) {
        setFile(e.currentTarget.files && e.currentTarget.files[0]);
    }

    useEffect(() => {
        if (file) {
            setPreviewURL(URL.createObjectURL(file as Blob));
        }
    }, [file]);

    async function onSubmit() {
        if (file) {
            const result = await fetch("/api/image-upload?title=" + title.replaceAll(" ", "_") + "&description=" + description.replaceAll(" ", "_"), {
                method: "POST",
                headers: {
                    "content-type": file?.type || "application/octet-stream",
                },
                body: file,
            });
            const data = await result.json();
            setStatus(data.returnMsg);
        }
    }

    return (
        <div>
            <p className="text-xl text-center mt-16">Image Upload</p>
            <p className="text-center">status: {status}</p>
            <p className="mt-4">Artwork Title</p>
            <input
                placeholder="Given an artwork title"
                className="bg-[#dddddd] p-1.5 rounded-lg w-96"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            ></input>
            <p className="mt-4">Artwork Description</p>
            <input
                placeholder="Give an artwork description"
                className="bg-[#dddddd] p-1.5 rounded-lg w-96 mb-4"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            ></input>
            <img src={previewURL} alt="anti warn"></img>
            <button
                className="mt-6 p-1.5 rounded-lg bg-[#dddddd] hover:text-[#ce2e54] duration-200 mr-4"
                onClick={onSubmit}
            >
                Submit Picture
            </button>
            <input
                type="file"
                accept="image/*"
                onChange={(e) => onChangePicture(e)}
            ></input>
        </div>
    );
}
