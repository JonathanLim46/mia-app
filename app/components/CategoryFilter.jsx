'use client'

import { useState } from "react";

function CategoryFilter() {

    const categories = ["Semua Kategori", "Makanan", "Minuman", "Jasa"];

    const [isActive, setIsActive] = useState("Semua Kategori");
    return (
        <div className="flex flex-row gap-4">
            {categories.map((item) => (
                <button
                    key={item}
                    onClick={() => setIsActive(item)}
                    className={`${isActive === item ? 'gradient-background' : 'bg-black'} flex items-center justify-center gap-2 mt-8 border border-amber-300 px-6 py-3 rounded-xl text-sm text-white font-bold cursor-pointer`}>
                    {item}
                </button>
            ))}
        </div>
    )
}

export default CategoryFilter;
