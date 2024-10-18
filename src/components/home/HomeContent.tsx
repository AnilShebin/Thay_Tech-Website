

const CompanyIntro = () => {
  return (
    <div>
      <section className="bg-white font-body">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="grid grid-cols-2 drop-shadow-lg gap-4 mt-8">
            <img
              className="w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
              alt="office content 1"
            />
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
              alt="office content 2"
            />
          </div>
          <div className="font-light sm:text-lg ">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold ">
              Welcome to Thay Technologies
            </h2>
            <p className="mb-4">
              Our company has been at the forefront of innovation, delivering
              high-quality products and services to our customers worldwide. We
              pride ourselves on our commitment to excellence and our ability to
              adapt to the ever-changing market.
            </p>
            <p>
              With a team of dedicated professionals, we continuously strive to
              exceed expectations and drive success for our clients. Join us on
              our journey as we continue to make a positive impact across
              industries.
            </p>
            <a
              href="/about"
              className="inline-flex items-center text-blue-500 hover:text-blue-700 font-semibold"
            >
              About Us
              <span className="ml-2 arrow">→</span>
            </a>
          </div>
        </div>
      </section>
      <div></div>
    </div>
  );
};

export default CompanyIntro;
