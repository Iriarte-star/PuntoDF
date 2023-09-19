
import Caorusel from './Carousel';
import Services from './Servicios';

 const Header = () => {
  

  return (
    <section className='grid grid-cols-2 items-center gap-20'>
     <div className='p-10'>
    <Services/>
    </div>
    <Caorusel/>
   
    </section>
  );
}

export default Header;