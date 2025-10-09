import * as React from "react";
import Footer from "@/components/Footer";

interface ISignInLayoutProps {
  children: React.ReactNode; //merepresentasikan bahwa ada component lain yang mau di render
}

export default function SignInLayout(props: ISignInLayoutProps) {
  return (
    <section>
      <div className="min-h-screen py-32 bg-gradient-to-br from-blue-200 via-blue-300 to-blue-100">
        <main>{props.children}</main>
      </div>
      <Footer />
    </section>
  );
}
