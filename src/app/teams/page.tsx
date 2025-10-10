"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface IUser {
  name: { first: string };
  picture: { large: string };
  objectId: number;
  role: string;
}

interface IMember {
  name: string;
  photo: string;
  objectId: number;
  role: string;
}

export default function Teams() {
  const [member, setMember] = useState([]);
  useEffect(() => {
    async function fetchTeam() {
      const roles = [
        "CEO",
        "Penanggung Jawab Teknis",
        "CFO",
        "CTO",
        "Head of Operations",
      ];
      const response = await fetch("https://randomuser.me/api?results=5", {
        method: "GET",
      });
      const data = await response.json();
      setMember(
        data.results.map((user: IUser, index: number) => {
          return {
            name: user.name.first,
            photo: user.picture.large,
            objectId: index,
            role: roles[index],
          };
        })
      );
    }
    fetchTeam();
  }, []);

  return (
    <section className="py-20 px-6 md:px-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold ">
          Our <span className="text-[#0387fa]">Teams</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
        {member.map((user: IMember) => (
          <div
            key={user.objectId}
            className=" h-100 flex flex-col gap-5 items-center p-4 justify-center rounded-md shadow hover:scale-105 transition"
          >
            <Image
              src={user.photo}
              alt="Director Teams"
              width={200}
              height={350}
              className="rounded-[20px] shadow-xl"
            ></Image>
            <p className="font-medium text-2xl tracking-wide">{user.name}</p>
            <p className="rounded bg-slate-100/70 px-5 py-0.5 font-extralight">
              {user.role}
            </p>
          </div>
        ))}
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
