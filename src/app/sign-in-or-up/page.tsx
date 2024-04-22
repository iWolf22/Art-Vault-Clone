"use client";

import { useState } from "react";

export default function SignInOrUp() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState("not logged in");

    async function formSubmit() {
        try {
            const response = await fetch("/api/add-user", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            });
            const data = await response.json();
            setStatus(data.returnMsg);
        } catch(e) {
            console.log(e);
        }
    }

    return (
        <div className="flex justify-center">
            <div className="mt-10">
                <p className="text-xl text-center">Sign In/Sign Up Page</p>
                <p className="text-sm text-center">status: {status}</p>
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
