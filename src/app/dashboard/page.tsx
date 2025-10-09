"use client";

import * as React from "react";
import useSupabaseAuth from "@/lib/useSupabaseAuth";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const { user, signOut } = useSupabaseAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      if (signOut) await signOut();
      document.cookie = "diatest_token=; Max-Age=0; path=/";
      router.replace("/signin");
    } catch (error) {
      console.error("Error during logout: ", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col ">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Dashboard Page</h1>
      <p className="text-gray-600 mb-6">
        Welcome,{" "}
        <span className="font-semibold text-blue-700">{user?.email}</span>!
      </p>

      <button
        onClick={handleLogout}
        className="bg-red-600 text-white px-4 py-2 rounded-xl shadow hover:bg-red-700 hover:scale-105 transition-transform"
      >
        Logout
      </button>
    </div>
  );
}
