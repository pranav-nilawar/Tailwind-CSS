import { FaRegBuilding } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { IoIosHome } from "react-icons/io";
import { FaTruckPickup } from "react-icons/fa6";
import { IoIosBrush } from "react-icons/io";
import { FaFilter } from "react-icons/fa6";


const Services = () => {
    const services = [
      {
        title: "Building Materials",
        description:
          "United BuildPro is a full-scale e-commerce platform that redefines the way to access top-quality building supplies from the comfort of your home.",
        icon: <FaRegBuilding/>,
      },
      {
        title: "Joint Ventures",
        description:
          "United BuildPro Pvt. Ltd specializes in fostering successful partnerships through joint development ventures.",
        icon: <IoSettings/>,
      },
      {
        title: "RERA Consultants",
        description:
          "Navigating the complexities of real estate transactions is easier with United BuildPro’s expert consultants by your side.",
        icon: <FaFilter/>,
      },
      {
        title: "2D & 3D Consultant",
        description:
          "Designing a building starts with a vision, and United BuildPro helps you visualize that vision with precision.",
        icon: <IoIosBrush/>,
      },
      {
        title: "Construction & Interior",
        description:
          "Your dream space deserves the best materials and finishes. United BuildPro provides it all.",
        icon: <IoIosHome/>,
      },
      {
        title: "Land Development",
        description:
          "United BuildPro Pvt Ltd will transform undeveloped land into thriving spaces through our comprehensive land development services.",
        icon: <FaTruckPickup/>,
      },
    ];
  
    return (
      <section id="services" className="bg-white py-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-blue-900 mb-12">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg shadow-lg transition-all ${
                  index === 1 ? "bg-orange-500 text-white" : "bg-white"
                }`}
              >
                <div
                  className={`text-5xl mb-4 ${
                    index === 1 ? "text-white" : "text-orange-500"
                  }`}
                >
                  {service.icon}
                </div>
                <h3
                  className={`text-xl font-bold mb-2 ${
                    index === 1 ? "text-white" : "text-blue-900"
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`mb-4 ${
                    index === 1 ? "text-white" : "text-gray-600"
                  }`}
                >
                  {service.description}
                </p>
                <a
                  href="#"
                  className={`font-semibold ${
                    index === 1 ? "text-white" : "text-blue-900"
                  }`}
                >
                  Read More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;
  