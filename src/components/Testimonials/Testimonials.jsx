import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Ishimwe Sandra",
    text: "Being part of SICP's initiatives has been incredibly rewarding. I've seen firsthand how our efforts transform lives, providing much-needed support to children and senior citizens.",
    img: "https://media.istockphoto.com/id/1725885533/photo/runner-man-winner-and-medal-in-portrait-for-marathon-competition-or-race-with-smile-in-cape.jpg?s=612x612&w=0&k=20&c=sfoAG44fHbgksz98so14-5lfBN0KBmWGVIZDD44jnVk=",
  },
  {
    id: 2,
    name: "Divine Josh",
    text: "Volunteering with SICP has been a life-changing experience. The impact we make in Kigali and beyond, especially in providing clean water and education, is truly inspiring.",
    img: "https://media.istockphoto.com/id/696643544/photo/artist-paints-a-picture-of-the-street-stone-town.jpg?s=612x612&w=0&k=20&c=8uqfJ0FTOYfoPdM1QFL453k9ygnVcBEMOeeNgsmFL8A=",
  },
  {
    id: 3,
    name: "Tousaint Francis",
    text: "I've witnessed SICP's dedication to helping our community. Their commitment to senior citizens' welfare and children's education is commendable and deeply impactful.",
    img: "https://pngimg.com/uploads/student/student_PNG62539.png",
  },
  {
    id: 4,
    name: "josephine ishimwe",
    text: "Participating in SICP's programs has been a privilege. The organization's work in supporting vulnerable groups in Kigali is essential and makes a real difference.",
    img: "https://tse1.mm.bing.net/th?id=OIP.CTsmIkEVMgmpguoOa7iR2gHaKq&pid=Api&P=0&h=180",
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
      
        <div className="text-center mb-10 max-w-[600px] mx-auto -mt-8">
          <p data-aos="fade-up" className="text-sm text-primary">
            Making a Difference Together
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            What Our Donors Say
          </h1>
          <p data-aos="fade-up" className="text-lg text-gray-400">
            Welcome to our community of kindness and compassion. we believe in
            the power of collective action to change lives. Each donation, big
            or small, is a beacon of hope for those in need. Join us as we
            strive to make the world a better place, one act of generosity at a
            time.
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
                      <p className="text-xs text-white text-gray-500">
                        {data.text}
                      </p>
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
