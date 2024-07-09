import React from 'react'
import { Link } from 'react-router-dom';
import pic18 from "../assets/women/pic18.jpg";
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';


const Donate = () => {
  return (
    <div className='who can donate'>
      <Navbar />
      <div
        data-aos="zoom-in"
        className="container mx-auto flex flex-col md:flex-row items-center justify-between py-8"
      >
        <div className="md:w-2/4 mb-6 md:mb-0 md:pr-8">
          <h2 className="text-3xl font-bold mb-3 text-primary">
            Who Can Donate?
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            Anyone who believes in our mission and values can contribute to our
            cause, whether through financial donations, goods, or services. Your
            support helps to transform lives and build brighter futures.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            A donator of SICP is everyone who has understood the goal and value
            of our organization and decides to support our agenda and charity
            activities. A donator from his/her kind heart and capacity can
            either support our community financially or through essentials kits
            provision. We have many children today who lack many basic needs
            either in their homes and school life, and want support from you.
            Children are angels and leaders of tomorrow, as we take into account
            this statement, let’s nourish our minds that the best leaders of
            tomorrow are cultivated from the early cared childhoods with good
            education and healthy life, therefore this is where your role comes
            into play by helping to strengthen the cared childhood stage. With
            your kind heart, you can choose to donate today from your capacity.
            If for example you donate only $50 every month to a kindergarten
            child, he/she will be able to eat, cloth and study well. If it is
            for a primary school child, only a $100 every trimester or $300 for
            three trimesters will help him/her to study, eat and cloth well. In
            addition for a high school child, only $160 every trimester or $480
            for three trimesters, can help him/her study, eat and cloth.
            Moreover a $250 might help to change a young girl or boy and a left
            behind woman life from marginalized families; as such amount could
            act as a capital to start a small business that can generate income
            to them saving them from being beggars in the streets.
          </p>
          <Link to="/donation">
            <button className="bg-primary text-white font-bold py-2 px-4 rounded transition duration-300">
              Donate Now
            </button>
          </Link>
        </div>

        <div className="md:w-2/5">
          <img
            src={pic18}
            alt="Donation Impact"
            className="w-full h-auto max-h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Donate
