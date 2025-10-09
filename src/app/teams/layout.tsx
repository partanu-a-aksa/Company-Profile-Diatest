import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import * as React from "react";

interface ITeamsLayoutProps {
  children: React.ReactNode;
}

export default function TeamsLayout(props: ITeamsLayoutProps) {
  return (
    <>
      <section
        className="relative min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/profilebg.jpg')" }}
      >
        <Navbar />

        <div className="relative z-10 min-h-screen ">
          <main>{props.children}</main>
        </div>
      </section>
      <Footer />
    </>
  );
}
