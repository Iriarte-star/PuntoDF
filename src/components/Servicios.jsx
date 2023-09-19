import {  FaLinkedinIn } from "react-icons/fa";
import { BiBookmark } from "react-icons/bi";
import { service } from "../slides";


const Services = () =>{
    return(
        <section id="servicios">
        <div className="container px-5 py-5  mx-auto ">
          <div className="text-center mb-10 mt-20">
            <FaLinkedinIn className="w-10 h-10 inline-block mb-4 text-cyan-400" />
            <h1 className="sm:text-4xl text-3xl font-bold title-font text-red-700 mb-4">
            Nuestras Actividades
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            these are my skills and knowledge acquired since I entered the world of technology.
            </p>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {service.map((skill) => (
              <div key={skill} className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                  <BiBookmark className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                  <span className="title-font font-medium text-white">
                    {skill}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );


};

export default Services;