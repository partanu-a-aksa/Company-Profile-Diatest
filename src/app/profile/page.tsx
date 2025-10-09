"use client";
import Link from "next/link";

export default function Profile() {
  return (
    <section className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Profil Laboratorium Klinik Diatest
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-3 gap-8 md:gap-10 items-center">
        <img
          src="/teamlabdiatest.png"
          alt="Team PT Laboratorium Klinik Diatest"
          className="w-full h-72 object-cover rounded-xl shadow-md"
        />
        <div>
          <p className="leading-relaxed text-lg">
            Laboratorium Klinik Diatest hadir selama lebih dari 10 tahun sebagai
            mitra kesehatan terpercaya di Kabupaten Garut, Jawa Barat, dengan
            komitmen untuk memberikan layanan laboratorium klinik yang akurat,
            cepat, dan ramah. Kami meyakini bahwa kualitas bukan sekadar
            standar, melainkan budaya yang tertanam dalam setiap proses—mulai
            dari pengambilan sampel, pengujian, hingga penyampaian hasil kepada
            pasien dan tenaga medis.
          </p>

          <div className="mt-6">
            <Link
              href="/teams"
              className="inline-block px-6 py-3 rounded-xl bg-blue-100 text-[#0387fa] font-semibold 
                         shadow hover:bg-blue-300 hover:shadow-lg transition-all duration-300"
            >
              Kenali kami lebih dekat
            </Link>
          </div>
        </div>
        <div>
          <p className="leading-relaxed text-lg">
            Kami memahami bahwa hasil pemeriksaan laboratorium merupakan dasar
            penting dalam pengambilan keputusan medis. Karena itu, ketelitian
            ilmiah, teknologi mutakhir, dan integritas profesional menjadi
            landasan utama kami. Setiap prosedur dilaksanakan dengan mengacu
            pada standar mutu nasional dan internasional, diawasi melalui audit
            internal yang rutin, serta didukung oleh tenaga ahli medis dan
            analis laboratorium yang berpengalaman serta tersertifikasi.
          </p>
          <div className="mt-6">
            <Link
              href="/layanan"
              className="inline-block px-6 py-3 rounded-xl bg-blue-100 text-[#0387fa] font-semibold 
                         shadow hover:bg-blue-300 hover:shadow-lg transition-all duration-300"
            >
              Cari tahu tentang layanan kami
            </Link>
          </div>
        </div>

        <img
          src="/organigram.png"
          alt="Struktur Organisasi Laboratorium"
          className="w-full h-72 object-cover rounded-xl shadow-md"
        />

        <img
          src="/visimisi.png"
          alt="Visi Misi Laboratorium"
          className="w-full h-72 object-cover rounded-xl shadow-md"
        />
        <p className="leading-relaxed text-lg">
          Selain pemeriksaan rutin dan diagnostik, Diatest juga menyediakan
          layanan konsultasi hasil, skrining kesehatan, dan paket pemeriksaan
          preventif untuk mendukung masyarakat Garut dalam menjaga kesehatan
          jangka panjang. Dengan jaringan kemitraan yang luas, kami siap
          melayani rumah sakit, klinik, perusahaan, hingga individu yang
          membutuhkan layanan laboratorium cepat dan andal.
        </p>
      </div>
    </section>
  );
}
