import { FaFacebookF, FaInstagram, } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { BiLogoTiktok } from "react-icons/bi";
import { BiLogoGmail } from "react-icons/bi";
import {BiSolidShoppingBagAlt } from "react-icons/bi";

const Contacts = ()=>{
    return(
     <section>
        <div className=" grid grid-cols-3 bg-slate-800 items-center justify-center ">
            <div className="flex flex-row justify-center">
                <img src="/public/QR.png" alt="" />
                <div className="flex flex-col items-center p-10">
                    <h1 className="text-white">Ofrendar</h1>
                    <p className="text-cyan-400">si no puede ir con nosotros, hagase parte de nuestras misiones ofrendando mediante nuestro QR</p> 
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <h1 className="text-white">Ofrendar comprando con nosotros</h1>
                <p className="text-cyan-400">
                    nuestros misioneros crean productos para usted, si desea ofrendar comprando estos productos visite nuestras tiendas online. 
                </p>
                <botton className="flex gap-5 items-center justify-center bg-green-800 rounded-md p-2 text-white hover:bg-green-400">
                    <BiSolidShoppingBagAlt className="text-white "/>
                    <h1>Ir a la tienda</h1>
                </botton>
            </div>
            <div className="flex flex-col items-center">
                <h1 className="text-white">Informaciones</h1>
                <h2 className="text-cyan-400">Bolivia, Cbba</h2>
                <h2 className="text-cyan-400">Telf: +591 74320607</h2>
                <div className=" flex gap-5 ">
                    <FaFacebookF className="text-green-400"/>
                    <FaInstagram className="text-green-400"/>
                    <FiYoutube className="text-green-400"/>
                    <BiLogoGmail className="text-green-400"/>
                    <BiLogoTiktok className="text-green-400"/>
                </div>
            </div>
        </div>
     </section>
    );
};

export default Contacts;