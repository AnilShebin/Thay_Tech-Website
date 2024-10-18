import React, { useEffect } from "react";


const ProductDevelopment: React.FC = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(".fade-in-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <div className="body  relative">
      <div className="pt-16 md:pt-5 bg-gradient-to-r from-[#e3e1d9] to-[#9d9e8a]">
          <div className=" px-3 m-2 flex flex-wrap flex-col md:flex-row items-center">
            <div className="flex flex-col w-full md:w-1/2 justify-center items-start text-center md:text-left animate-downToUp">
              <h1 className="my-4 text-4xl font-bold leading-tight">
              Product Development

              </h1>
              <p className="leading-normal text-xl mb-8">
              Let decide on what you want. We will deliver what you need.
              </p>
            </div>
            <div className="w-full md:w-1/2 py-6 text-center animate-fadeInRight">
              <img
                className="w-full md:w-4/5 z-50"
                src="/outsourcing/staff_outsourcing/Staff-Outsourcing.svg"
                alt="Hero"
              />
            </div>
          </div>
          <div className="relative -mt-12 lg:-mt-24">
            <svg
              viewBox="0 0 1428 174"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                  transform="translate(-2.000000, 44.000000)"
                  fill="#FFFFFF"
                  fillRule="nonzero"
                >
                  <path
                    d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                    opacity="0.1"
                  ></path>
                  <path
                    d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                    opacity="0.1"
                  ></path>
                  <path
                    d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                    opacity="0.2"
                  ></path>
                </g>
                <g
                  transform="translate(-4.000000, 76.000000)"
                  fill="#FFFFFF"
                  fillRule="nonzero"
                >
                  <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div className="content-box flex fade-in-section font-body">
          <div className="content p-10">
            <h1 className="text-gray-600 pb-3 text-2xl">
              <b>Empowering Innovation with Expert Product Development Solutions</b>
            </h1>
            <p className="text-l text-justify font-weight: 500  whitespace-normal">
              At Thay Technologies, product development is more than just a service—it's a journey we undertake with our clients to transform ideas into market-ready products. Our comprehensive
              approach covers every stage of the product development lifecycle, ensuring that your vision is brought to life with precision, creativity, and innovation.
            </p>
            <br />
          </div>
          <div className="img p-10">
            <img src="/development/product_development/prod-img1.jpg" />
          </div>
        </div>
        <div className="reverse-content">
          <div className="content-box flex fade-in-section">
            <div className="img p-10">
              <img src="/development/product_development/prod-img3.jpg" />
            </div>
            <div className="content p-10">
              <h1 className="text-gray-600 pb-3 text-2xl">
                <b>Our Product Development Lifecycle</b>
              </h1>
              <p className="text-l text-justify whitespace-normal">
                <b>Conceptualization: </b> We begin by understanding your ideas, business goals, and market needs. This phase includes brainstorming, idea validation, and initial feasibility analysis.
              </p>
              <br />

              <p className="text-l text-justify font-weight: 500  whitespace-normal">
                <b>Design & Prototyping:</b> Our expert designers and developers create detailed prototypes that reflect your vision. We focus on user experience, functionality, and scalability.
              </p>

              <br />

              <p className="text-l text-justify font-weight: 500  whitespace-normal">
                <b> Development:</b> Using the latest technologies and agile methodologies, we bring your product to life. 

              </p>
              <br />
              <p className="text-l text-justify font-weight: 500  whitespace-normal">
                <b> Testing & Quality Assurance:</b> Rigorous testing is conducted to ensure the product is robust, secure, and performs seamlessly across all platforms and environments.
              </p>
              <br />
             
            </div>
          </div>
        </div>
        <div className="content-box flex fade-in-section">
          <div className="content p-10">
            <h1 className="text-gray-600 pb-3 text-2xl">
              <b>Why Choose Thay Technologies?</b>
            </h1>
            <p className="text-l text-justify whitespace-normal">
              <b>Expertise:</b> Our team consists of seasoned professionals with years of experience across various industries, ensuring that your product is in capable hands.
            </p>
            <br />

            <p className="text-l text-justify font-weight: 500  whitespace-normal">
              <b>Innovation:</b> We are committed to staying ahead of the curve, using the latest tools, technologies, and methodologies to deliver cutting-edge solutions.
            </p>

            <br />

            <p className="text-l text-justify font-weight: 500  whitespace-normal">
              <b> Customization:</b> We understand that every project is unique. Our solutions are tailored to meet your specific needs and objectives, ensuring that the final product is a perfect fit
              for your business.
            </p>
            <br />
            <p className="text-l text-justify font-weight: 500  whitespace-normal">
              <b> Client-Centric Approach:</b> We believe in building long-term partnerships with our clients. Your success is our success, and we work closely with you to ensure your vision is
              realized.
            </p>
            <br />
           
          </div>
          <div className="img p-10">
            <img src="/development/product_development/prod-img4.jpg" />
          </div>
        </div>
        <div className="reverse-content">
          <div className="content-box flex fade-in-section">
            <div className="img p-10">
              <img src="/development/product_development/prod-img2.jpg" />
            </div>
            <div className="content p-10">
              <h2 className="text-gray-600 pb-3 text-2xl">
                <b> Sustainability and Innovation </b>
              </h2>
              <p className="text-l text-justify whitespace-normal">
                At Thay Technologies, we believe in creating products that are not only innovative but also sustainable. Our commitment to eco-friendly development practices ensures that we minimize
                our environmental impact while delivering high-performance solutions. <br />
                <br /> We integrate emerging technologies such as AI, blockchain, and IoT into our product development process, enabling us to create next-generation products that are both
                forward-thinking and responsible.
                <br />
                <br />
                Our approach to sustainability is holistic, considering the entire lifecycle of the product—from design and development to deployment and maintenance. <br />

              </p>
              <br />
            </div>
          </div>
        </div>
        <div className="content-box flex fade-in-section">
          <div className="content p-10">
            <h1 className="text-gray-600 pb-3 text-2xl">
              <b>Our Approach to Product Development</b>
            </h1>
            <p className="text-l text-justify font-weight: 500  whitespace-normal">
              At Thay Technologies, our approach is collaborative and transparent. We believe in working closely with our clients throughout the development process, ensuring that you are involved and
              informed at every stage. <br />
            
            </p>
            <br />
            <h2 className="text-gray-600 pb-3 text-xl">
              <b> Global Reach and Scalability </b>
            </h2>
            <p className="text-l text-justify font-weight: 500  whitespace-normal">
              In today’s interconnected world, your product needs to be ready to scale globally. Thay Technologies has a proven track record of developing solutions that cater to a global audience.{" "}
              <br />
             
            </p>
          </div>
          <div className="img p-10">
            <img src="/development/product_development/prod-img5.jpg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDevelopment;
