import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const About = () => {
  return (
    <div className="about-us">
        <Navbar />
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center py-8 mt-20">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <img
            src="https://t4.ftcdn.net/jpg/06/50/75/23/360_F_650752340_svHnkTNmdl7ISCeJMRrnyu9ZfDXLAkGT.webp"
            alt="Placeholder"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Right Side - Text */}
        <div className="w-full md:w-1/2 md:ml-8">
          <h2 className="text-3xl font-bold mb-4">Your Heading Here</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit
            amet justo vehicula, fermentum tellus vitae, tempus orci. Duis
            condimentum nisi ut sollicitudin vestibulum. Suspendisse potenti. Ut
            lacinia enim ac nisi accumsan, vel fermentum ipsum placerat.
            Phasellus viverra nulla ut efficitur. Donec mollis felis vel risus
            vulputate, ut scelerisque lectus feugiat. Integer quis risus justo.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Fusce quis eros nec nulla fringilla dictum. Aliquam nec arcu in diam
            aliquet rutrum. Pellentesque habitant morbi tristique senectus et
            netus et malesuada fames ac turpis egestas.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About
