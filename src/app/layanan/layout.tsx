import * as React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

interface ILayanan {
  children: React.ReactNode; //merepresentasikan bahwa ada component lain yang mau di render
}

export default function EResult(props: ILayanan) {
  return (
    <section>
      <Navbar />
      <div className="min-h-screen bg-blue-100">
        <main>{props.children}</main>
      </div>
      <Footer />
    </section>
  );
}
