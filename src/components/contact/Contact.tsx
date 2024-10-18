import React, { useEffect, useRef, useState } from "react";
import HeaderService from "../service/service_home/HeaderService";
import axios from "axios";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    email: "",
    phone: "",
    lastname: "",
    message: "",
  });
  const [response, setResponse] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn");
            observer.unobserve(entry.target); // Stop observing after fading in
          }
        });
      },
      { threshold: 0.3 }
    );

    sectionRefs.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("firstname", formData.firstname);
    formDataToSend.append("email", formData.email);  // Correct email processing
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("lastname", formData.lastname);
    formDataToSend.append("message", formData.message);
    console.log([...formDataToSend]); // Log FormData

    try {
      await axios.post("http://localhost:5000/contact", formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setResponse("Your application has been submitted successfully!");
      setError(null);
    } catch (error) {
      setResponse(null);
      setError("Error sending email. Please try again.");
    }
  };
  

  return (
    <div>
      {/* Header Service */}
      <HeaderService name="Contact Us" />

      {/* Title Section */}
      <div className="container mx-auto py-5 font-body">
        <div
          className="section-title text-center position-relative pb-3 mb-5 mx-auto"
          style={{ maxWidth: "600px" }}
        >
          <h1 className="font-black text-center">
            If You Have Any Query, Feel Free To Contact Us
          </h1>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="animate-fadeInLeft">
            <div className="bg-white shadow-2xl p-6 rounded-lg mb-6">
              <h4 className="text-blue-600 text-xl mb-4">Get in Touch</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Contact details */}
                <div className="flex items-start space-x-4">
                  <i className="fas fa-map-marker-alt text-blue-600 text-2xl"></i>
                  <div>
                    <h4 className="text-lg font-semibold">Address</h4>
                    <p className="text-gray-700">
                      Plot 897, Door No 9, 10th Cross,
                      <br /> H Block Anna Nagar West,
                      <br /> Chennai - 600040
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <i className="fas fa-envelope text-blue-600 text-2xl"></i>
                  <div>
                    <h4 className="text-lg font-semibold">Mail Us</h4>
                    <p className="text-gray-700">info@thaytech.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <i className="fa fa-phone-alt text-blue-600 text-2xl"></i>
                  <div>
                    <h4 className="text-lg font-semibold">Telephone</h4>
                    <p className="text-gray-700">+919840384140</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <i className="fab fa-firefox-browser text-blue-600 text-2xl"></i>
                  <div>
                    <h4 className="text-lg font-semibold">Website</h4>
                    <p className="text-gray-700">+91 6380454663</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative pt-[56.25%] w-full mb-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.1828668996204!2d80.19901517480832!3d13.087594212325145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5263e2537f09e9%3A0xd11f38bf12af6d9b!2sVaagai%20Spaces!5e0!3m2!1sen!2sin!4v1725272164542!5m2!1sen!2sin"
                style={{
                  border: 0,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  borderRadius: "10px",
                }}
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div className="bg-white shadow-2xl p-6 rounded-lg animate-fadeInRight">
            <h4 className="text-blue-600 text-xl mb-4">Send Your Message</h4>
            <p className="text-gray-700 mb-4">
            We'd love to hear from you.

Please don't hesitate to get in touch
            </p>
            <form className="bg-white p-4" onSubmit={handleSubmit}>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="w-full">
                  <label
                    htmlFor="firstname"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    placeholder="FirstName"
                    value={formData.firstname}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="lastname"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>
                  <input
                    type="lastname"
                    id="lastname"
                    name="lastname"  // Correct the email field name here
                    placeholder="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  />
                </div>
              </div>
              <div className="w-full mt-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                ></textarea>
              </div>
              <div className="flex justify-center mt-6">
                <button
                  type="submit"
                  className="px-4 py-2 font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-500"
                >
                  Send Message
                </button>
              </div>
            </form>

            {response && (
              <div className="mt-4 text-green-600 font-bold text-center">
                {response}
              </div>
            )}
            {error && (
              <div className="mt-4 text-red-600 font-bold text-center">
                {error}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
