"use client";

import { useEffect, useState } from "react";
import supabase from "./supabase/client";
import type { User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";

export default function useSupabaseAuth() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      setUser(data.session?.user || null);
    };
    getSession();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user || null);
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    router.replace("/");
  };
  return { user, signOut };
}
