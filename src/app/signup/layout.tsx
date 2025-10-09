import * as React from "react";

interface ISignUpLayoutProps {
  children: React.ReactNode; //merepresentasikan bahwa ada component lain yang mau di render
}

export default function SignUpLayout(props: ISignUpLayoutProps) {
  return (
    <div className="min-h-screen py-32">
      <main>{props.children}</main>
    </div>
  );
}
