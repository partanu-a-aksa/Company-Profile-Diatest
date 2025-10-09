import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import * as React from "react";

interface IProfileLayoutProps {
  children: React.ReactNode;
}

export default function ProfileLayout(props: IProfileLayoutProps) {
  return (
    <>
      <section
        className="relative min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/profilebg.jpg')" }}
      >
        <Navbar />

        <div className="relative z-10 min-h-screen py-32">
          <main>{props.children}</main>
        </div>
      </section>
      <Footer />
    </>
  );
}
