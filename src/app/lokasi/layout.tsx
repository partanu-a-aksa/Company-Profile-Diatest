import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import * as React from "react";

export interface ILokasiProps {
  children: React.ReactNode;
}

export default function Lokasi(props: ILokasiProps) {
  return (
    <div>
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}
