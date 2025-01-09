import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full bg-white py-4 shadow z-50">
    <header className="bg-black text-white py-3 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-sm flex">
          <p className="inline-block mr-6 flex">
            <FaPhoneAlt className="mr-2" /> 9731250900, 9731250609
          </p>
          <p className="inline-block mr-6 flex">
            <MdEmail className="mr-2" /> unitedbuildpro@gmail.com
          </p>
          <p className="inline-block flex">
            <CiLocationOn className="mr-2" /> #53/A E Block, Bangalore
          </p>
        </div>
        <div className="flex space-x-4 text-lg">
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
        </div>
      </div>
    </header>

    <div className="container mx-auto flex justify-between items-center">
      <img src="https://tse2.mm.bing.net/th?id=OIP.8VAx_URcmOQKaGfFbwz2UAAAAA&pid=Api&P=0&h=180" alt="Logo" className="w-24" />
      <ul className="flex space-x-6">
        <li><a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('home')?.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }}
          className="text-gray-700 hover:text-blue-500"
        >
          Home
        </a></li>
        <li><a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('about')?.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }}
          className="text-gray-700 hover:text-blue-500"
        >
          About us
        </a></li>
        <li><a
          href="#services"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('services')?.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }}
          className="text-gray-700 hover:text-blue-500"
        >
          Services
        </a>
        </li>
        <li><a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('contact')?.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }}
          className="text-gray-700 hover:text-blue-500"
        >
          Contact us
        </a></li>
      </ul>
    </div>
  </nav>
);
export default Navbar;
