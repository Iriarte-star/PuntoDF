import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { BiLogoTiktok } from "react-icons/bi";
import Navbar from "./Navbar";

const PerfilPhoto = () => {
  const paisaje = {
    backgroundImage: "url('background.jpg')"
  };

  return (
    <section className="bg-cover bg-center bg-no-repeat bg-fixed w-full h-screen" style={paisaje}>
      <div className="bg-black bg-opacity-25 h-full">
        <Navbar />
        <div className="flex flex-col items-center justify-center h-full p-4 sm:p-10 lg:p-16">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-white font-bold mb-2 text-center">
            HOLA!
          </h1>
          <p className="text-2xl sm:text-3xl lg:text-4xl text-white font-bold mb-4 text-center">
            <span className="font-semibold">Somos</span>{" "}
            <span className="p-2 rounded-md  bg-teal-950">Misioneros</span>
          </p>
          <div className="flex gap-4 ">
            <FaFacebookF className="w-8 h-8  text-sky-500   bg-slate-900 p-1 rounded-lg" />
            <p className=" font-bold text-white  ">puntodefe</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerfilPhoto;
