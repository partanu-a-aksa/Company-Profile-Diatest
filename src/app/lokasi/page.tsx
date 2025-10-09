"use client";
import * as React from "react";

export default function Lokasi() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Lokasi Laboratorium Klinik Diatest
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-4">Alamat</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Jl. Ciledug No.79, Regol, Kec. Garut Kota, Kabupaten Garut, Jawa
              Barat 44114
            </p>

            <div className="space-y-2 text-gray-700">
              <p>
                ☎️ <span className="font-medium">Telp:</span>{" "}
                <a
                  href="tel:+622623456789"
                  className="text-blue-600 hover:underline"
                >
                  (0262) 3456789
                </a>
              </p>
              <p>
                ✉️ <span className="font-medium">Email:</span>{" "}
                <a
                  href="mailto:info@diatest.co.id"
                  className="text-blue-600 hover:underline"
                >
                  info@diatest.co.id
                </a>
              </p>
            </div>
          </div>

          <div className="mt-6">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Jl.+Ciledug+No.79,+Regol,+Garut+Kota,+Garut,+Jawa+Barat+44114"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full text-center px-6 py-3 rounded-xl 
                         bg-blue-500 text-white font-semibold 
                         hover:bg-blue-600 transition shadow-md"
            >
              Get Directions
            </a>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.727152680502!2d107.89449357499358!3d-7.010973792994988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68b13a7dd7df67%3A0xa56c184d22960c9a!2sJl.%20Ciledug%20No.79%2C%20Regol%2C%20Kec.%20Garut%20Kota%2C%20Kabupaten%20Garut%2C%20Jawa%20Barat%2044114!5e0!3m2!1sid!2sid!4v1696212345678!5m2!1sid!2sid"
            width="100%"
            height="350"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
