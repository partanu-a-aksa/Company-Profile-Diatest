"use client";

import supabase from "./client";

export async function SignInGoogle() {
  return await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      queryParams: {
        access_type: "offline",
        prompt: "consent",
      },
    },
  });
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}
