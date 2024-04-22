"use client";

export default function SignIn() {
    return (
        <div className="flex justify-center">
            <div className="mt-10">
                <p className="text-xl text-center">Sign In/Sign Up Page</p>
                <p className="mt-4">Email</p>
                <input placeholder="artvault@email.com" className="bg-[#dddddd] p-1.5 rounded-lg w-[200]"></input>
                <p className="mt-4">Password</p>
                <input placeholder="SuperSecretPassword!" className="bg-[#dddddd] p-1.5 rounded-lg"></input>
            </div>
        </div>
    );
}
