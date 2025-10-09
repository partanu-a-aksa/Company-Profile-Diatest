import Link from "next/link";
import * as React from "react";

export default function Sidebar() {
  return (
    <aside className="w-40 bg-slate-200 p-2 text-slate-700">
      <nav className="flex flex-col gap-2">
        <Link href="/">
          <img
            src="/footerlogo.png"
            alt="Laboratorium Klinik Diatest"
            className="w-[200px]"
          />
        </Link>

        <Link
          href="/dashboard/create-content"
          className="p-2 rounded hover:shadow hover:bg-slate-500 hover:text-white"
        >
          Create Content
        </Link>
        <Link
          href="/blog"
          className="p-2 rounded hover:shadow hover:bg-slate-500 hover:text-white"
        >
          Blogs
        </Link>
        <Link
          href="/dashboard/user-profile"
          className="p-2 rounded hover:shadow hover:bg-slate-500 hover:text-white"
        >
          User Profile
        </Link>
      </nav>
    </aside>
  );
}
