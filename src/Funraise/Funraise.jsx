

import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Funraise= () => {
  const months = [
    {
      name: "June 2024",
      events: [
        "GREAT OUTDOORS MONTH",
        "PRIDE MONTH (US)",
        "Outdoor Movie Nights",
        "Eid al-Adha",
        "National Leave the Office Early Day · June 2",
        "Native American Citizenship Day · June 2",
        "World Environmental Day · June 5",
        "Father's Day · June 16",
        "Juneteenth · June 19",
        "Summer Solstice Dinner · June 20",
        "National Selfie Day · June 21",
        "Summersgiving · June 22",
        "National Handshake Day · June 27",
        "Pride Day · June 28",
      ],
    },
    {
      name: "July 2024",
      events: [
        "NATIONAL ICE CREAM MONTH",
        "NATIONAL MINORITY MENTAL HEALTH AWARENESS MONTH",
        "Summer Sports Roundtable",
        "Summer Concert Fundraiser",
        "BBQ Fundraiser",
        "Outdoor Movie Nights",
        "Summer Golf Tournament",
        "Independence Day (US) · July 4",
        "International Non-Binary People's Day · July 14",
        "National Hot Dog Day · July 17",
        "Disability Independence Day · July 26",
        "International Friendship Day · July 30",
      ],
    },
    {
      name: "August 2024",
      events: [
        "NATIONAL DOG MONTH",
        "NATIONAL IMMUNIZATION AWARENESS MONTH",
        "Classic Car Wash",
        "Virtual Drawing Contest",
        "Local Event Partnerships",
        "Charity Water Balloon Fight",
        "Fantasy Sports League",
        "World Indigenous People's Day · August 9",
        "International Youth Day · August 12",
        "National Relaxation Day · August 15",
        "World Humanitarian Day · August 19",
        "Senior Citizens Day · August 21",
        "International Slave Trade & Abolition Remembrance Day · August 23",
        "National Waffle Day · August 24",
        "Women's Equality Day · August 26",
        "International Overdose Awareness Day · August 31",
      ],
    },
    {
      name: "September 2024",
      events: [
        "HISPANIC HERITAGE MONTH",
        "NATIONAL SUICIDE PREVENTION MONTH",
        "Labor Day · September 2",
        "National Tailgating Day · September 7",
        "World Suicide Prevention Day · September 10",
        "9/11 Remembrance · September 11",
        "Positive Thinking Day · September 13",
        "Mexican Independence Day · September 16",
        "National Voter Registration Day · September 17",
        "Miniature Golf Day · September 21",
        "International Day of Peace · September 21",
        "International Day of Sign Languages · September 23",
        "Native Americans Day · September 27",
        "National Coffee Day · September 29",
        "Oktoberfest · September 21 - October 6",
        "Chuseok (Harvest Moon Festival) · September 16-18",
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <div
        data-aos="zoom-in"
        className="min-h-screen  flex flex-col items-center justify-center"
      >
        <div className="max-w-3xl w-full mx-auto">
          <h1 className="text-4xl font-bold text-center text-blue-600 mb-12">
            Fundraising Calendar
          </h1>
          {months.map((month, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">
                {month.name}
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                {month.events.map((event, eventIndex) => (
                  <li key={eventIndex} className="text-gray-700">
                    {event}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Funraise;
