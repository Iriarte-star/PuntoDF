import { GrLinkNext } from "react-icons/gr";

const TestimonialCard = () => {
    // Supongamos que tienes una matriz de testimonios
    const testimonials = [
        {
            name: "Tania Andrew",
            role: "Frontend Lead @ Google",
            text: "I found a solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And it's really affordable, very humble guys !!!",
            image: "sara.jpg",
        },
        {
        name: "Tania Andrew",
        role: "Frontend Lead @ Google",
        text: "I found a solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And it's really affordable, very humble guys !!!",
        image: "samuel.jpg",
    },
];
const destacados = [

    {
        name: "Tania Andrew",
        role: "Frontend Lead @ Google",
        text: "I found a solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And it's really affordable, very humble guys !!!",
        image: "pedro.jpg",
    },

     
    ];
    // Agrega más testimonios aquí

  return (
    <div className="flex flex-col md:flex-row  lg:flex  p-6  ">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="max-w-[26rem] p-2 m-2 bg-white rounded-xl shadow-lg flex-shrink-0 w-full  lg:w-1/2 "
        >
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="h-24 w-24 rounded-full object-cover object-center mx-auto mb-2"
          />
          <h5 className="text-xl font-semibold text-blue-gray-900 text-center">{testimonial.name}</h5>
          <p className="text-sm font-light text-blue-gray-900 text-center">{testimonial.role}</p>
          <p className="text-sm font-light text-blue-gray-900 mt-2">{testimonial.text}</p>
        </div>
      ))}
        {destacados.map((destacado, index) => (
        <div
          key={index}
          className="max-w-[26rem] p-2 m-2 bg-white rounded-xl shadow-lg flex-shrink-0 hidden lg:block w-1/2"
        >
          <img
            src={destacado.image}
            alt={destacado.name}
            className="h-24 w-24 rounded-full object-cover object-center mx-auto mb-2"
          />
          <h5 className="text-xl font-semibold text-blue-gray-900 text-center">{destacado.name}</h5>
          <p className="text-sm font-light text-blue-gray-900 text-center">{destacado.role}</p>
          <p className="text-sm font-light text-blue-gray-900 mt-2">{destacado.text}</p>
        </div>
      ))}
      <div className=" mt-32 items-center ml-24 flex-shrink-0 hidden lg:block ">
        <GrLinkNext className=" w-6 h-6"/>
      </div>
        </div>    

  );
};

export default TestimonialCard;
