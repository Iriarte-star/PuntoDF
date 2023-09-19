import CarouselCards from "./CarouselCards";
const BusinessCard = () => {
  return (
    <section id="About" className="grid grid-cols-2  items-center gap-10" >
                <div >
                    <CarouselCards/>
                </div>
                <div className="flex flex-col  ">
                    <h1 className="text-3xl font-bold text-slate-950">About Us.</h1>
                    <h2 className="text-xl text-yellow-400">Id por todo el mundo y haced disipulos</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum perspiciatis quidem,
                        dolore officiis error natus voluptatum. Laudantium porro dolor facilis obcaecati, enim, voluptatem vitae eveniet molestias sunt aut, cumque laborum.</p>
                </div>
    </section>
  );
};

export default BusinessCard;
