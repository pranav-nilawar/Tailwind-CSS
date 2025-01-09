const AboutUs = () => (
    <section id="about" className="bg-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 relative">
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.9iP5hfylm0iGQPmS8s1cOgHaE8&pid=Api&P=0&h=180"
            alt="Worker at desk"
            className="rounded-lg shadow-lg"
          />
        </div>
  
        <div className="md:w-1/2 md:ml-10 mt-10 md:mt-0">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">About us</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Everyone has a vision of their dream home or workspace — a space filled
            with special features and lasting impressions. At United BuildPro Pvt Ltd, 
            we bring those dreams to life. Even if you're unsure of what you want, our 
            team of experts knows the right questions to ask to uncover your desires and 
            create a space that's uniquely yours.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Every project we undertake is a harmonious blend of our client’s vision and 
            our design expertise. We focus on creating spaces that not only meet expectations 
            but exceed them, offering a seamless integration of style and functionality.
          </p>
          <button className="bg-blue-900 text-white py-3 px-6 rounded hover:bg-blue-700">
            Know More
          </button>
        </div>
      </div>
    </section>
  );
  
  export default AboutUs;
  