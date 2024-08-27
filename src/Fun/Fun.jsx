import React from "react";
import Navbar from "../components/Navbar/Navbar";
import copy from "../assets/women/copy.jpg";
import Footer from "../components/Footer/Footer";

const Fun = () => {
  return (
    <>
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto py-12 px-4 mt-10 ">
          <section className="ml-0 md:ml-20">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 w-full">
                <img
                  className="w-full h-full object-cover"
                  src={copy}
                  alt="Fundraising"
                />
              </div>
              <div className="md:w-1/2 w-full p-4 md:p-8 mt-6 md:mt-0 md:ml-8">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6">
                  Fundraising
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    We train vulnerable people from various backgrounds on how
                    to embark on decent works that generate reliable incomes. We
                    educate on social and environmental studies to foster peace,
                    unity, and sustainable development amongst our community.
                  </p>
                  <p>
                    We provide guidance to poor families on how to better care
                    for their children from infancy to adulthood, ensuring a
                    bright future. Our spiritual guidance cultivates peace,
                    love, and obedience, giving life true meaning and purpose.
                  </p>
                  <p>
                    Through fundraising, we support those in need, including
                    patients, widows, refugees, and other vulnerable groups. We
                    use social media to highlight their plight and direct our
                    efforts toward relieving poverty, especially for children
                    and women.
                  </p>
                  <p>
                    Our concrete measures include supporting children's
                    education, vocational training for school dropouts, and
                    social & developmental projects for widows and the
                    marginalized. We primarily work in sub-Saharan countries,
                    with a focus on Rwanda.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Fun;
