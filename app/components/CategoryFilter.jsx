'use client'

import { useState } from "react";

function CategoryFilter({ onChange }) {

    const categories = ["Semua Kategori", "Makanan", "Minuman", "Jasa"];

    const [isActive, setIsActive] = useState("Semua Kategori");

    const handleClick = (item) => {
        setIsActive(item)
        if (onChange) {
            onChange(item);
        }
    }

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((item) => (
                <button
                    key={item}
                    onClick={() => handleClick(item)}
                    className={`${isActive === item ? 'gradient-background-button' : 'bg-black hover:bg-black/20'} flex items-center justify-center gap-2 mt-8 border border-amber-300 px-6 py-3 rounded-xl text-sm text-white font-bold cursor-pointer`}>
                    {item}
                </button>
            ))}
        </div>
    )
}

export default CategoryFilter;
