import Link from "next/link";

function Navbar() {
    return (
        <nav className="fixed w-full bg-black text-white z-20">
            <div className="container mx-auto flex flex-row justify-between items-center px-12 py-4">
                <div>
                    Logo
                </div>
                <div className="flex flex-row gap-8">
                    <Link href={"/"}>Home</Link>
                    <Link href={"/"}>Jelajah</Link>
                    <Link href={"/"}>Berita</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;