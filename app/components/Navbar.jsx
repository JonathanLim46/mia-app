import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto flex justify-between items-center text-white px-6 md:px-12 h-16">
        <div className="font-semibold text-lg">Logo</div>

        <div className="flex gap-8 text-sm md:text-base">
          <Link href="/">Home</Link>
          <Link href="/jelajah">Jelajah</Link>
          <Link href="/berita">Berita</Link>
        </div>
      </div>
    </nav>
  );
}
