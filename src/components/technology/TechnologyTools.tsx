import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';

const TechnologyTools: React.FC = () => {
  const [activeSection, setActiveSection] = useState('frontend');

  // Image URLs for different sections
  const frontendImageUrls = [
    "angular-img.svg",
    "bootstrap-img.svg",
    "vite-img.svg",
    "css-img.svg",
    "figma-img.svg",
    "nextjs.svg"
  ];

  const backendImageUrls = [
    "django-img.svg",
    "docker-img.svg",
    "java-img.svg",
    "kotlin-img.svg",
    "python-img.svg",
    "ruby-img.svg"
  ];

  const toolsImageUrls = [
    "apache-img.svg",
    "devops-img.svg",
    "git-bash-img.svg",
    "googlecloud-img.svg",
    "graphql-img.svg",
    "mongodb-img.svg",
    "mysql-img.svg"
  ];

  const frontendFilepath = '/technology_images/frontend/';
  const backendFilepath = '/technology_images/backend/';
  const toolsFilepath = '/technology_images/platform/';

  const handleSectionClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <section className="py-2 py-md-5">
      <div className="container border border-gray-300 shadow-md rounded-lg">
        <div className="row justify-center">
          {/* Navigation with separators */}
          <div className="flex items-center space-x-8 p-5 text-center justify-center border border-gray-300 shadow-md rounded-lg">
            <button
              className={`text-3xl font-bold p-5 ${
                activeSection === 'frontend' ? 'text-blue-800' : 'text-black'
              }`}
              onClick={() => handleSectionClick('frontend')}
            >
              FrontEnd
            </button>
            {/* Separator */}
            <span className="text-gray-400 text-2xl">|</span>
            <button
              className={`text-3xl font-bold p-5 ${
                activeSection === 'backend' ? 'text-blue-800' : 'text-black'
              }`}
              onClick={() => handleSectionClick('backend')}
            >
              BackEnd
            </button>
            {/* Separator */}
            <span className="text-gray-400 text-2xl">|</span>
            <button
              className={`text-3xl font-bold p-5 ${
                activeSection === 'tools' ? 'text-blue-800' : 'text-black'
              }`}
              onClick={() => handleSectionClick('tools')}
            >
              Tools
            </button>
          </div>

          {/* Conditionally Render Sections */}
          <div className="w-full transition-opacity duration-500 ease-in-out">
            {activeSection === 'frontend' && (
              <div className={`mx-32 ${activeSection === 'frontend' ? 'opacity-100' : 'opacity-0'}`}>
                <h2 className="text-3xl font-bold text-center p-10 text-blue-800">
                  FrontEnd Technologies
                </h2>
                <p className="mx-auto text-center">
                  Frontend technologies are the key to creating engaging, user-friendly websites and applications.
                  They are responsible for everything a user sees and interacts with on the screen.
                  The combination of HTML, CSS, and JavaScript forms the foundation of frontend development,
                  while modern frameworks like React, Angular, and Vue.js provide enhanced capabilities for building dynamic and interactive user interfaces.
                </p>
                <div className="py-20">
                  <Marquee direction="right" speed={100}>
                    <div className="flex flex-row overflow-hidden space">
                      {frontendImageUrls.map((url, index) => (
                        <img
                          key={index}
                          src={`${frontendFilepath}${url}`}
                          alt={`Logo ${index + 1}`}
                          className="w-20 h-20 mr-40"
                        />
                      ))}
                    </div>
                  </Marquee>
                </div>
              </div>
            )}

            {activeSection === 'backend' && (
              <div className={`mx-32 ${activeSection === 'backend' ? 'opacity-100' : 'opacity-0'}`}>
                <h2 className="text-3xl font-bold text-center p-10 text-blue-800">
                  BackEnd Technologies
                </h2>
                <p className="mx-auto text-center">
                  Backend technologies form the backbone of modern digital infrastructure, providing the essential support needed to power applications and services across industries.
                  From API-driven architectures to real-time data processing, the backend remains a critical component of the digital landscape and scalability for every application.
                </p>
                <div className="py-20 mt-8">
                  <Marquee direction="right" speed={100}>
                    <div className="flex flex-row overflow-hidden space">
                      {backendImageUrls.map((url, index) => (
                        <img
                          key={index}
                          src={`${backendFilepath}${url}`}
                          alt={`Backend Logo ${index + 1}`}
                          className="w-20 h-20 mr-40"
                        />
                      ))}
                    </div>
                  </Marquee>
                </div>
              </div>
            )}

            {activeSection === 'tools' && (
              <div className={`mx-32 ${activeSection === 'tools' ? 'opacity-100' : 'opacity-0'}`}>
                <h2 className="text-3xl font-bold text-center p-10 text-blue-800">
                  Tools
                </h2>
                <p className="mx-auto text-center">
                  IT tools are designed to streamline tasks, automate repetitive processes, and increase overall productivity by reducing manual effort.
                  From project management and communication platforms to collaboration tools, modern IT tools prioritize user experience with intuitive interfaces.
                </p>
                <div className="py-20 mt-8">
                  <Marquee direction="right" speed={100}>
                    <div className="flex flex-row overflow-hidden space">
                      {toolsImageUrls.map((url, index) => (
                        <img
                          key={index}
                          src={`${toolsFilepath}${url}`}
                          alt={`Tool Logo ${index + 1}`}
                          className="w-20 h-20 mr-40"
                        />
                      ))}
                    </div>
                  </Marquee>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyTools;
