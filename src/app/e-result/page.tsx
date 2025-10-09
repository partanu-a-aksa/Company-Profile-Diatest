"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import supabase from "@/lib/supabase/client";
import { Session } from "@supabase/supabase-js";

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
      <div className="p-6">
        <h1 className="text-2xl font-bold">Exam Result</h1>
        <p>Hanya user yang login bisa lihat halaman ini.</p>
      </div>
    )
  );
}
