import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { useState } from "react";
import Footer from '../components/Footer/Footer';

const Donation = () => {
    const [amount, setAmount] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [newsletter, setNewsletter] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the form submission logic here
        console.log({
            amount,
            name,
            email,
            newsletter
        });
    };
  return (
    <div className="Donation">
      <Navbar />
      <div className="container mx-auto p-6">
        {/* Hero Section */}
        <header
          className="hero bg-cover bg-center"
          style={{ backgroundImage: "url(hero-image.jpg)" }}
        >
          <div className="hero-overlay bg-primary  bg-opacity-50">
            <div className="max-w-3xl mx-auto py-20 px-6 text-center text-white">
              <h1 className="text-5xl font-bold mb-6">
                Donate to Make a Difference
              </h1>
              <p className="text-xl mb-8">
                Your contribution can change lives and create a better future.
              </p>
            
            </div>
          </div>
        </header>

        <main>
          <section className="mb-12 text-center pt-20">
            <h2 className="text-3xl font-semibold mb-4">
              Choose Your Donation
            </h2>
            <div className="flex justify-center space-x-4 mb-4">
              {[10, 25, 50, 100].map((amt) => (
                <button
                  key={amt}
                  className="px-4 py-2 bg-primary  text-white rounded hover:bg-blue-600 transition-colors"
                  onClick={() => setAmount(amt)}
                >
                  ${amt}
                </button>
              ))}
              <input
                type="number"
                placeholder="Other amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <p className="text-lg">Every contribution makes a difference.</p>
          </section>

          <section className="mb-12 text-center">
            <h2 className="text-3xl font-semibold mb-4">Payment Methods</h2>
            <p className="mb-6">We accept secure payments through:</p>
            <div className="flex justify-center space-x-4 mb-6">
              {/* Insert payment method icons here */}
              <img
                src="https://www.viseca.ch/getmedia/7c5f3cf1-6bdb-4b93-bf82-d4f4ee51d455/Viseca_MasterCard_Visa-Silber_1.png?width=600&height=450&ext=.png"
                alt="Visa"
                className="w-32 h-16"
              />
              <img
                src="https://www.mymastercard.ch/.imaging/flex/crop/560x317/dam/mymastercard/kreditkarten/images/mymastercard-platinum-card-stagestatic"
                alt="Mastercard"
                className="w-32 h-16"
              />
              <img
                src="https://i0.wp.com/techtrendske.co.ke/wp-content/uploads/2024/02/equity-prepaid-card-copy.png?fit=894%2C515&ssl=1"
                alt="PayPal"
                className="w-32 h-16"
              />
            </div>
            <p className="text-lg">
              Your donation is 100% secure and encrypted.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-center">
              Donate Now
            </h2>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
              <div className="mb-4">
                <label
                  htmlFor="amount"
                  className="block text-sm font-medium mb-2"
                >
                  Amount:
                </label>
                <input
                  type="number"
                  id="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-6">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="newsletter"
                    checked={newsletter}
                    onChange={() => setNewsletter(!newsletter)}
                    className="mr-2"
                  />
                  <label htmlFor="newsletter" className="text-sm">
                    Sign up for our newsletter
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-primary  text-white rounded hover:bg-green-600 transition-colors"
              >
                Donate
              </button>
            </form>
          </section>

          <section className="mb-12 text-center">
            <h2 className="text-3xl font-semibold mb-4">
              How Your Donation Helps
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-col md:flex-row mb-6">
                <div className="md:w-1/3 mb-6 md:mb-0">
                  <img
                    src="https://www.avanse.com/blogs/images/10feb-blog-2023.jpg"
                    alt="Education"
                    className="mx-auto rounded-lg"
                  />
                </div>
                <div className="md:w-2/3 md:pl-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Education for All
                  </h3>
                  <p className="text-gray-700 w-3/4 ml-20">
                    $25 provides school supplies for a child in need, giving
                    them the tools to learn and succeed.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row mb-6">
                <div className="md:w-1/3 mb-6 md:mb-0">
                  <img
                    src="https://thefulcrum.us/media-library/image.png?id=32851775&width=980&quality=85"
                    alt="Healthcare"
                    className="mx-auto rounded-lg"
                  />
                </div>
                <div className="md:w-2/3 md:pl-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Accessible Healthcare
                  </h3>
                  <p className="text-gray-700 w-3/4 ml-20">
                    $50 provides essential medical supplies and healthcare
                    services for families in remote areas.
                  </p>
                </div>
              </div>
              {/* Add more impact stories or testimonials here */}
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Donation
