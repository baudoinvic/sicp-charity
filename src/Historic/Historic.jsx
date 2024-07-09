import React from 'react'
import change from "../assets/women/change.jpg";
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import michel from "../assets/women/michel.jpg";
import CEO from "../assets/women/CEO.jpg";
import mag from "../assets/women/mag.jpg";
import pic24 from "../assets/pic24.jpg";

const Historic = () => {
  return (
    <div className="historic">
      <Navbar />
      <div
        data-aos="zoom-in"
        className="container mx-auto flex flex-col md:flex-row items-center justify-center py-6 mt-20"
      >
        <div className="w-full md:w-2/5 mb-4 md:mb-0 flex justify-center">
          <img
            src={change}
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
      <div className="bg-white py-12 pt-20">
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
}

export default Historic
