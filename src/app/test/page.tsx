"use client";

import { useEffect, useState } from "react";
import supabase from "@/lib/supabase/client";

export default function TestPage() {
  const [status, setStatus] = useState("Loading...");

  useEffect(() => {
    supabase
      .from("profiles")
      .select("*")
      .then((res) => {
        if (res.error) setStatus("❌ Gagal connect: " + res.error.message);
        else setStatus("✅ Supabase terkoneksi!");
      });
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <p className="text-xl">{status}</p>
    </div>
  );
}
