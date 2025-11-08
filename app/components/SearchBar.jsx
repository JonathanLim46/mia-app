"use client"
import { Search } from "lucide-react";

function SearchBar({ onSearch }) {
    return (
        <div className="w-1/2 flex flex-row gap-4 mt-8 px-8 py-4 bg-white rounded-xl">
            <Search />
            <input
                type="text"
                placeholder="Search for your favorite UMKM..."
                onChange={(e) => onSearch(e.target.value)}
                className="w-full bg-transparent text-gray-700 placeholder-gray-400 outline-none"
            />
        </div>
    )
}

export default SearchBar;