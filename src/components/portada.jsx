import { FaFacebookF, FaInstagram, } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { BiLogoTiktok } from "react-icons/bi";
import Navbar from "./Navbar";


const PerfilPhoto = ()=> {
  const paisaje = {
    backgroundImage: "url('background.jpg')"
  }
    return(
        <section className="bg-cover w-full h-full " style={paisaje}>
            <div className=" bg-black bg-opacity-25 ">

            <Navbar/>
            <div className="flex flex-col items-center gap-5 p-60 ">
                <h1 className="text-3xl text-white font-bold">
                    HOLA!
                </h1>
                <p className="text-3xl font-bold text-white">
                   <span className="font-semibold">Somos</span> <span className="p-2 rounded-md bg-cyan-800">Misioneros</span> 
                </p>
                <div className="grid grid-cols-4 gap-4 m-4 ">
                    <FaFacebookF className="w-6 h-6 text-green-600"/>
                    <FaInstagram className="w-6 h-6 text-green-600"/>  
                    <FiYoutube className="w-6 h-6 text-green-600"/>
                    <BiLogoTiktok className="w-6 h-6 text-green-600"/>                
                  </div>
            </div>
            </div>
        </section>


    );
};


export default PerfilPhoto;