import { create } from "zustand";
import { persist } from "zustand/middleware";
import supabase from "@/lib/supabase/client";

interface IUser {
  id: string;
  email: string;
  name?: string;
}

interface IAuthStore {
  user: IUser | null;
  loading: boolean;
  loginWithEmail: (email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
  fetchUser: () => Promise<void>;
}

const useAuthStore = create<IAuthStore>()(
  persist(
    (set) => ({
      user: null,
      loading: false,

      loginWithEmail: async (email, password) => {
        set({ loading: true });
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) {
          alert(error.message);
          set({ loading: false });
          return;
        }

        const { user } = data;
        if (user) {
          set({
            user: {
              id: user.id,
              email: user.email!,
              name: user.user_metadata?.full_name || "",
            },
            loading: false,
          });
        }
      },

      loginWithGoogle: async () => {
        const { error } = await supabase.auth.signInWithOAuth({
          provider: "google",
          options: {
            redirectTo: `${window.location.origin}/dashboard`,
          },
        });
        if (error) alert(error.message);
      },

      logout: async () => {
        await supabase.auth.signOut();
        set({ user: null });
      },

      fetchUser: async () => {
        const { data } = await supabase.auth.getUser();
        if (data?.user) {
          set({
            user: {
              id: data.user.id,
              email: data.user.email!,
              name: data.user.user_metadata?.full_name || "",
            },
          });
        } else {
          set({ user: null });
        }
      },
    }),
    {
      name: "auth-storage",
    }
  )
);

export default useAuthStore;
