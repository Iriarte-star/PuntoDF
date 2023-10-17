import { FaInstagram } from "react-icons/fa";
import { BiBookmark } from "react-icons/bi";
import { service } from "../slides";

const Services = () => {
  return (
    <section id="servicios" className=" bg-teal-950 pt-16 pb-16 ">
      <div className="container mx-auto text-center ">
        <div className="flex justify-center  gap-2 p-2">
        < FaInstagram className="w-8 h-8 text-cyan-400  " />
        <p className=" text-white font-light">@puntodefe</p>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-red-600 mb-4">
          Nuestras Actividades
        </h1>
        <p className="text-base md:w-2/3 mx-auto text-white font-light">
          comprometidos biblicamente en cada una de nuestras actividades, visita nuestro perfil de instagram
        </p>
      </div>
      <div className="container mx-auto mt-10 p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {service.map((skill, index) => (
            <div key={index} className=" flex flex-col  items-center  bg-white rounded-lg p-2 shadow-md">
              <BiBookmark className="text-green-700 rounded-full w-6 h-6 mb-4 mx-auto" />
              <p className="text-lg font-medium text-gray-800 ">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
