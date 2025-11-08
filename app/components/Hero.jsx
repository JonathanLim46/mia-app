import Image from "next/image";

import { ChevronDown } from "lucide-react";

function Hero() {
    const images = [
        "/images/image_1.png",
        "/images/image_2.png",
        "/images/image_3.png",
        "/images/image_4.png",
        "/images/image_5.png",
        "/images/image_6.png",
        "/images/image_7.png",
        "/images/image_8.png",
    ]
    return (
        <div className="relative min-h-[680px] md:min-h-dvh flex">
            <div className="absolute z-0 grid grid-cols-2 md:grid-cols-4 gap-8 w-full justify-items-center opacity-20 mt-16 px-8">
                {
                    images.map((item, index) => (
                        <Image
                            key={index}
                            src={item}
                            alt={`Image ${index}`}
                            width={400}
                            height={300}
                            className="object-cover w-[320px] h-30 md:h-80 rounded-xl"
                        />
                    ))
                }
            </div>
            <main className="relative z-10 max-w-6xl mx-auto md:mt-8 flex flex-col justify-center text-center text-white">
                <header className="flex flex-col items-center justify-center">
                    <h2 className="font-bold text-5xl md:text-9xl gradient-text">Jelahan Dunia UMKM</h2>
                    <h3 className="text-2xl md:text-5xl mt-8">Menemukan Semangat di Setiap UMKM Nusantara</h3>

                    <button className="flex items-center justify-center gap-2 mt-8 border border-amber-300 px-6 py-3 rounded-xl text-xl md:text-3xl gradient-background-button cursor-pointer">
                        <span>Jelajahi Sekarang</span>
                        <ChevronDown className="w-8 h-8" />
                    </button>
                </header>
            </main>
        </div>
    )
}

export default Hero;