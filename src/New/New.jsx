import React from 'react'
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
const New = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl md:text-2xl font-bold text-primary mb-8 leading-tight">
            The Importance of Preserving and Conserving Green Grassland
          </h1>
          <div className="bg-white rounded-lg shadow-2xl p-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Globally, over-utilization of resources and climate change have
              caused increasingly serious ecological damage, including but not
              limited to losses of biodiversity and ecosystem stability,
              threatening the sustainability of ecological functions and
              services.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              In 2021, the United Nations launched the "United Nations Decade on
              Ecosystem Restoration" plan. Grasslands, the most important
              terrestrial ecosystem, account for more than 40% of the total land
              area, and around 1 billion people worldwide live on grassland.
              However, more than 49% of the grasslands are degraded.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              It is imperative to recognize and understand the important
              functions of grassland ecosystems in regulating the climate,
              improving the environment and maintaining the ecological balance.
              Exploring the ecological restoration techniques of degraded
              grasslands helps broaden our horizons and provides solutions for
              human beings to combat degrading ecosystems.
            </p>
            <div className="text-right">
              <span className="text-primary font-semibold">- SICP</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default New
