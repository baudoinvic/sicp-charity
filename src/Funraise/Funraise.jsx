

import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Funraise = () => {
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
      image:
        "https://media.istockphoto.com/id/1486305888/photo/world-environment-day-2023-3d-concept.jpg?s=612x612&w=0&k=20&c=NX7LEjr6s4ficuxHWAob87bilc_nx4qJaH6YRHtsEo4=",
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
      image:
        "https://media.istockphoto.com/id/1360731988/vector/national-strawberry-ice-cream-day-january-15-holiday-concept-template-for-background-banner.jpg?s=612x612&w=0&k=20&c=L6N4M4ICwbzo8dOusNbwvyvk61fvsB3SxIBguxKbhzQ=",
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
      image:
        "https://media.istockphoto.com/id/1409566238/vector/national-dog-day-august-26-holiday-concept-template-for-background-banner-card-poster-with.jpg?s=612x612&w=0&k=20&c=SBwLbMF3FXEerSPkHROdVF3HOjeNqa4SV2JJA1Cwvn8=",
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
      image:
        "https://media.istockphoto.com/id/1680606749/vector/hispanic-heritage-month-vector-web-banner-poster-card-for-social-media-networks-greeting.jpg?s=612x612&w=0&k=20&c=7svjtEmib9WG6Rrcm5Kzqycec6V_QeA-P4w_uXqMKkE=",
    },
  ];

  return (
  
    <div className="min-h-screen ">
      <Navbar />
      <div className="py-12 px-4 md:px-0 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
          Fundraising Calendar
        </h1>
        {months.map((month, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md mb-8 overflow-hidden"
          >
            <div className="flex items-center justify-between p-6">
              <h2 className="text-2xl font-bold text-blue-600 ">{month.name}</h2>
              <img
                src={month.image}
                alt={`${month.name} image`}
                className="w-1/3 md:w-1/2 h-64 rounded-lg object-cover"
              />
            </div>
            <ul className="pl-8 pb-6 " style={{marginTop: "-6rem"}}>
              {month.events.map((event, eventIndex) => (
                <li key={eventIndex} className="text-gray-700 mb-2">
                  {event}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Funraise;
