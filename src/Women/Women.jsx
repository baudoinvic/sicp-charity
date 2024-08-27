// import React from 'react'
// import pic20 from "../assets/women/pic20.jpg";
// import Navbar from "../components/Navbar/Navbar";
// import Footer from "../components/Footer/Footer";
// const Women = () => {
//   return (
//     <>
//       <div className="min-h-screen">
//         <Navbar />
//         <div className="container mx-auto py-12 px-4 mt-10 ml-10">
//           <section className="ml-0 md:ml-20">
//             <div className="flex flex-col md:flex-row">
//               <div className="md:w-1/3 w-full">
//                 <img
//                   className="w-[1200px] h-[650px] "
//                   src={pic20}
//                   alt="Fundraising"
//                 />
//               </div>
//               <div className="md:w-1/2 w-full p-4 md:p-8 mt-6 md:mt-0 md:ml-8">
//                 <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6 ml-10">
//                   Women Empowerment
//                 </h2>
//                 <div className="space-y-4 text-gray-600 ">
//                   <p>
//                     We ceaselessly promote peace, reconciliation, autonomy,
//                     liberty, justice, and equity and gender equality for women
//                     in their respective social gatherings and lives as a pathway
//                     to foster a community with strong and empowered women. We
//                     empower women from marginalized and underprivileged
//                     backgrounds, equipping them with essential skills to nurture
//                     their children from infancy through adulthood.
//                   </p>
//                   <h3 className="font-bold">
//                     Homebuilding Project of Milk Cow
//                   </h3>
//                   <p>
//                     Dairy Cow Project will provide the means for Sprouts’
//                     members to greatly improve their standard of living for
//                     themselves and their families. A single dairy cow can
//                     provide a Sprouts widow and her children with a 50% increase
//                     in their family income. Some milk will be saved for family
//                     consumption. The remaining milk will be sold to provide
//                     income for the widow and her family. They will be able to
//                     afford better food, necessary health care, and needed home
//                     improvements. The dream of providing their children with an
//                     education can become a reality. In addition, this program
//                     will serve as the cornerstone in our effort to enable Indian
//                     widows to demonstrate that they are not a risk to the order
//                     of society because they have no husbands, but rather are
//                     productive individuals deserving of dignity and respect.
//                   </p>
//                   <h3 className="font-bold">
//                     Charity is a continuous process toward success and joyful
//                     life
//                   </h3>
//                   <p>
//                     SICP Charity serves as a lifeline to those living at the
//                     fringes of society, encouraging and developing them. We are
//                     actively serving a population often forgotten and oppressed.
//                     Widows have been neglected and marginalized for centuries
//                     and even today in our global south especially African
//                     society. They are deprived of equal opportunity and human
//                     rights. We will be serving them pride and joy as longer as
//                     they will be fully on their ten feet tall and promoted and
//                     will continue to so for their wellbeing and development. We
//                     facilitated microfinance loans through banks and creditors
//                     and distributed the funds among them. With your generosity
//                     and kindness, we have helped them to purchase cows and goats
//                     and become the breadwinners.
//                   </p>
//                   <p>
//                     Our concrete measures include supporting children's
//                     education, vocational training for school dropouts, and
//                     social & developmental projects for widows and the
//                     marginalized. We primarily work in sub-Saharan countries,
//                     with a focus on Rwanda.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default Women

import React from "react";
import pic20 from "../assets/women/pic20.jpg";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Women = () => {
  return (
    <>
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto py-12 px-4">
          <section className="md:ml-20">
            <div className="flex flex-col md:flex-row items-center md:items-start">
              <div className="md:w-1/3 w-full">
                <img className="w-full h-auto" src={pic20} alt="Fundraising" />
              </div>
              <div className="md:w-1/2 w-full p-4 md:p-8 mt-6 md:mt-0 md:ml-8">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6">
                  Women Empowerment
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    We ceaselessly promote peace, reconciliation, autonomy,
                    liberty, justice, and equity and gender equality for women
                    in their respective social gatherings and lives as a pathway
                    to foster a community with strong and empowered women. We
                    empower women from marginalized and underprivileged
                    backgrounds, equipping them with essential skills to nurture
                    their children from infancy through adulthood.
                  </p>
                  <h3 className="font-bold">
                    Homebuilding Project of Milk Cow
                  </h3>
                  <p>
                    Dairy Cow Project will provide the means for Sprouts’
                    members to greatly improve their standard of living for
                    themselves and their families. A single dairy cow can
                    provide a Sprouts widow and her children with a 50% increase
                    in their family income. Some milk will be saved for family
                    consumption. The remaining milk will be sold to provide
                    income for the widow and her family. They will be able to
                    afford better food, necessary health care, and needed home
                    improvements. The dream of providing their children with an
                    education can become a reality. In addition, this program
                    will serve as the cornerstone in our effort to enable Indian
                    widows to demonstrate that they are not a risk to the order
                    of society because they have no husbands, but rather are
                    productive individuals deserving of dignity and respect.
                  </p>
                  <h3 className="font-bold">
                    Charity is a continuous process toward success and joyful
                    life
                  </h3>
                  <p>
                    SICP Charity serves as a lifeline to those living at the
                    fringes of society, encouraging and developing them. We are
                    actively serving a population often forgotten and oppressed.
                    Widows have been neglected and marginalized for centuries
                    and even today in our global south especially African
                    society. They are deprived of equal opportunity and human
                    rights. We will be serving them pride and joy as longer as
                    they will be fully on their ten feet tall and promoted and
                    will continue to so for their wellbeing and development. We
                    facilitated microfinance loans through banks and creditors
                    and distributed the funds among them. With your generosity
                    and kindness, we have helped them to purchase cows and goats
                    and become the breadwinners.
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

export default Women;

