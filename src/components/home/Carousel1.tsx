import React, { useState, useEffect, useRef } from "react";

const Carousel1: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animateDirection, setAnimateDirection] = useState("default");
  const isFirstRender = useRef(true);
  const slides = [
    { id: 1, src: "home-page/img1.jpg", alt: "Slide 1", heading: "Welcome to Our Website", subContent: "Discover amazing features and content", link: "/discover" },
    { id: 2, src: "home-page/img2.jpg", alt: "Slide 2", heading: "Explore Our Services", subContent: "We offer a wide range of solutions", link: "/services" },
    { id: 3, src: "home-page/img3.jpg", alt: "Slide 3", heading: "Join Us Today", subContent: "Be part of an exciting community", link: "/join" },
    { id: 4, src: "home-page/img4.jpg", alt: "Slide 4", heading: "Innovative Solutions", subContent: "Tailored solutions for your business", link: "/solutions" },
    { id: 5, src: "home-page/img5.jpg", alt: "Slide 5", heading: "Get Started Now", subContent: "Take your business to the next level", link: "/start" },
  ];

/*  "home-page/img1_1_11zon.jpg",
"home-page/img2_2_11zon.jpg",
"home-page/img3_3_11zon.jpg",
"home-page/img4_4_11zon.jpg",
"home-page/img5_5_11zon.jpg",
 */
  const autoScroll = true;
  const intervalTime = 3000;

  useEffect(() => {
    let slideInterval: number;

    if (autoScroll && !isFirstRender.current) {
      const startAutoScroll = () => {
        slideInterval = window.setInterval(() => {
          setAnimateDirection("default");
          setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, intervalTime);
      };

      startAutoScroll();

      return () => {
        clearInterval(slideInterval);
      };
    }

    isFirstRender.current = false;
  }, [currentIndex, autoScroll, slides.length]);

  const goToSlide = (index: number) => {
    const direction = index > currentIndex ? "right-to-left" : "left-to-right";
    setAnimateDirection(direction);
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setAnimateDirection("right-to-left");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setAnimateDirection("left-to-right");
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  return (
    <div className="carousel relative w-full h-screen overflow-hidden">
      <div className="carousel-slides flex transition-transform ease-in-out duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide) => (
          <div key={slide.id} className="slide relative w-full h-full flex items-center justify-center">
            <img src={slide.src} alt={slide.alt} className="w-full h-full object-cover"/>
            <div className="overlay"></div>
            <div className={`absolute text-white px-4 carousel-text left-0 p-10 ${animateDirection === "default" ? "animate-right-to-left" : animateDirection === "left-to-right" ? "animate-left-to-right" : "animate-right-to-left"}`}>
              <h2 className="carousel-heading text-4xl ml-5 font-bold mb-2">{slide.heading}</h2>
              <p className="carousel-subtext ml-5 text-lg mb-4">{slide.subContent}</p>
              <a href={slide.link} className="read-more-button flex items-center text-lg ml-5 hover:underline">
                Read More
                <span className="ml-2 arrow">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="carousel-arrow-container left-4 bottom-4">
        <button className="carousel-prev bg-gray-700 text-white p-2 rounded-full" onClick={prevSlide}>
          <div className="arrow-circle">
            <span>&#10094;</span>
          </div>
        </button>
      </div>

      <div className="carousel-arrow-container right-4 bottom-4">
        <button className="carousel-next bg-gray-700 text-white p-2 rounded-full" onClick={nextSlide}>
          <div className="arrow-circle">
            <span>&#10095;</span>
          </div>
        </button>
      </div>

      <div className="carousel-indicators absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button key={index} className={`dot rounded-full transition-all duration-300 ease-in-out ${currentIndex === index ? "dot-active" : "dot-inactive"}`} onClick={() => goToSlide(index)} />
        ))}
      </div>
    </div>
  );
};

export default Carousel1;
