import { create } from "zustand";
import axios from "axios";

interface IBlogData {
  title: string;
  content: string;
  imgurl: string;
}

const useBlogStore = create((set, get) => ({
  // ===== STATE =====
  // Array untuk menyimpan semua blog posts
  blogs: [],
  loading: false,
  error: null,

  // // ===== ACTION: CREATE BLOG POST =====
  // createBlogPost: async (blogData: IBlogData) => {
  //   // Set loading = true, hapus error sebelumnya
  //   set({ loading: true, error: null });

  //   try {
  //     // // Buat FormData untuk kirim file + data text
  //     // const formData = new FormData();
  //     // formData.append("title", blogData.title);
  //     // formData.append("content", blogData.content);

  //     // // Tambahkan image jika ada
  //     // if (blogData.image) {
  //     //   formData.append("image", blogData.image);
  //     // }

  //     // Kirim POST request ke server
  //     const response = await axios.post(
  //       "https://queenlyplay-us.backendless.app/api/data/account",
  //       blogData
  //       // {
  //       //   headers: {
  //       //     "Content-Type": "multipart/form-data",
  //       //   },
  //       // }
  //     );

  //     // Jika berhasil, tambahkan blog baru ke state
  //     set((state) => ({
  //       blogs: [...state.blogs, response.data],
  //       loading: false,
  //     }));

  //     return { success: true, data: response.data };
  //   } catch (error) {
  //     set({
  //       loading: false,
  //       error: error.response?.data?.message || "Gagal membuat blog post",
  //     });
  //     return { success: false, error: error.message };
  //   }
  // },

  getAllBlogs: async () => {
    set({ loading: true, error: null });

    try {
      const response = await axios.get(
        "https://sturdysense-us.backendless.app/api/data/account"
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
