"use client"

import { useState } from "react";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import UMKMCard from "./UMKMCard";

import data from "../constants/data.json";

function UMKMDiscovery() {

    const [onSearch, setOnSearch] = useState("");
    const [category, setCategory] = useState("Semua Kategori");

    const dataUMKM = data.filter((item) => {
        const dataBySearch = item.nama.toLowerCase().includes(onSearch)
        const dataByCategory = category === "Semua Kategori" || item.kategori === category;
        return dataByCategory && dataBySearch;
    })

    return (
        <section className="mt-32 flex flex-col justify-center items-center">
            <h3 className="font-bold text-4xl md:text-6xl gradient-text text-center">Temukan UMKM</h3>
            <SearchBar
                onSearch={(e) => setOnSearch(e)}
            />
            <CategoryFilter
                onChange={(e) => setCategory(e)}
            />
            <div className="flex flex-col justify-center mt-8">
                <h3 className="font-semibold text-xl text-center text-white">{dataUMKM.length} UMKM Ditemukan</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mt-8">
                    {dataUMKM.map((item, index) => (
                        <UMKMCard
                            key={index}
                            category={item.kategori}
                            title={item.nama}
                            description={item.deskripsi}
                            rating={item.rating}
                            city={item.lokasi.kota}
                            time={item.jam_operasional}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default UMKMDiscovery;