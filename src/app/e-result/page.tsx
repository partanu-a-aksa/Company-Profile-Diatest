"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import supabase from "@/lib/supabase/client";
import { Session } from "@supabase/supabase-js";
import Link from "next/link";

export default function EResult() {
  const router = useRouter();
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        router.push("/signin");
      } else {
        setSession(session);
      }
    });
  }, [router]);

  return (
    session && (
      <section className="max-w-6xl mx-auto text-center relative h-screen bg-cover bg-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#0387fa] mb-6 drop-shadow-sm">
          E-Result Laboratorium Diatest
        </h1>
        <p className="text-gray-700 text-lg md:text-xl mb-14 leading-relaxed">
          Akses hasil pemeriksaan, riwayat, dan layanan laboratorium Anda dengan
          mudah di satu tempat yang aman dan nyaman.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link
            href="/e-result/registrasi"
            className="group bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-blue-50"
          >
            <img
              src="/iconregistrasi.png"
              alt="Registrasi"
              className="w-20 h-20 mb-4 transition-transform duration-500 group-hover:scale-110"
            />
            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-700 transition-colors">
              Lihat Registrasi
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Periksa status dan detail pendaftaran pemeriksaan Anda dengan
              cepat dan mudah.
            </p>
          </Link>

          <Link
            href="/e-result/hasil"
            className="group bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-blue-50"
          >
            <img
              src="/iconhasillab.png"
              alt="Hasil Lab"
              className="w-20 h-20 mb-4 transition-transform duration-500 group-hover:scale-110"
            />
            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-700 transition-colors">
              Lihat Hasil Lab
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Akses hasil pemeriksaan laboratorium Anda secara online dengan
              sistem keamanan terjamin.
            </p>
          </Link>

          <Link
            href="/e-result/history"
            className="group bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-blue-50"
          >
            <img
              src="/iconhistory.png"
              alt="Riwayat Pemeriksaan"
              className="w-20 h-20 mb-4 transition-transform duration-500 group-hover:scale-110"
            />
            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-700 transition-colors">
              My History
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Lihat riwayat pemeriksaan Anda dari waktu ke waktu untuk memantau
              kondisi kesehatan secara menyeluruh.
            </p>
          </Link>

          <Link
            href="/e-result/layanan"
            className="group bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-blue-50"
          >
            <img
              src="/iconlayanan.png"
              alt="Cek Layanan"
              className="w-20 h-20 mb-4 transition-transform duration-500 group-hover:scale-110"
            />
            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-700 transition-colors">
              Cek Ketersediaan Layanan
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Ketahui jadwal dan ketersediaan layanan pemeriksaan yang Anda
              butuhkan sebelum datang ke klinik.
            </p>
          </Link>
        </div>
      </section>
    )
  );
}
