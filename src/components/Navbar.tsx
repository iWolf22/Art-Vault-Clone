import Link from "next/link";

export default function Navbar() {

    return (
        <div className="flex justify-between bg-[#dddddd] w-full p-4 my-4 rounded-lg">
            <div className="flex justify-left gap-4">
                <img src="https://art-vault.vercel.app/images/ArtVault.svg" className="w-6"></img>
                <Link href="/" className="hover:text-[#ce2e54] duration-200">Home</Link>
                <Link href="/public-gallery" className="hover:text-[#ce2e54] duration-200">Public Gallery</Link>
                <Link href="/private-gallery" className="hover:text-[#ce2e54] duration-200">Private Gallery</Link>
                <Link href="/admin-data" className="hover:text-[#ce2e54] duration-200">Admin Data</Link>
            </div>
            <div className="flex justify-left gap-4">
                <Link href="/sign-in-or-up" className="hover:text-[#ce2e54] duration-200">Sign In/Sign Up</Link>
            </div>
        </div>
    )
}