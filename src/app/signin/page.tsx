"use client";

import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import * as React from "react";
import { SignInGoogle } from "@/lib/supabase/auth";
import useAuthStore from "@/stores/authStores";

export default function SignIn() {
  const router = useRouter();
  const { user, loginWithEmail } = useAuthStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // cek cookie sederhana
    const hasCookie = document.cookie
      .split("; ")
      .some((c) => c.startsWith("diatest_token="));
    if (hasCookie) router.replace("/dashboard");
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await loginWithEmail(email, password);
      const storedUser = useAuthStore.getState().user;
      if (storedUser) {
        // set cookie prototipe (simple)
        const tokenValue = encodeURIComponent(
          storedUser.email ?? storedUser.id ?? "1"
        );
        document.cookie = `diatest_token=${tokenValue}; path=/; max-age=${
          60 * 60 * 24
        }`; // 1 hari
        router.replace("/dashboard");
      } else {
        alert("Login gagal: cek email/password");
      }
    } catch (err) {
      console.error(err);
      alert("Terjadi kesalahan saat login");
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl w-96 m-auto my-5 shadow-2xl">
      <img
        src="/diatestlogo.png"
        alt="Logo Laboratorium Diatest"
        className="py-2 hover:scale-105 transition-transform"
      />
      <h2 className="text-xl font-bold">Sign In</h2>
      <p className="mb-4 text-[13.46px] text-[#969696]">
        Please enter your information to proceed
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="email"
          value={email}
          placeholder="email@email.com"
          className="shadow p-2 rounded-[15.38px] bg-[#e1d5d5]"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="password"
          className="shadow p-2 rounded-[15.38px] bg-[#e1d5d5]"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded-2xl shadow-sm 
             hover:shadow-lg hover:scale-105 hover:bg-blue-700 hover:font-bold
             transition-transform duration-200 ease-in-out"
        >
          Sign In
        </button>
        <p className=" flex items-center justify-center">Or</p>
        <button
          type="button"
          onClick={SignInGoogle}
          className="flex items-center justify-center gap-3 bg-white text-gray-700 px-6 py-3 rounded-xl border border-gray-300 shadow-sm 
             hover:shadow-lg hover:scale-105 hover:bg-gray-50 
             transition-transform transition-shadow duration-200 ease-in-out"
        >
          <img src="/logogoogle.png" alt="google" className="w-6 h-6" />
          <span className="text-base font-bold">SignIn with Google</span>
        </button>
        <button
          type="button"
          // onClick={}, belom dikerjain selow ya bro pusing bgt
          className="flex items-center justify-center gap-3 bg-white text-gray-700 px-6 py-3 rounded-xl border border-gray-300 shadow-sm 
             hover:shadow-lg hover:scale-105 hover:bg-gray-50 
             transition-transform duration-200 ease-in-out"
        >
          <img src="/iconphone.png" alt="phone" className="w-6 h-6" />
          <span className="text-base font-bold">Masuk menggunakan nomor</span>
        </button>
      </form>
    </div>
  );
}
