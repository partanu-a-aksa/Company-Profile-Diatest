"use client";
import * as React from "react";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useAuthStore from "@/stores/authStores";

export default function Navbar() {
  const { user, fetchUser, logout } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <img
              src="/diatestlogo.png"
              alt="Logo Diatest"
              className="h-[50px] w-auto"
            />
          </Link>

          <div className="flex items-center gap-4 ml-auto">
            <div className="relative group">
              <button
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl 
                           bg-slate-200 hover:bg-blue-400 
                           font-medium text-sm shadow h-11 w-28 transition-transform duration-200 hover:scale-105 active:scale-95"
              >
                <img src="/iconmenu.png" alt="" className="w-5 h-5" />
                Menu
              </button>

              <div
                className="absolute top-full left-1/2 -translate-x-1/2 mt-0
                           w-48 bg-white rounded-2xl shadow-lg hidden group-hover:block"
              >
                <Link
                  href="/"
                  className="block px-4 py-2 hover:bg-blue-400 rounded-2xl"
                >
                  Home
                </Link>
                <Link
                  href="/profile"
                  className="block px-4 py-2 hover:bg-blue-400 rounded-2xl"
                >
                  Profile
                </Link>
                <Link
                  href="/teams"
                  className="block px-4 py-2 hover:bg-blue-400 rounded-2xl"
                >
                  Teams
                </Link>
                <Link
                  href="/blog"
                  className="block px-4 py-2 hover:bg-blue-400 rounded-2xl"
                >
                  Blog
                </Link>
                <Link
                  href="/layanan"
                  className="block px-4 py-2 hover:bg-blue-400 rounded-2xl"
                >
                  Layanan
                </Link>
                <Link
                  href="/lokasi"
                  className="block px-4 py-2 hover:bg-blue-400 rounded-2xl"
                >
                  Lokasi
                </Link>
                <Link
                  href="/e-result"
                  className="block px-4 py-2 hover:bg-blue-400 rounded-2xl"
                >
                  E-Result
                </Link>
              </div>
            </div>

            {user ? (
              <div className="flex items-center gap-3">
                <button
                  onClick={() => router.push("/dashboard")}
                  className="flex items-center justify-center gap-2 px-5 py-1 rounded-xl 
                           bg-slate-200 hover:bg-blue-400 
                           font-medium text-sm shadow h-11 w-fit transition-transform duration-200 hover:scale-105 active:scale-95"
                >
                  <img
                    src="/iconprofile.png"
                    alt="profile"
                    className="w-5 h-5"
                  />
                </button>

                <button
                  onClick={logout}
                  className="px-3 py-2 rounded bg-slate-200 hover:bg-red-400 hover:text-white transition-transform"
                >
                  <img
                    src="/iconlogout.png"
                    alt="logout"
                    className="w-fit h-5"
                  />
                </button>
              </div>
            ) : (
              <button
                onClick={() => router.push("/signin")}
                className="flex items-center justify-center gap-2 px-4 py-2 
                           bg-slate-200 hover:bg-slate-300 
                           rounded-xl shadow text-sm font-medium h-11 w-28
                           transition-transform duration-200 hover:scale-105 active:scale-95"
              >
                <img src="/iconsignin.png" alt="" className="w-5 h-5" />
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
