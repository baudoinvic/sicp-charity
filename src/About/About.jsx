
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";
import pic17 from "../assets/women/pic17.jpg";
import pic18 from "../assets/women/pic18.jpg";
import pic21 from "../assets/women/pic21.jpg";
import pic25 from "../assets/women/pic25.jpg"

const About = () => {
  return (
    <div className="about-us">
      <Navbar />

      {/* Hero Section */}
      <section className="relative">
        <div
          data-aos="zoom-in"
          className="container mx-auto flex flex-col md:flex-row items-center justify-center py-8 mt-10"
        >
          {/* Left Side - Image */}
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <img
              src={pic25}
              alt="About Us Image"
              className="h-auto rounded-lg shadow-md"
            />
          </div>

          <div className="w-full md:w-1/2 md:ml-8 mt-4 md:mt-0">
            <h2 className="text-3xl font-bold mb-4 text-primary">ABOUT US</h2>
            <p className="text-gray-700 leading-relaxed">
              The Solidarity Initiative for Children and People (SICP) is a
              Charity Non-profit and Non-governmental organization bourgeoned in
              Rwanda in 2023 with the main aim of helping a diverse community of
              poor and marginalized people who suffer from the various life
              imposed uncertainties. We offer our encouragement and support
              through charity activities, empowerment and spiritual guidance to
              the abovementioned categories of people in need, mainly focusing
              on children but also the left behind societies such as women,
              widows, unaccompanied hospital patients and refugees within the
              East-African region. The root of our organization is Rwanda but
              our reach is far beyond one country’s borders as we continue to
              expand. We have many children and left behind women and other
              peoples who need our support. Together from the little or more we
              have, we can make unforgettable and huge positive impact in the
              lives of these less fortunate but not damned people. We can
              eradicate poverty and end global suffering in the blink of an eye
              if we join hands, Please work with us.
            </p>
          </div>
        </div>

        <div
          data-aos="zoom-in"
          className="container mx-auto flex flex-col md:flex-row items-center justify-between py-16 "
        >
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div>
              <h2 className="text-4xl font-bold mb-4 text-primary">
                Who Can Donate?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Anyone who believes in our mission and values can contribute to
                our cause, whether through financial donations, goods, or
                services. Your support helps to transform lives and build
                brighter futures.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                A donator of SICP is everyone who has understood the goal and
                value of our organization and decides to support our agenda and
                charity activities. A donator from his/her kind heart and
                capacity can either support our community financially or through
                essentials kits provision. We have many children today who lack
                many basic needs either in their homes and school life, and want
                support from you. Children are angels and leaders of tomorrow,
                as we take into account this statement, let’s nourish our minds
                that the best leaders of tomorrow are cultivated from the early
                cared childhoods with good education and healthy life, therefore
                this is where your role comes into play by helping to strengthen
                the cared childhood stage. With your kind heart, you can choose
                to donate today from your capacity. If for example you donate
                only $50 every month to a kindergarten child, he/she will be
                able to eat, cloth and study well. If it is for a primary school
                child, only a $100 every trimester or $300 for three trimesters
                will help him/her to study, eat and cloth well. In addition for
                a high school child, only $160 every trimester or $480 for three
                trimesters, can help him/her study, eat and cloth. Moreover a
                $250 might help to change a young girl or boy and a left behind
                woman life from marginalized families; as such amount could act
                as a capital to start a small business that can generate income
                to them saving them from being beggars in the streets.
              </p>
              <Link to="/donation">
                <button className="bg-primary text-white font-bold py-3 px-6   transition duration-300">
                  Donate Now
                </button>
              </Link>
            </div>
          </div>

          <div className="md:w-2/5">
            <img
              src={pic18}
              alt="About Us Image"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <div
        data-aos="zoom-in"
        className="container mx-auto flex flex-col md:flex-row items-center justify-center py-8 mt-10"
      >
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0 flex justify-center">
          <img
            src={pic17}
            alt="About Us Image"
            className="w-full h-96 md:h-96 rounded-lg shadow-md object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 md:ml-8 mt-4 md:mt-0">
          <h2 className="text-3xl font-bold mb-4 text-primary">Our Story</h2>
          <p className="text-gray-700 leading-relaxed">
            Poverty, disease, homelessness, hunger,disasters, asylam refugee,
            and other challenges impact many individuals and families worldwide.
            Founded as a non-governmental organization, we strive to bring hope
            and support to those in need. Chez madame Betty
          </p>
        </div>
      </div>

      {/* Mission, Vision, Values Section */}
      <section className=" py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                OUR MISSION
              </h3>
              <p className="mt-2 text-gray-600 text-center">
                Solidarity Initiative for Children and People (SICP) is aims to
                get poor people and marginalized people out from poverty with
                charity works, lead them to meaningful woks which get incomes,
                in order to reload their belief in their lives, with goal to
                step them to the level of others like: job, welfare, education,
                economic and development
              </p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  ></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                OUR VISION
              </h3>
              <p className="mt-2 text-gray-600 text-center">
                Education, economies and development will be a great tools of
                social empowerment, liberty and justice and reconciliation. We
                believe every human being should have opportunity to success in
                life.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  ></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                OUR VALUES
              </h3>
              <p className="mt-2 text-gray-600 text-center">
                Working together, Helping suffering people, No discrimination
                races, Belief, Truth, Faith in God
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
