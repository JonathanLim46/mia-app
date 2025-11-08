import NewsCard from "./NewsCard";

function UMKMNewsSection() {
    return (
        <section className="mt-20 flex flex-col justify-center items-center">
            <h3 className="font-bold text-6xl gradient-text text-center">Berita UMKM</h3>
            <div className="flex flex-row gap-16 mt-12">
                <NewsCard />
                <NewsCard />
                <NewsCard />
            </div>
        </section>
    )
}

export default UMKMNewsSection;