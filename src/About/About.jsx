import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const About = () => {
  return (
    <div className="about-us">
      <Navbar />
      <div data-aos="zoom-in">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center py-8 mt-10">
          {/* Left Side - Image */}
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <img
              src="https://t4.ftcdn.net/jpg/06/50/75/23/360_F_650752340_svHnkTNmdl7ISCeJMRrnyu9ZfDXLAkGT.webp"
              alt="Placeholder"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          {/* Right Side - Text */}
          <div className="w-full md:w-1/2 md:ml-8 mt-4 md:mt-0">
            <h2 className="text-3xl font-bold mb-4">About beatha business</h2>
            <p className="text-gray-700 leading-relaxed">
              Welcome to Beatha Business where we provide quality products to
              our customers. We offer a variety of products including oils and
              perfumes. Our popular products include{" "}
              <span className="text-primary">QIE Paris lotion</span>,{" "}
              <span className="text-primary">QIE Paris perfume</span>,{" "}
              <span className="text-primary">
                PR Francoise Bredon Paris lotion
              </span>
              , and{" "}
              <span className="text-primary">
                PR Francoise Bredon Paris perfume
              </span>
              . This is our main product menu. We welcome you all to our
              platform to enjoy our quality products. We offer oils for both men
              and women.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About
