import Image from "next/image";
import TitleSplash from "./components/titlesplash";
import LoginForm from "./components/loginform/loginform";


export default function Home() {
  return (
    <div className="flex flex-row w-screen h-screen bg-[url('/v2.png')] bg-opacity-50 bg-cover bg-center">
      <div className="title-splash flex-auto basis-2/6">
        <div className="titlebox items-center flex relative top-1/5 justify-center h-12/20 pl-55">
          <TitleSplash />
        </div>
      </div>

      <div className="login-form flex-auto basis-6/10">
        <div className="loginFormArea relative top-1/5 h-8/12">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};
