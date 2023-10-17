import './App.css'
import Portada from "./components/portada"
import Finanzas from './components/Finanzas';
import Services from './components/Servicios';
import Cards from './components/Cards';
import TestimonialCard from './components/TestimonialCard';
import Footer from './components/Footer';

function App() {
  
  return (
    < >
      <Portada/>
        <div  id='about us' className="lg:flex   h-screen py-4 px-4 bg-teal-950">
          <div className='  w-full lg:w-1/2 flex justify-center items-center flex-col mr-4'>
            <h3 className="text-3xl sm:text-4xl font-bold text-red-600 mb-4">
              Misioneros
            </h3>
            <p className='text-white pb-6'> Id por todo el mundo y predicad el evangelio</p>
            <div className="grid grid-cols-1 gap-4  md:mr-32 md:ml-32 ml">
              <Cards/>    
            </div>
          </div>
          <div className=' hidden lg:block w-1/2'>
            <div className=' flex flex-col  pt-48 pb-48 pl-20 pr-20 gap-8'>
              <div className=''>
                <h5 className='text-white font-light'>creemos en:</h5>
              </div>
              <div  className=' text-white '>
               <h2 className=' text-6xl font-serif'>Jesuscristo El Autor</h2>
               <h3 className=' text-6xl font-serif'>Y Consumador.</h3>
               <h4 className='text-6xl font-serif'> De La Fe</h4>
              </div>
              <div >
                <p className='text-white font-light'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, dolor. Eveniet, provident explicabo soluta laudantium impedit reiciendis magnam nemo odit repellat dolorem est cupiditate eius.</p>
                <button className=' text-white  bg-slate-900 p-2  rounded-md mt-8'>Doctrina</button>
              </div>
            </div>
          </div>
        </div>
      <TestimonialCard/>  
      <Services/>
      <Finanzas/>
      <Footer/>
    </>
  )
}

export default App;
