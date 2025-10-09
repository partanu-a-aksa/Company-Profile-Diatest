import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-row bg-[#DDEBEF] text-[#0F0D0F] p-4 items-center text-center justify-between">
      <div className="flex flex-col justify-center items-center">
        <p className="font-bold">Senin-Jumat</p>
        <p>06.00 - 20.00</p>
        <p className="font-bold">Sabtu</p>
        <p>06.00 - 14.00</p>
        <p className="text-[10px]">
          © 2025{" "}
          <span className="font-bold">PT Laboratorium Klinik Diatest</span>. All
          rights reserved
        </p>
      </div>
      <div>
        <Link href="/">
          <img
            src="/footerlogo.png"
            alt="Laboratorium Klinik Diatest"
            className="w-[200px]"
          />
        </Link>
      </div>
    </footer>
  );
}
