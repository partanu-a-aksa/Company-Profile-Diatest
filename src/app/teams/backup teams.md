"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

function Card({
  name,
  title,
  image,
}: {
  name: string;
  title: string;
  image: string;
}) {
  return (
    <div className="group rounded-2xl overflow-hidden backdrop-blur-md bg-white/60 border border-white/30 shadow-lg hover:scale-105 transition">
      <div className="relative w-full h-72">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-black">{name}</h3>
        <p className="text-gray-700">{title}</p>
      </div>
    </div>
  );
}

export default function Teams() {
  return (
    <section className="py-20 px-6 md:px-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold ">
          Our <span className="text-[#0387fa]">Teams</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
        <Card
          name="Nur Herawati, SST"
          title="Pimpinan Laboratorium"
          image="/team/nurherawati.jpg"
        />
        <Card
          name="dr. Yuli Aryani, Sp.PK., M.Kes"
          title="Penanggungjawab Teknis"
          image="/team/yuliaryani.jpg"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
        <Card
          name="Ymma Hikmah. S, A.Md.A.K, SKM"
          title="Koordinator Teknis"
          image="/team/ymmahikmah.jpg"
        />
        <Card
          name="Nurul Aulia Rahmi, A.Md.A.K"
          title="Koordinator Mutu"
          image="/team/nurulaulia.jpg"
        />
        <Card
          name="Hani Hanifah, A.Md.A.K"
          title="Koordinator SDM"
          image="/team/hanihanifah.jpg"
        />
      </div>

      <div className="max-w-4xl mx-auto space-y-8 text-gray-700">
        <div>
          <h3 className="text-xl font-bold text-black mb-2">Staf Teknis</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Dasep Irvan N, A.Md.A.K, Hematologi & Kimia Darah</li>
            <li>Rosalia Eka L, A.Md.Kes, Imunoserologi & Kimia Rutin</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-black mb-2">
            Staf Pendaftaran
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Nurul Aulia R, A.Md.A.K</li>
            <li>Dayu Panca Mahardika</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-black mb-2">
            Staf Mutu Teknis
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Ymma Hikmah. S, A.Md.A.K, SKM</li>
            <li>Dasep Irvan N, A.Md.A.K</li>
            <li>Indra Ramdhani, A.Md.Kes</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-black mb-2">
            Staf Mutu Manajemen
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Hani Hanifah, A.Md.A.K</li>
            <li>Rosalia Eka L, A.Md.Kes</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-black mb-2">Staf Logistik</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Nurul Aulia R, A.Md.A.K</li>
            <li>Rosalia Eka L, A.Md.Kes</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-black mb-2">Staf K3</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Dasep Irvan N, A.Md.A.K</li>
            <li>Indra Ramdhani, A.Md.Kes</li>
            <li>Rendi Taufik H, SE</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-black mb-2">Staf Umum</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Nita Heryanti</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
