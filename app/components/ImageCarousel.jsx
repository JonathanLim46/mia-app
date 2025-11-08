import Image from "next/image";

function ImageCarousel() {
    const images = [
        "/images/image_1.png",
        "/images/image_2.png",
        "/images/image_3.png",
        "/images/image_4.png",
        "/images/image_5.png",
        "/images/image_6.png",
    ];

    return (
        <div className="w-full h-64 mb-24 overflow-hidden flex items-center">
            <div className="flex animate-scroll gap-6 w-max">
                {[...images, ...images].map((src, index) => (
                    <div
                        key={index}
                        className="rounded-3xl overflow-hidden w-60 h-40 shrink-0"
                    >
                        <Image
                            src={src}
                            alt={`carousel-${index}`}
                            width={300}
                            height={200}
                            className="object-cover w-full h-full"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ImageCarousel;
