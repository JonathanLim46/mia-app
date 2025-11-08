import UMKMCard from "./UMKMCard";

import data from "../constants/data.json";

function UMKMGrid() {
    return (
        <div className="flex flex-col justify-center mt-8">
            <h3 className="font-semibold text-xl text-center text-white">13 UMKM Ditemukan</h3>
            <div className="grid grid-cols-3 gap-8 mt-8">
                {data.map((item, index) => (
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
    )
}

export default UMKMGrid;