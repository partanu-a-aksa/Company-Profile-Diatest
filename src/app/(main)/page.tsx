"use client";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/labdiatestciledug.png')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 flex flex-col justify-center items-start h-full px-10 text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
            Laboratorium Klinik <p className="text-[#0387fa]">Diatest</p>
          </h1>
          <p className="mt-5 max-w-2xl text-lg md:text-xl drop-shadow-md">
            Laboratorium ter-Akreditasi{" "}
            <span className="font-bold">Paripurna</span> yang menyediakan
            layanan Laboratorium Klinik{" "}
            <span className="font-bold">cepat </span>
            dan <span className="font-bold">akurat</span> dengan mutu terjamin
            demi keselamatan pasien serta keberhasilan rencana pengobatan.
          </p>
          <div className="mt-6 w-full flex flex-col md:flex-row gap-4">
            <Link
              href="/layanan"
              className="flex items-center gap-4 bg-blue-50 hover:bg-blue-400 
                         text-gray-900 px-6 py-4 rounded-xl font-semibold 
                         shadow-md transition w-full md:w-1/2"
            >
              <img src="/iconcarilayanan.png" alt="" className="w-16 h-16" />
              <div className="flex flex-col text-left leading-snug">
                <p className="text-lg font-bold">Jenis Layanan</p>
                <p className="text-sm text-gray-800">
                  Cari tahu jenis layanan kami
                </p>
              </div>
            </Link>

            <Link
              href="/e-result"
              className="flex items-center gap-4 bg-blue-200 hover:bg-blue-400 
               text-gray-900 px-6 py-4 rounded-xl font-semibold 
               shadow-md transition w-full md:w-1/2"
            >
              <img src="/pesanpemeriksaan.svg" alt="" className="w-16 h-16" />
              <div className="flex flex-col text-left leading-snug">
                <p className="text-lg font-bold">Pesan & Hasil</p>
                <p className="text-sm text-gray-800">
                  Lakukan pemesanan & akses hasil tes lab secara online
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section
        className="relative min-h-screen bg-cover bg-center py-20"
        style={{ backgroundImage: "url('/profilebg.jpg')" }}
      >
        <div className="relative z-10 flex flex-col justify-center items-center h-full px-6 md:px-10 ">
          <h2 className="text-3xl md:text-5xl font-extrabold drop-shadow-lg mb-10">
            Jenis Layanan Pemeriksaan
          </h2>

          <div className="flex flex-col md:flex-row gap-4 w-full max-w-6xl justify-center items-stretch">
            <div className="group flex flex-col items-center text-center rounded-2xl shadow-md md:w-1/3 p-0.5 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-200 hover:bg-gradient-to-b hover:from-white hover:to-blue-50">
              <div className="overflow-hidden rounded-xl mb-4 w-full">
                <img
                  src="/ceklabpersonal.jpg"
                  alt=""
                  className="w-full h-56 object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-700 transition-colors">
                Layanan Pemeriksaan Personal
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Layanan pemeriksaan personal ditujukan bagi individu yang ingin
                memantau kondisi kesehatan secara menyeluruh. Proses dilakukan
                dengan cepat dan nyaman di klinik kami, dengan hasil pemeriksaan
                yang akurat untuk membantu Anda mengetahui kondisi tubuh sejak
                dini.
              </p>
            </div>

            <div className="group flex flex-col items-center text-center rounded-2xl shadow-md md:w-1/3 p-0.5 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-200 hover:bg-gradient-to-b hover:from-white hover:to-blue-50">
              <div className="overflow-hidden rounded-xl mb-4 w-full">
                <img
                  src="/ceklabkorporat.jpg"
                  alt=""
                  className="w-full h-56 object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-700 transition-colors">
                Layanan Korporasi
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Layanan korporasi kami dirancang khusus untuk kebutuhan
                perusahaan dalam menjaga kesehatan karyawan. Pemeriksaan
                dilakukan secara terjadwal dengan laporan hasil kolektif yang
                memudahkan pemantauan kesehatan tenaga kerja dan mendukung
                produktivitas perusahaan.
              </p>
            </div>

            <div className="group flex flex-col items-center text-center rounded-2xl shadow-md md:w-1/3 p-0.5 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-200 hover:bg-gradient-to-b hover:from-white hover:to-blue-50">
              <div className="overflow-hidden rounded-xl mb-4 w-full">
                <img
                  src="/ceklabhomecare.jpg"
                  alt=""
                  className="w-full h-56 object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-700 transition-colors">
                Layanan Home Service
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Nikmati kemudahan pemeriksaan kesehatan tanpa perlu keluar
                rumah. Tim medis kami akan datang langsung ke lokasi Anda dengan
                peralatan lengkap dan standar keamanan tinggi, sehingga Anda
                dapat melakukan pemeriksaan secara aman, praktis, dan nyaman.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
