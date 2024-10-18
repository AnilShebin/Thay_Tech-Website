import React, { useEffect } from "react";

const TechIntegration: React.FC = () => {
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
      <div className="body relative">
        <div className="pt-16 md:pt-5 bg-gradient-to-r from-[#e3e1d9] to-[#9d9e8a]">
          <div className="px-3 m-2 flex flex-wrap flex-col md:flex-row items-center">
            <div className="flex flex-col w-full md:w-1/2 justify-center items-start text-center md:text-left animate-downToUp">
              <h1 className="my-4 text-4xl font-bold leading-tight">
                Tech Integration
              </h1>
              <p className="leading-normal text-xl mb-8">
                Bridging the Gap Between Innovation and Business Efficiency
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
            <h1 className="text-gray-600 pb-3 text-2xl"></h1>

            <h3 className="text-gray-600 pb-3 text-xl">
              <b>The Importance of Tech Integration</b>
            </h3>
            <p className="text-l text-justify font-weight: 500  whitespace-normal">
              In a rapidly changing market, the ability to quickly adapt to new
              technologies is critical. Businesses that fail to integrate new
              technologies risk falling behind competitors who leverage these
              advancements to reduce costs, increase productivity, and enhance
              customer experiences. Tech integration not only enhances
              operational efficiency but also provides the flexibility to
              innovate and scale in response to market demands.
            </p>
          </div>
          <div className="img p-10">
            <img src="/IT_Consulting/tech_integeration/tech1.jpg" />
          </div>
        </div>
        <div className="reverse-content">
          <div className="content-box flex fade-in-section">
            <div className="img p-10">
              <img src="/IT_Consulting/tech_integeration/tech2.jpg" />
            </div>
            <div className="content p-10">
              <h3 className="text-gray-600 pb-3 text-xl">
                <b>Benefits of Tech Integration</b>
              </h3>
              <p className="text-l text-justify font-weight: 500  whitespace-normal">
                <b>Enhanced Operational Efficiency:</b>
                By automating routine tasks and optimizing workflows, tech
                integration can significantly boost your operational efficiency,
                freeing up valuable resources for more strategic initiatives.{" "}
                <br />
                <b>Cost Reduction:</b> Integrating advanced technologies can
                help identify and eliminate inefficiencies, leading to
                significant cost savings over time.
                <br /> <b>Improved Decision-Making:</b>With integrated data
                analytics and reporting tools, you gain real-time insights into
                your operations, enabling more informed decision-making and
                strategic planning. <br />
                <b>Increased Agility:</b>Tech integration allows your business
                to adapt quickly to changing market conditions, giving you a
                competitive edge in a dynamic business environment. <br />
                <b>Future-Proofing Your Business:</b>As technology continues to
                evolve, our integration services ensure that your business
                remains agile and ready to adopt new innovations, keeping you
                ahead of the curve.
              </p>
            </div>
          </div>
        </div>
        <div className="content-box flex fade-in-section">
          <div className="content p-10">
            <h1 className="text-gray-600 pb-3 text-2xl">
              <b>Why Choose Thay Technologies for Tech Integration?s</b>
            </h1>
            <p className="text-l text-justify whitespace-normal">
              At Thay Technologies, we bring a wealth of experience and industry
              expertise to every tech integration project. Our commitment to
              innovation, combined with our deep understanding of business
              processes, allows us to deliver solutions that not only meet your
              current needs but also prepare you for future growth. Whether
              you’re looking to integrate new software, automate workflows, or
              enhance your data management capabilities, we’re here to help you
              navigate the complexities of tech integration with confidence.
            </p>

            <br />
          </div>
          <div className="img p-10">
            <img src="/IT_Consulting/tech_integeration/tech3.jpg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TechIntegration;
