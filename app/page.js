import Hero from "./components/Hero";
import ImageCarousel from "./components/ImageCarousel";
import UMKMDiscovery from "./components/UMKMDiscovery";
import NewsCard from "./components/NewsCard";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <UMKMDiscovery />
      <section className="mt-20 flex flex-col justify-center items-center">
        <h3 className="font-bold text-6xl gradient-text text-center">Berita UMKM</h3>
        <div className="flex flex-row gap-16 mt-12">
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
      </section>
      <section className="mt-16 h-64 flex flex-col gap-8 justify-center items-center">
        <h4 className="font-bold text-5xl text-white text-center">Dukung UMKM, Belanja UMKM, Cintai UMKM.</h4>
        <p className="text-white text-3xl">Setiap pembelianmu membawa dampak nyata</p>
      </section>
      <ImageCarousel />
    </div>
  );
}
