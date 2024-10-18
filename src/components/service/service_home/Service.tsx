import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faCloud, faLaptopCode, faCogs } from "@fortawesome/free-solid-svg-icons";

import HeaderService from "./HeaderService";

const HomeService: React.FC = () => {
  return (
    <div>
      <HeaderService name="Our Services" />
      {/* Our Services Section */}
      <div className="container mx-auto py-5 font-body">
        <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: "600px" }}>
          <h1 className="font-black text-center">Comprehensive cloud support services to optimize and maintain your business infrastructure.</h1>
        </div>

        <div className="flex flex-wrap justify-center text-center gap-4">
          {/* Service Items */}
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="service-item bg-gray-100 rounded-lg shadow transition-transform transform hover:scale-105">
              <div className="service-img">
                <img src="/service/itsupport/itsupport.jpg" className="img-fluid w-full rounded-t-lg" alt="Service 1" />
              </div>
              <div className="service-content p-4">
                <div className="service-content-inner">
                  <a href="/services/software-training" className="h4 mb-4 flex items-center justify-center text-start">
                    <FontAwesomeIcon icon={faLaptopCode} className="mr-2" />
                    Software Training
                  </a>
                  <div className="service-content-inner">
                    <p className="mb-4">Enhance your team's skills with our tailored software training programs for all proficiency levels.</p>
                    <a className="bg-cyan-400  rounded-full py-2 px-4" href="/services/software-training">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="service-item bg-gray-100 rounded-lg shadow transition-transform transform hover:scale-105">
              <div className="service-img">
                <img src="/service/service1.jpg" className="img-fluid w-full rounded-t-lg" alt="Service 2" />
              </div>
              <div className="service-content p-4">
                <div className="service-content-inner">
                  <a href="/services/cloud-support" className="h4 mb-4 flex items-center justify-center text-start">
                    <FontAwesomeIcon icon={faCloud} className="mr-2" />
                    Cloud Support
                  </a>
                  <p className="mb-4">Reliable cloud migration, management, and 24/7 support to optimize your cloud infrastructure.</p>
                  <a className="bg-cyan-400  rounded-full py-2 px-4" href="/services/cloud-support">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="service-item bg-gray-100 rounded-lg shadow transition-transform transform hover:scale-105">
              <div className="service-img">
                <img src="/service/service2.jpg" className="img-fluid w-full rounded-t-lg" alt="Service 3" />
              </div>
              <div className="service-content p-4">
                <div className="service-content-inner">
                  <a href="/services/it-consulting" className="h4 mb-4 flex items-center justify-center text-start">
                    <FontAwesomeIcon icon={faBook} className="mr-2" />
                    IT Consulting
                  </a>
                  <p className="mb-4">Drive innovation and streamline operations with expert IT consulting</p>
                  <a className="bg-cyan-400  rounded-full py-2 px-4" href="/services/it-consulting">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="service-item bg-gray-100 rounded-lg shadow transition-transform transform hover:scale-105">
              <div className="service-img">
                <img src="/service/service3.jpg" className="img-fluid w-full rounded-t-lg" alt="Service 4" />
              </div>
              <div className="service-content p-4">
                <div className="service-content-inner">
                  <a href="/services/outsourcing" className="h4 mb-4 flex items-center justify-center text-start">
                    <FontAwesomeIcon icon={faCogs} className="mr-2" />
                    Outsourcing
                  </a>
                  <p className="mb-4">Outsource your IT needs to us and focus on your core business while we handle the rest.</p>
                  <a className="bg-cyan-400 rounded-full py-2 px-4" href="/services/outsourcing">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeService;
