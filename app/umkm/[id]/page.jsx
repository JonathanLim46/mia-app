
import data from "@/app/constants/dataUMKM.json";
import { notFound } from "next/navigation";
import { Star, MapPin, Clock4, Phone } from "lucide-react";

export default async function UMKMDetail({ params }) {
  const { id } = await params;
  const umkm = data.find((x) => x.id === Number(id));
  if (!umkm) return notFound();

  const heroImg = umkm.galeri?.[0] ?? "/images/placeholder-hero.jpg";
  const rupiah = (n) =>
    new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(n);

  return (
    <section className="text-white">
      <div className="relative w-full h-[260px] md:h-[360px] rounded-b-3xl overflow-hidden">
        <img src={umkm.foto_depan} alt={umkm.nama} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#160a26] via-[#160a26]/60 to-transparent" />
        <div className="absolute max-w-6xl mx-auto inset-x-0 bottom-0 px-4 md:px-8 pb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 text-sm font-semibold rounded-full bg-gradient-to-r from-pink-500 to-orange-400">
              {umkm.kategori}
            </span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold drop-shadow-md">{umkm.nama}</h1>
          <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-200">
            <span className="flex items-center gap-2"><MapPin size={16} /> {umkm.alamat}</span>
            <span className="flex items-center gap-2"><Clock4 size={16} /> Jam: {umkm.jam_operasional?.buka}–{umkm.jam_operasional?.tutup}</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <section className="bg-[#241033]/80 border border-white/10 rounded-2xl p-5">
              <h2 className="text-pink-400 text-xl font-extrabold mb-2">Deskripsi</h2>
              <p className="text-gray-200 leading-relaxed">{umkm.deskripsi}</p>
            </section>

            {umkm.kisah_umkm && (
              <section className="bg-[#241033]/80 border border-white/10 rounded-2xl p-5">
                <h2 className="text-pink-400 text-xl font-extrabold mb-2">Kisah UMKM</h2>
                <p className="text-gray-200 leading-relaxed">“{umkm.kisah_umkm}”</p>
              </section>
            )}
          </div>

          <aside className="space-y-6">
            <section className="bg-[#241033]/80 border border-white/10 rounded-2xl p-5">
              <h2 className="text-pink-400 text-xl font-extrabold mb-3">Informasi Kontak</h2>
              <div className="space-y-3 text-gray-200">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="mt-1 text-gray-300" />
                  <div>
                    <div className="text-sm text-gray-400">Alamat</div>
                    <div>{umkm.alamat}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock4 size={18} className="mt-1 text-gray-300" />
                  <div>
                    <div className="text-sm text-gray-400">Jam Buka</div>
                    <div>Senin–Sabtu: {umkm.jam_operasional?.buka} - {umkm.jam_operasional?.tutup}</div>
                  </div>
                </div>
              </div>
            </section>

            {umkm.maps && (
              <section className="bg-[#241033]/80 border border-white/10 rounded-2xl p-3">
                <h2 className="text-pink-400 text-xl font-extrabold mb-3 px-2">Maps</h2>
                <div className="rounded-xl overflow-hidden border border-white/10">
                  <iframe
                    src={umkm.maps}
                    className="w-full h-56 md:h-64 border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </section>
            )}
          </aside>
        </div>

        {Array.isArray(umkm.menu) && umkm.menu.length > 0 && (
          <section className="mt-8">
            <h2 className="text-center text-2xl font-extrabold text-pink-400">Daftar Menu</h2>
            <div className="mt-5 grid md:grid-cols-2 gap-4">
              {umkm.menu.map((m, i) => (
                <div key={i} className="flex gap-3 p-3 bg-[#241033]/80 border border-white/10 rounded-2xl">
                  {m.image && (
                    <img src={m.image} alt={m.nama} className="w-20 h-20 rounded-xl object-cover flex-none" />
                  )}
                  <div className="min-w-0">
                    <div className="font-semibold">{m.nama}</div>
                    <div className="text-sm text-gray-300 line-clamp-2">{m.deskripsi}</div>
                    <div className="mt-1">
                      <span className="font-semibold">{rupiah(m.harga)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </section>
  );
}

export function generateStaticParams() {
  return data.map((d) => ({ id: d.id.toString() }));
}
