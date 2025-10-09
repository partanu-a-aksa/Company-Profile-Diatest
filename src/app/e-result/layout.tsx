import * as React from "react";
import Footer from "@/components/Footer";

interface IEResult {
  children: React.ReactNode; //merepresentasikan bahwa ada component lain yang mau di render
}

export default function EResult(props: IEResult) {
  return (
    <section>
      <div className="min-h-screen py-32">
        <main>{props.children}</main>
      </div>
      <Footer />
    </section>
  );
}
