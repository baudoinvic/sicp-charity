import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "ishimwe sandra",
    text: " I'm proud to participate in auctions Business. I've won several bids and received authentic items delivered right to my home ",

    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Divine josh",
    text: "I'm proud to participate in auctions Business. I've won several bids and received authentic items delivered right to my home",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Tousaint Francis",
    text: "I'm proud to participate in auctions Business. I've won several bids and received authentic items delivered right to my home",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Chris johnB",
    text: "I'm proud to participate in auctions Business. I've won several bids and received authentic items delivered right to my home",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Making a Difference Together
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            What Our Donors Say
          </h1>
          <p data-aos="fade-up" className="text-lg text-gray-400">
            Welcome to our community of kindness and compassion. 
            we believe in the power of collective action to
            change lives. Each donation, big or small, is a beacon of hope for
            those in need. Join us as we strive to make the world a better
            place, one act of generosity at a time.
          </p>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-white text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-white">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-white text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
