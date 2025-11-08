import Hero from "./components/Hero";
import UMKMDiscovery from "./components/UMKMDiscovery";
import UMKMNewsSection from "./components/UMKMNewsSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <UMKMDiscovery />
      <UMKMNewsSection />
      <section className="mt-8 h-80 flex flex-col gap-8 justify-center items-center">
        <h4 className="font-bold text-5xl text-white text-center">Dukung UMKM, Belanja UMKM, Cintai UMKM.</h4>
        <p className="text-white text-3xl">Setiap pembelianmu membawa dampak nyata</p>
      </section>
    </div>
  );
}
