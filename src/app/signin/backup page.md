/\*\* export default function SignIn() {
const router = useRouter();
const login = useAuthStore((s) => s.login);
const inEmailRef = React.useRef<HTMLInputElement>(null);
const inPasswordRef = React.useRef<HTMLInputElement>(null);

async function onBtSignIn() {
try {
const res = await fetch(
`https://sturdysense-us.backendless.app/api/data/account?where=${encodeURIComponent(
          `email='${inEmailRef.current?.value}' AND password='${inPasswordRef.current?.value}'`
        )}`
);
const data = await res.json();
if (!data.length) {
throw new Error("Akun tidak ditemukan.");
}
console.log(data);
alert("LogIn berhasil !");
login(data[0].email, data[0].username);
sessionStorage.setItem("user", JSON.stringify(data[0]));

      router.replace("/dashboard");
    } catch (error) {
      console.log(error);
      alert("LogIn Gagal");
    }

}

return (
<div className="bg-white p-6 rounded-2xl w-96 m-auto my-5 shadow-2xl">
<img
        src="/diatestlogo.png"
        alt="Logo Laboratorium Diatest"
        className="py-2 hover:scale-105 transition-transform"
      />
<h2 className="text-xl font-bold">Sign In</h2>
<p className="mb-4 text-[13.46px] text-[#969696]">
Please enter your information to proceed
</p>
<form className="flex flex-col gap-3">
<input
          type="email"
          placeholder="email@email.com"
          className="shadow p-2 rounded-[15.38px] bg-[#e1d5d5]"
          ref={inEmailRef}
        />
<input
          type="password"
          placeholder="password"
          className="shadow p-2 rounded-[15.38px] bg-[#e1d5d5]"
          ref={inPasswordRef}
        />
<button
          type="button"
          onClick={onBtSignIn}
          className="bg-blue-600 text-white py-2 rounded-2xl shadow-sm 
             hover:shadow-lg hover:scale-105 hover:bg-blue-700 hover:font-bold
             transition-transform duration-200 ease-in-out"
        >
Sign In
</button>
<p className=" flex items-center justify-center">Or</p>
<button
          type="button"
          onClick={SignInGoogle}
          className="flex items-center justify-center gap-3 bg-white text-gray-700 px-6 py-3 rounded-xl border border-gray-300 shadow-sm 
             hover:shadow-lg hover:scale-105 hover:bg-gray-50 
             transition-transform transition-shadow duration-200 ease-in-out"
        >
<img src="/logogoogle.png" alt="google" className="w-6 h-6" />
<span className="text-base font-bold">SignIn with Google</span>
</button>
<button
type="button"
// onClick={}
className="flex items-center justify-center gap-3 bg-white text-gray-700 px-6 py-3 rounded-xl border border-gray-300 shadow-sm
hover:shadow-lg hover:scale-105 hover:bg-gray-50
transition-transform duration-200 ease-in-out" >
<img src="/iconphone.png" alt="phone" className="w-6 h-6" />
<span className="text-base font-bold">Masuk menggunakan nomor</span>
</button>
</form>
</div>
);
} \*/
