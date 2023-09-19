const Navbar = ()=>{
    return(
        <section className="flex justify-between p-5 ml-10 mr-10  ">
            <div className="flex gap-2 items-center">
                <img src="/public/logo.svg" alt="" className="w-10 h-10 " />
                <a className="text-white text-xl font-bold">Punto<span className="text-yellow-400">DF</span></a>
            </div>
            <nav>
                <ul className="flex gap-4">
                    <li>
                        <a href="#About" className="text-white text-md">Quienes somos</a>
                    </li>
                    <li>
                        <a href="#servicios" className="text-white text-md">servicios</a>
                    </li>
                    <li>
                        <a href="misioneros" className="text-white text-md">contactos</a>
                    </li>
                </ul>
            </nav>
        </section>
    )
}

export default Navbar;