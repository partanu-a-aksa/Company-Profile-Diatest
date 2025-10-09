"use client";

import * as React from "react";
import { useState } from "react";
import axios from "axios";

export default function CreateContent() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    imgurl: "",
    author: "",
  });
  const [imagePreview, setImagePreview] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const result = await axios.post(
        "https://sturdysense-us.backendless.app/api/data/blogs",
        formData
      );
      console.log("create blog: ", result.data);

      if (result.data.objectId) {
        alert("Blog berhasil dipost!");

        setFormData({ title: "", content: "", imgurl: "", author: "" });
        setImagePreview("");
      }
    } catch (error) {
      console.log("error", error);
      alert("Gagal membuat blog");
    }
  };

  return (
    <div className="bg-white p-6 shadow rounded-2xl w-96 m-auto my-5">
      <h1 className="text-xl font-bold mb-4">Create Blog Content</h1>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          name="title"
          type="text"
          placeholder="Input Blog Title here.."
          className="shadow p-2 rounded border"
          value={formData.title}
          onChange={handleInputChange}
          required
        />

        <input
          name="imgurl"
          type="text"
          placeholder="Input image URL here.."
          className="shadow p-2 rounded border w-full"
          onChange={handleInputChange}
        />

        <textarea
          name="content"
          placeholder="Write your blog content..."
          className="shadow p-2 rounded border min-h-32"
          value={formData.content}
          onChange={handleInputChange}
          required
        />

        <button
          type="submit"
          className="bg-slate-600 text-white py-2 rounded hover:bg-slate-700 disabled:bg-slate-400"
        >
          Create
        </button>
      </form>
    </div>
  );
}
