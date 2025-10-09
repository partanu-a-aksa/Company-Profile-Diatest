import { create } from "zustand";
import axios from "axios";

interface IBlogData {
  title: string;
  content: string;
  imgurl: string;
}

const useBlogStore = create((set, get) => ({
  blogs: [],
  loading: false,
  error: null,

  getAllBlogs: async () => {
    set({ loading: true, error: null });

    try {
      const response = await axios.get(
        "https://sturdysense-us.backendless.app/api/data/blogs"
      );
      console.log("response blog list", response.data);
      set({ blogs: response.data, loading: false });
    } catch (error) {
      set({
        loading: false,
        error: "Gagal mengambil blog posts",
      });
    }
  },

  clearError: () => set({ error: null }),
}));

export default useBlogStore;
