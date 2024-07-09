import React from 'react'
import { Link } from 'react-router-dom';

const Video = () => {
  return (
    <div>
      <div className="relative mt-10">
        <div className="w-full h-screen overflow-hidden">
          <video
            autoPlay
            muted
            loop
            className="w-full h-[500px] sm:h-[550px] object-cover  brightness-50"
          >
            <source
              src="https://videos.ctfassets.net/wvozpes63uc8/3LyhCLp2YLQ02HnzHp5IPw/b98b99451d4472709662737809306735/home-cycle-video.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-white mb-20">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-20">
              We have organized more than 50 events every year
            </h1>
       
              <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-4 px-10  ">
               Read More 
              </button>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video
