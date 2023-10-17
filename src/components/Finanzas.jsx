
  import { BiSolidShoppingBagAlt } from "react-icons/bi";
  import { RiMoneyDollarCircleFill } from "react-icons/ri";
  import { AiOutlineForm } from "react-icons/ai";

  
  const Finanzas = () => {
    return (
      <section className="bg-gray-100 py-16 ">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="flex flex-col items-center">
              <img src="qr.png" alt="" className="w-40 h-40 rounded-lg shadow-lg" />
              <div className="mt-4 text-center">
                <div className="flex   justify-center items-center gap-2">
                  <h1 className="text-2xl font-bold text-gray-800">Ofrendar</h1>
                  <button   className="flex text  text-green rounded-md">
                    <RiMoneyDollarCircleFill className="w-6 h-6 text-lime-500" />
                  </button>
                </div>
                  <p className="text-black font-light text-justify">
                  Si no puede unirse a nosotros en persona, sea parte de nuestras
                  misiones haciendo una ofrenda mediante nuestro código QR.
                  </p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <img src="store.png" alt="" className="w-40 h-40 rounded-lg shadow-lg" />
              <div className="mt-4 text-center ">
                <div className=" flex   justify-center items-center gap-2 ">
                  <h1 className="text-2xl   font-semibold  text-gray-800">Compra</h1>
                  <button   className="flex text  text-green rounded-md">
                    <BiSolidShoppingBagAlt className="w-6 h-6 text-lime-500" />
                  </button>

                </div>
                <p className="text-black font-light text-justify">
                  Si no puede unirse a nosotros en persona, sea parte de nuestras
                  misiones haciendo una compra en nuestra tienda online.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <img src="viajero.png" alt="" className="w-40 h-40 rounded-lg shadow-lg" />
              <div className="mt-4 text-center ">
                <div className=" flex   justify-center items-center gap-2 ">
                  <h1 className="text-2xl   font-semibold  text-gray-800">Unete</h1>
                  <button   className="flex text  text-green rounded-md">
                    <AiOutlineForm className="w-6 h-6 text-lime-500" />
                  </button>

                </div>
                <p className="text-black font-light text-justify ">
                 Unase a la Gran aventura , sea parte de nuestras
                  misiones llenando el formulario del misionero.
                </p>
              </div>
            </div>
            <div className="flex flex-col">
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Finanzas;
  
