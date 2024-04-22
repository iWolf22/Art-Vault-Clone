"use client";

import { useState } from "react";

export default function SignIn() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function formSubmit() {
        fetch("/api/add-user", {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        });
    }

    return (
        <div className="flex justify-center">
            <div className="mt-10">
                <p className="text-xl text-center">Sign In/Sign Up Page</p>
                <p className="mt-4">Email</p>
                <input
                    placeholder="artvault@email.com"
                    className="bg-[#dddddd] p-1.5 rounded-lg w-[200]"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                ></input>
                <p className="mt-4">Password</p>
                <input
                    placeholder="SuperSecretPassword!"
                    className="bg-[#dddddd] p-1.5 rounded-lg"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                ></input>
                <br />
                <div className="flex justify-center">
                    <button
                        className="mt-6 p-1.5 rounded-lg bg-[#dddddd] hover:text-[#ce2e54] duration-200"
                        onClick={formSubmit}
                    >
                        Sign In/Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
}
