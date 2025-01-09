const ContactUs = () => (
    <section id="contact" class="bg-gray-50 flex justify-center items-center min-h-screen">

        <div class="w-full max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
            <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">Contact us</h2>
            <form action="#" class="space-y-4">


                <div class="relative">
                    <input type="text" placeholder="First Name*" class="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <span class="absolute right-3 top-3 text-gray-400"><i class="fas fa-user"></i></span>
                </div>


                <div class="grid grid-cols-2 gap-4">
                    <div class="relative">
                        <input type="email" placeholder="Mail Address" class="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <span class="absolute right-3 top-3 text-gray-400"><i class="fas fa-envelope"></i></span>
                    </div>
                    <div class="relative">
                        <input type="text" placeholder="Phone Number" class="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <span class="absolute right-3 top-3 text-gray-400"><i class="fas fa-phone"></i></span>
                    </div>
                </div>


                <div class="relative">
                    <textarea rows="4" placeholder="Enter Message" class="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                    <span class="absolute right-3 top-3 text-gray-400"><i class="fas fa-comment"></i></span>
                </div>


                <div class="text-center">
                    <button type="submit" class="w-full bg-orange-500 text-white font-semibold py-3 rounded-md hover:bg-orange-600 focus:ring-4 focus:ring-orange-300">
                        Submit Request
                    </button>
                </div>
            </form>
        </div>

    </section>
);

export default ContactUs;