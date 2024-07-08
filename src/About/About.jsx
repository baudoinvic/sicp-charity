
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";
import pic17 from "../assets/women/pic17.jpg";
import pic18 from "../assets/women/pic18.jpg";
import pic21 from "../assets/women/pic21.jpg";
import pic25 from "../assets/women/pic25.jpg";
import michel from "../assets/women/michel.jpg";
import CEO from "../assets/women/CEO.jpg";
import mag from "../assets/women/mag.jpg";
import pic24 from "../assets/pic24.jpg";

const About = () => {
  return (
    <div className="about-us">
      <Navbar />

      {/* Hero Section */}
      <section className="relative">
        <div
          data-aos="zoom-in"
          className="container mx-auto flex flex-col md:flex-row items-center justify-center py-6 mt-8"
        >
          {/* Left Side - Image */}
          <div className="w-full md:w-2/5 mb-4 md:mb-0">
            <img
              src={pic25}
              alt="About Us Image"
              className="w-full h-auto max-h-85 object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Right Side - Text */}
          <div className="w-full md:w-2/4 md:ml-8 mt-4 md:mt-0">
            <h2 className="text-2xl font-bold mb-3 text-primary">WHO WE ARE</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              The Solidarity Initiative for Children and People (SICP) is a
              Charity Non-profit and Non-governmental organization established
              in Rwanda in 2023. Our main aim is to help poor and marginalized
              people who suffer from various life-imposed uncertainties. We
              offer encouragement and support through charity activities,
              empowerment, and spiritual guidance, focusing primarily on
              children, as well as other vulnerable groups such as women,
              widows, unaccompanied hospital patients, and refugees within the
              East-African region. While our roots are in Rwanda, our reach
              extends beyond borders as we continue to expand. Many children,
              left-behind women, and others need our support. Together, we can
              make an unforgettable and huge positive impact on the lives of
              these less fortunate individuals. We believe that by joining
              hands, we can eradicate poverty and end global suffering. We
              invite you to work with us in this noble cause.
            </p>
          </div>
        </div>

        <div
          data-aos="zoom-in"
          className="container mx-auto flex flex-col md:flex-row items-center justify-between py-8"
        >
          <div className="md:w-2/4 mb-6 md:mb-0 md:pr-8">
            <h2 className="text-3xl font-bold mb-3 text-primary">
              Who Can Donate?
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              Anyone who believes in our mission and values can contribute to
              our cause, whether through financial donations, goods, or
              services. Your support helps to transform lives and build brighter
              futures.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              A donator of SICP is everyone who has understood the goal and
              value of our organization and decides to support our agenda and
              charity activities. A donator from his/her kind heart and capacity
              can either support our community financially or through essentials
              kits provision. We have many children today who lack many basic
              needs either in their homes and school life, and want support from
              you. Children are angels and leaders of tomorrow, as we take into
              account this statement, let’s nourish our minds that the best
              leaders of tomorrow are cultivated from the early cared childhoods
              with good education and healthy life, therefore this is where your
              role comes into play by helping to strengthen the cared childhood
              stage. With your kind heart, you can choose to donate today from
              your capacity. If for example you donate only $50 every month to a
              kindergarten child, he/she will be able to eat, cloth and study
              well. If it is for a primary school child, only a $100 every
              trimester or $300 for three trimesters will help him/her to study,
              eat and cloth well. In addition for a high school child, only $160
              every trimester or $480 for three trimesters, can help him/her
              study, eat and cloth. Moreover a $250 might help to change a young
              girl or boy and a left behind woman life from marginalized
              families; as such amount could act as a capital to start a small
              business that can generate income to them saving them from being
              beggars in the streets.
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
      </section>

      <div
        data-aos="zoom-in"
        className="container mx-auto flex flex-col md:flex-row items-center justify-center py-6 mt-8"
      >
        <div className="w-full md:w-2/5 mb-4 md:mb-0 flex justify-center">
          <img
            src={pic17}
            alt="Our Story"
            className="w-full h-auto max-h-85 rounded-lg shadow-md object-cover"
          />
        </div>

        <div className="w-full md:w-2/4 md:ml-6 mt-4 md:mt-0">
          <h2 className="text-2xl font-bold mb-3 text-primary">Our Story</h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            Poverty, disease, homelessness, hunger, disasters, and refugee
            crises negatively impact individuals and families worldwide,
            hindering sustainable development. The COVID-19 outbreak left many
            devastated, particularly in sub-Saharan Africa where extreme
            suffering became widespread. Founded in 2023 as a non-governmental
            organization, SICP Charity strives to bring hope and support to
            those in need. We mobilize resources to combat poverty,
            malnutrition, and poor education for children. Additionally, we
            support and encourage women's empowerment. Our mission is to address
            these challenges and create positive change. Through dedicated
            efforts, we aim to build a world where everyone has access to basic
            necessities, quality education, and opportunities for growth and
            development.
          </p>
        </div>
      </div>

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mb-3">
                <svg
                  className="w-6 h-6 text-indigo-600"
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
              <h3 className="text-base font-semibold text-gray-900 mb-2">
                OUR MISSION
              </h3>
              <p className="mt-1 text-sm text-gray-600 text-center overflow-y-auto max-h-40">
                Solidarity Initiative for Children and People (SICP) aims to
                alleviate poverty for marginalized people through charity,
                focusing on vulnerable children and women. We also support
                self-employment initiatives to boost confidence and help
                individuals catch up with societal standards in job
                opportunities, welfare, education, and sustainable economic
                growth.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mb-3">
                <svg
                  className="w-6 h-6 text-indigo-600"
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
              <h3 className="text-base font-semibold text-gray-900 mb-2">
                OUR VISION
              </h3>
              <p className="mt-1 text-sm text-gray-600 text-center overflow-y-auto max-h-40">
                We envision education, social welfare, and economic growth as
                tools for social transformation, leading to empowerment,
                autonomy, liberty, justice, and reconciliation. We believe in
                providing opportunities for everyone to succeed in life and are
                committed to supporting this goal.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mb-3">
                <svg
                  className="w-6 h-6 text-indigo-600"
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
              <h3 className="text-base font-semibold text-gray-900 mb-2">
                OUR VALUES
              </h3>
              <p className="mt-1 text-sm text-gray-600 text-center overflow-y-auto max-h-40">
                Our core values include working together, helping those who
                suffer, non-discriminatory and non-racist behavior, and
                fostering our belief in Truth and Faith in the Almighty.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gray-100 py-12">
        <h1 className="text-4xl font-bold text-center mb-12 text-primary">
          Our Leadership Team
        </h1>
        <main
          data-aos="zoom-in"
          className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            {
              name: "NYIRAHABARUGIRA Winifred",
              title: "President & Founder of SICP",
              image: pic24,
              quote:
                "Together, we can make a lasting impact and create a brighter future for children and people in need.",
            },
            {
              name: "BISANGWA Christophe",
              title: "Chief Executive Officer of SICP",
              image: CEO,
              quote:
                "Across the globe, I have seen with my own eyes the power of solidarity, opportunity, and protection of individuals and communities against vulnerability. I joined SICP mainly because the struggle for justice and inclusion for all and against the cruelty of poverty.",
            },
            {
              name: "MAG Li",
              title: "Chief Financial Officer of SICP",
              image: mag,
              quote:
                "I am sure we can change the world if we lift our voices and help others to find their voice against poverty. SICP is on the front, and I am pleased to be a part of this team.",
            },
            {
              name: "SAN Michel",
              title: "Chief of Strategy and Operations of SICP",
              image: michel,
              quote:
                "I am inspired by the team at SICP and their genuine commitment to conquer inequality and eradicate poverty and injustice in the community.",
            },
          ].map((member, index) => (
            <section
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
            >
              <div className="h-96 overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  src={member.image}
                  alt={member.name}
                />
              </div>
              <div className="p-4 flex-grow flex flex-col">
                <h2 className="text-xl font-bold text-center">{member.name}</h2>
                <p className="text-sm text-gray-600 text-center mt-1 mb-2 font-bold">
                  {member.title}
                </p>
                <p className="text-gray-700 text-sm leading-relaxed text-center">
                  {member.quote}
                </p>
              </div>
            </section>
          ))}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default About;
