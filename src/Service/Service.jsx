

import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";

const Service = () => {
  return (
    <div className="what-we-do">
      <Navbar />

      {/* Hero Section */}
      <header
        className="hero bg-cover bg-center brightness-50 h-96 flex items-center justify-center text-center "
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/474234518/photo/clean-fresh-water-scarcity-symbol-black-girl-drinking-from-tap.jpg?s=612x612&w=0&k=20&c=_pjxYm6dsAFMPIfn1dXux0km0bESkvKgUflxf9So3ak=')",
        }}
      >
        <h1 className="text-5xl font-bold text-white">What We Do</h1>
      </header>

      <span className="block w-2/3 mx-auto text-center text-gray-700 leading-relaxed p-4 pt-20 ">
        We train vulnerables in different knowledge within meaningful works that
        give incomes. We teach them social study and social environment in order
        to build peace, unity, and development, and teach these poor families
        how to care for their children from their infancy and to prepare their
        future. We teach them also to know God and to obey Him, in order that
        their children grow with love for God and love for their neighbors. We
        do fundraise money to support them.
      </span>

      {/* Main Content */}
      <main className="container mx-auto py-16 px-4 flex  items-center space-x-10">
        {/* Section: Overview */}
        <section className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center  mb-6">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
            Solidarity Initiative for Children and People (SICP) is aims to get
            poor people and marginalized people out from poverty with charity
            works, lead them to meaningful woks which get incomes, in order to
            reload their belief in their lives, with goal to step them to the
            level of others like: job, welfare, education, economic and
            development
          </p>
        </section>

        {/* Section: Our Impact */}
        <section className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Our Impact</h2>
          <p className="text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
            Through our dedicated efforts, we have made a significant impact on
            the lives of many individuals and communities. Here are some of the
            key statistics and stories of how our work is making a difference.
          </p>
        </section>

        {/* Section: Call to Action */}
        <section className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-6">Get Involved</h2>
          <p className="text-gray-700 leading-relaxed max-w-xl mx-auto mb-8">
            You can make a difference by supporting our programs and
            initiatives. Whether through donations, volunteering, or spreading
            the word, your involvement is crucial to our success.
          </p>
          <Link to="/contact">
            <button className="bg-primary text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105">
              Support Us
            </button>
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Service;
