import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";
import { useState } from "react";




const Cards= () => {
  

  
  const testimonials = [
    {
      opinion: "I absolutely love this product! It has made my life so I absolutely love this product! It has made my life so I absolutely love this product! It has made my life so  .",
      author: "Jhonny Iriarte",
      avatar: "samuel.jpg",
      company: "Igl. Km-0",
      phone: " +591 74320607"
    },
    {
      opinion: "I absolutely love this product! It has made my life so I absolutely love this product! It has made my life so I absolutely love this product! It has made my life so ",
      author: "Jane Smith",
      avatar: "pedro.jpg",
      company: "XYZ Corporation",
      phone: " +591 74320607"

    },
    {
      opinion: "I absolutely love this product! It has made my life so I absolutely love this product! It has made my life so I absolutely love this product! It has made my life so ",
      author: "Bob Johnson",
      avatar: "sara.jpg",
      company: "123 Tech",
      phone: " +591 74320607"

    },
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };


  

  
  return (
    <>
    
      <div className=" bg-slate-900 shadow-lg rounded-lg  text-center  ">
        <div className="mb-4 p-6  ">
            <div className="grid grid-cols-3  items-center ">
              <div className="col-span-0 ">
                <GrFormPreviousLink   onClick={prevTestimonial} className="  bg-white rounded-full  w-6 h-6  "/>
              </div>
              <div className="flex col-span-1 items-center">
              
                <h2 className="text-white font-bold text-xl ">{testimonials[activeTestimonial].author}</h2>

              </div>
              <div className="flex items-center justify-end col-span-0">
                <GrFormNextLink onClick={nextTestimonial} className="w-6 h-6 bg-white rounded-full" />
              </div>
            </div>
            <p className=" text-warning-50">{testimonials[activeTestimonial].company}</p>
            <img
              src={testimonials[activeTestimonial].avatar}
              alt={testimonials[activeTestimonial].author}
              className="w-40 h-40  md:w-52 md:h-52 mx-auto  rounded-3xl  object-cover mb-2 p-4"
            />
            <button className=" bg-green-400 px-4 rounded-2xl">Mensaje</button>
            <p className=" text-white pt-2">{testimonials[activeTestimonial].phone}</p>
        </div >
        <div className="bg-white p-6 flex  flex-col items-start rounded-tl-none rounded-tr-none rounded-bl-lg rounded-br-lg">
          <p className="text-gray-900 font-semibold  justify-start">SOBRE MI</p>
            <p className="text-gray-700 text-base text-justify">{testimonials[activeTestimonial].opinion}</p>
        </div>
      </div>
    </>
  );
};

export default Cards;

