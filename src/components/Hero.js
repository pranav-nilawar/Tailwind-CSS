const Hero = () => (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-orange-600 font-bold uppercase mb-2">Great Experience in Building</p>
          <h1 className="text-4xl font-bold text-blue-900 leading-tight mb-6">
            You Dream,<br /> We'll Make It Real
          </h1>
          <p className="text-gray-600 mb-6">
            All types of work – from designing and laying the foundation to finishing and commissioning.
          </p>
          <button className="bg-blue-900 text-white py-3 px-6 rounded hover:bg-blue-700">
            Contact us
          </button>
        </div>
        <div className="md:w-1/2">
          <img src="https://tse1.mm.bing.net/th?id=OIP.DZSE0R7sSpY4NQTtH7ghZAHaLK&pid=Api&P=0&h=180" alt="Builder" className="rounded-lg" />
        </div>
      </div>
    </section>
  );
  export default Hero;
  