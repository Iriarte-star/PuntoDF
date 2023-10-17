
function Navbar() {
  return (
    <nav className=" bg-teal-950 py-4 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        {/* Espacio para el logo */}
        <div>
          <img
            src="logo.svg"
            alt="Logo"
            className="h-10 w-10"
          />
        </div>
        <ul className="flex space-x-6 mt-4 lg:mt-0">
          <li>
            <a href="#about us" className="text-white font-medium hover:text-blue-300">
              Quiénes somos
            </a>
          </li>
          <li>
            <a href="#servicios" className="text-white font-medium hover:text-blue-300">
              Servicios
            </a>
          </li>
          <li>
            <a href="#" className="text-white font-medium hover:text-blue-300">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
