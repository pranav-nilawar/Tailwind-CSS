const Footer = () => {
    return (
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            <img src="https://tse2.mm.bing.net/th?id=OIP.8VAx_URcmOQKaGfFbwz2UAAAAA&pid=Api&P=0&h=180" alt="Logo" className="mb-4 w-12" />
            <p>
              Corporate clients and leisure travelers have been relying on Groundlink for dependable service.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="p-2 bg-white text-blue-900 rounded-full">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="p-2 bg-orange-500 text-white rounded-full">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="p-2 bg-white text-blue-900 rounded-full">
                <i className="fab fa-pinterest"></i>
              </a>
            </div>
          </div>
  
          {/* Useful Links */}
          <div>
            <h4 className="font-bold mb-4">Useful Links</h4>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  About us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
  
          {/* Products */}
          <div>
            <h4 className="font-bold mb-4">Products</h4>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Listings
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Details
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Enquiry Form
                </a>
              </li>
            </ul>
          </div>
  
          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul>
              <li className="mb-2 flex items-center">
                <i className="fas fa-envelope mr-2"></i> unitedbuildpro@gmail.com
              </li>
              <li className="mb-2 flex items-center">
                <i className="fas fa-phone-alt mr-2"></i> +91 9731125090, 9731125090
              </li>
              <li className="flex items-center">
                <i className="fas fa-map-marker-alt mr-2"></i> #63/A, E Block, 2nd Stage, Dr. Rajkumar Road, Subramanya Nagar, Bangalore - 560010
              </li>
            </ul>
          </div>
        </div>
  
        {/* Bottom Footer */}
        <div className="border-t border-blue-800 mt-8 pt-4 text-center">
          <p>© United BuildPro 2021. All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="hover:underline">
              Terms of Use
            </a>{" "}
            |{" "}
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  