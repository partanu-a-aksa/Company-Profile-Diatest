"use client";
import * as React from "react";

export default function Layanan() {
  return (
    <>
      <section
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/jenislayanan.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/100 via-black/80 to-transparent"></div>

        <div className="relative z-10 flex flex-col justify-center items-start h-full px-10 text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
            Jenis Layanan
          </h1>
          <p className="mt-5 max-w-2xl text-lg md:text-xl drop-shadow-md">
            Selain pemeriksaan rutin dan diagnostik, Diatest juga menyediakan
            layanan konsultasi hasil, skrining kesehatan, dan paket pemeriksaan
            preventif untuk menjaga kesehatan jangka panjang.
          </p>
          <p className="mt-5 max-w-2xl text-lg md:text-xl drop-shadow-md">
            Dengan jaringan kemitraan yang luas, kami siap melayani rumah sakit,
            klinik, perusahaan, hingga individu.
          </p>
        </div>
      </section>

      <section className="bg-blue-100 py-16 px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group flex flex-col items-center text-center rounded-2xl p-6 shadow-md bg-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-200 hover:bg-gradient-to-b hover:from-white hover:to-blue-50">
            <div className="overflow-hidden flex justify-center rounded-xl mb-4 w-full">
              <img
                src="/ceklabpersonal.jpg"
                alt="Layanan Pemeriksaan Personal"
                className="w-full h-56 object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
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

          <div className="group flex flex-col items-center text-center rounded-2xl p-6 shadow-md bg-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-200 hover:bg-gradient-to-b hover:from-white hover:to-blue-50">
            <div className="overflow-hidden flex justify-center rounded-xl mb-4 w-full">
              <img
                src="/ceklabhomecare.jpg"
                alt="Layanan Home Service"
                className="w-full h-56 object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-700 transition-colors">
              Layanan Home Service
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Nikmati kemudahan pemeriksaan kesehatan tanpa perlu keluar rumah.
              Tim medis kami akan datang langsung ke lokasi Anda dengan
              peralatan lengkap dan standar keamanan tinggi, sehingga Anda dapat
              melakukan pemeriksaan secara aman, praktis, dan nyaman.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-200">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Laboratorium Klinik
            </h2>
            <div className="flex flex-wrap gap-3 justify-center">
              <span className="tag">Alergi</span>
              <span className="tag">Analisa Cairan Tubuh</span>
              <span className="tag">Elektrolit dan Trace Elemen</span>
              <span className="tag">Endokrin</span>
              <span className="tag">Faal Hemostasis</span>
              <span className="tag">Faeces Analisis</span>
              <span className="tag">Fungsi Ginjal</span>
              <span className="tag">Fungsi Hati</span>
              <span className="tag">Gula Darah</span>
              <span className="tag">Hematologi</span>
              <span className="tag">Hematologi Spesifik</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-200">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Panel Pemeriksaan
            </h2>
            <div className="flex flex-wrap gap-3 justify-center">
              <span className="tag">Panel Food Intolerance Screening</span>
              <span className="tag">Panel IgE Spesifik 54 Jenis</span>
              <span className="tag">Panel Elektrolit (Na, K, Cl)</span>
              <span className="tag">Panel Protein</span>
              <span className="tag">Panel Creatinin</span>
              <span className="tag">Panel Glukosa 2 Jam PP</span>
              <span className="tag">Panel Glukosa Puasa</span>
              <span className="tag">Panel Glukosa Sewaktu</span>
              <span className="tag">Panel Hapusan Darah</span>
            </div>
          </div>

          <div className="hidden md:block md:col-span-2 h-px bg-blue-400 my-2 rounded-full"></div>

          <div className="group flex flex-col items-center text-center rounded-2xl shadow-md p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-200 hover:bg-gradient-to-b hover:from-white hover:to-blue-50 bg-white">
            <div className="overflow-hidden flex justify-center rounded-xl mb-4 w-full">
              <img
                src="/ceklabkorporat.jpg"
                alt="Layanan Korporasi"
                className="w-full h-56 object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-3 group-hover:text-blue-700 transition-colors">
              Layanan Korporasi
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Layanan korporasi kami dirancang khusus untuk kebutuhan perusahaan
              dalam menjaga kesehatan karyawan. Pemeriksaan dilakukan secara
              terjadwal dengan laporan hasil kolektif yang memudahkan pemantauan
              kesehatan tenaga kerja dan mendukung produktivitas perusahaan.
            </p>
          </div>

          <div className="flex flex-col bg-white rounded-2xl shadow-md p-6 justify-start transition-all duration-300 hover:shadow-2xl hover:shadow-blue-200">
            <h2 className="text-2xl font-bold mb-4 text-center  ">
              Paket Korporat
            </h2>
            <div className="flex flex-wrap gap-3 justify-center">
              <span className="tag">Lite Medical Check Up</span>
              <span className="tag">Full Medical Check Up</span>
              <span className="tag">In-house Literacy & MCU</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
