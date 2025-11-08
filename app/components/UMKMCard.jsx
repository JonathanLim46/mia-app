import Image from "next/image";

import { Star, MapPin, Clock4 } from "lucide-react";

function UMKMCard({ category, title, description, rating, city, time }) {
    return (
        <div className="rounded-xl w-60 bg-white pb-4">
            <div className="relative overflow-hidden rounded-xl">
                <Image
                    width={200}
                    height={300}
                    src={"/images/image_1.png"}
                    alt="Image 1"
                    className="object-cover w-60 h-60"
                />
                <div className="absolute inset-0 flex flex-col justify-between py-4 text-white">
                    <h2 className="gradient-background w-fit px-4">{category}</h2>
                    <div className="gradient-pill-rating flex flex-row items-center gap-2 w-fit px-4 ms-2 rounded-xl font-bold">
                        <Star size={16} />
                        <span>{rating}</span>
                    </div>
                </div>
            </div>
            <div className="px-4 py-2">
                <h1 className="font-bold">{title}</h1>
                <p className="text-xs">Mie ayam legendaris dengan kuah kaldu ayam kampung yang gurih...</p>
                <div className="flex flex-row items-center gap-2 mt-4">
                    <MapPin color="red" size={16} />
                    <span className="text-sm">Kota {city}</span>
                </div>
                <div className="flex flex-row items-center gap-2 mt-4">
                    <Clock4 color="green" size={16} />
                    <span className="text-sm">{time.buka} - {time.tutup}</span>
                </div>
            </div>
        </div>
    )
}

export default UMKMCard;