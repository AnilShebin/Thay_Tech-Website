import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// TypeScript interface for the Place object
interface Place {
  name: string;
  image: string;
  description: string;
  link: string; // Make sure this is a string
}

  const places: Place[] = [
    {
      name: 'IT Consulting',
      image: 'img3.jpg',
      description: '• A historic fortification stretching over 13,000 miles.<br />• Built to protect against invasions.<br />• Extends across northern China.',
      link: '/services/it-consulting',
    },
    {
      name: 'Cloud Support',
      image: 'img9.jpg',
      description: '• A vibrant waterfront with iconic skyline.<br />• Located in Singapore.<br />• Features the Marina Bay Sands and Gardens by the Bay.',
      link: '/services/cloud-support',
    },
    {
      name: 'Development',
      image: 'img0.jpg',
      description: '• Tailored software solutions.<br />• Agile project management.<br />• Innovation and quality focus.',
      link: '/services/development',
    },
    {
      name: 'Outsourcing',
      image: 'img7.avif',
      description: '• A symbol of freedom and democracy.<br />• Gift from France to the USA.<br />• Located on Liberty Island in New York Harbor.',
      link: '/services/outsourcing',
    },
    {
      name: 'Software Training',
      image: 'img10.jpg',
      description: '• An iconic and sacred mountain in Japan.<br />• The highest peak in Japan.<br />• A popular site for pilgrimage and climbing.',
      link: '/services/software-training',
    },
  ];
  

// Define the props for ImageCard
interface ImageCardProps {
  place: Place;
  onClick?: () => void; // Optional onClick for mobile
  isActive: boolean;
  onMouseEnter?: () => void; // Optional prop for desktop hover effect
  onMouseLeave?: () => void; // Optional prop to handle mouse leave
}

const ImageCard: React.FC<ImageCardProps> = ({
  place,
  onClick,
  isActive,
  onMouseEnter,
  onMouseLeave,
}) => (
  <Link
    to={place.link} // Add the link here
    className={`relative flex-none sm:flex-1 cursor-pointer overflow-hidden rounded-lg transition-transform duration-300 w-full sm:w-[calc(33.333%_-_1rem)] md:w-[calc(20%_-_1rem)] lg:w-[calc(16%_-_1rem)] h-[180px] sm:h-[250px] md:h-[300px] lg:h-[450px] xl:h-[500px] group
      ${isActive ? 'bg-black bg-opacity-50' : ''}
      sm:hover:flex-1 sm:hover:scale-105`}
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <img
      src={place.image}
      alt={place.name}
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
    />
    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-gray-900 to-transparent text-white p-4 flex items-center justify-center rounded-t-lg transition-all duration-300 group-hover:bg-transparent group-hover:text-white">
      <span className="text-lg md:text-2xl font-semibold tracking-wide uppercase shadow-md font-poppins">
        {place.name}
      </span>
    </div>
    {isActive && (
      <div className="absolute inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50">
        <div
          className="text-white text-sm md:text-lg p-4 rounded-lg text-center border border-white border-opacity-20 bg-opacity-70"
          dangerouslySetInnerHTML={{ __html: place.description }}
        />
      </div>
    )}
  </Link>
);
// BackgroundImage component for the background image
const BackgroundImage: React.FC<{ image: string }> = ({ image }) => (
  <div
    className="absolute inset-0 bg-cover bg-center filter brightness-50 z-0 transition-all duration-500"
    style={{ backgroundImage: `url('${image}')` }}
  />
);

// AccordionImage component that uses the ImageCard and BackgroundImage components
const AccordionImage: React.FC = () => {
  const [activeImage, setActiveImage] = useState<string>(places[0].image);
  const [activePlace, setActivePlace] = useState<string | null>(null);
  const [hoveredPlace, setHoveredPlace] = useState<string | null>(null); // State for managing hover

  const isMobile = window.innerWidth <= 1024;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setActivePlace(null); // Reset activePlace on mobile resize
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
 
  const handleImageClick = (place: Place) => {
    if (isMobile) {
      setActiveImage(place.image);
      setActivePlace(activePlace === place.name ? null : place.name);
    }
    window.location.href = place.link; // Navigate to the route based on the link property
  };

  const handleMouseEnter = (place: Place) => {
    if (!isMobile) {
      setHoveredPlace(place.name);
      setActiveImage(place.image);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setHoveredPlace(null); // Clear hovered place on mouse leave
    }
  };

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
      {/* Add heading and paragraph section */}
      <div className="relative z-10 w-full text-white text-center mt-14 px-4">
        <h1 className="text-3xl font-bold">Our Service</h1>
        <div
          className="section-title text-center position-relative pb-3 mb-5 mx-auto"
          style={{ maxWidth: "600px" }}
        ></div>
        <h2 className="text-5xl font-bold mt-4">What We Can Do For You</h2>
        <p className="text-xl mt-5 mb-10 mx-auto text-justify max-w-5xl">
          Our company has been at the forefront of innovation, delivering highquality products and services to our customers worldwide. We pride ourselves on our commitment to excellence and our ability to adapt to the ever-changing market.
          Our company has been at the forefront of innovation, delivering high-quality products services customers
        </p>
      </div>

      <BackgroundImage image={activeImage} />

      <main className="relative z-10 w-full h-auto flex flex-col sm:flex-row lg:flex-wrap gap-4 p-4 overflow-hidden">
        {places.map((place) => (
          <ImageCard
            key={place.image}
            place={place}
            onClick={() => handleImageClick(place)}
            isActive={activePlace === place.name || hoveredPlace === place.name}
            onMouseEnter={() => handleMouseEnter(place)}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </main>
    </div>
  );
};

export default AccordionImage;
