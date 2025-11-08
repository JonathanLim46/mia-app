import Image from "next/image";

import { MapPin } from "lucide-react";

function NewsCard() {
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
                <div className="absolute inset-0 py-4 text-white">
                    <h2 className="rounded-xl gradient-background absolute right-2 w-fit px-4">HOT</h2>
                </div>
            </div>
            <div className="px-4 py-2">
                <h1 className="font-bold">Belajar membuat batik bersama batiku</h1>
                <p className="text-xs">Mie ayam legendaris dengan kuah kaldu ayam kampung yang gurih...</p>
                <div className="flex flex-row items-center gap-2 mt-4">
                    <MapPin color="red" size={16} />
                    <span className="text-sm">Kota Bogor</span>
                </div>
                <p className="mt-4">Senin, 20 Agustus 2025</p>
            </div>
        </div>
    )
}


export default NewsCard;