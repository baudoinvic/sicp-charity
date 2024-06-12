

import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Donation = () => {
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [newsletter, setNewsletter] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log({
      amount,
      name,
      email,
      newsletter,
    });
  };

  return (
    <div className="Donation">
      <Navbar />

      {/* Hero Section */}
      <header
        className="hero bg-cover bg-center brightness-60"
        style={{
          backgroundImage:
            "url(https://assets-global.website-files.com/5fff1b1358bb914db4cb82f3/6053b1a7b7a1931385a35d84_charity%20water%202.png)",
        }}
      >
        <div className="hero-overlay">
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
          <h2 className="text-3xl font-semibold mb-4">Choose Your Donation</h2>
          <div className="flex justify-center space-x-4 mb-4">
            {[10, 25, 50, 100].map((amt) => (
              <button
                key={amt}
                className="px-4 py-2 bg-primary text-white rounded hover:bg-blue-600 transition-colors"
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
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Donation;

