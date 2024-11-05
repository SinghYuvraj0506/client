import { useState, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { HeroSectionData } from '../../../lib/constants';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % HeroSectionData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [HeroSectionData.length]);

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? HeroSectionData.length - 1 : prevSlide - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % HeroSectionData.length);
  };

  return (
    <div className={`py-8 ${HeroSectionData[currentSlide].bgColor} transition-colors duration-500 flex items-center justify-center h-[50vh]`}>
        {/* Left Arrow */}
        <button onClick={goToPreviousSlide} className="text-3xl font-bold p-4 absolute left-0">
        <IoIosArrowBack />
        </button>

        <div className="flex flex-col lg:flex-row items-center lg:space-x-8">
          <img
            src={HeroSectionData[currentSlide].img}
            alt="Featured Product"
            className="rounded-lg w-full lg:w-[400px] mb-4 lg:mb-0 object-cover"
          />
          <div className="lg:w-1/2 text-center lg:text-left space-y-4">
            <h2 className="text-3xl font-bold">{HeroSectionData[currentSlide].title}</h2>
            <p className="text-gray-700">{HeroSectionData[currentSlide].description}</p>
            <button className="bg-blue-800 text-white px-6 py-3 rounded-lg" onClick={()=>{
              navigate(HeroSectionData[currentSlide].link)
            }}>
              Shop Now
            </button>
          </div>
        </div>

        {/* Right Arrow */}
        <button onClick={goToNextSlide} className="text-3xl font-bold p-4 absolute right-0">
        <IoIosArrowForward />
        </button>
    </div>
  );
};

export default HeroSection;
