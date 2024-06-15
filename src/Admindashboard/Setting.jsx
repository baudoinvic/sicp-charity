import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Setting = () => {
  return (
    <div className="setting-user">
      <div className="information-part flex flex-col md:flex-row">
        <div className="setting-right-side md:w-2/3 md:ml-16">
          <h4 className="profile-setting-tile mt-8 md:mt-16 ml-4 md:ml-8 text-lg md:text-xl lg:text-2xl">
           Settings
          </h4>
          

          <form className="settings-tab-form ml-8 mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full p-2 border border-gray-300 mb-4"
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full p-2 border border-gray-300 mb-4"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <select
                  id="gender"
                  name="gender"
                  className="w-full p-2 border border-gray-300 mb-4"
                >
                  <option value="gender">Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Your phone number"
                  className="w-full p-2 border border-gray-300 mb-4"
                />
              </div>
            </div>

            <span className="personal-address mr-8 mt-4">personal address</span>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  id="country"
                  name="country"
                  placeholder="Your country"
                  className="w-full p-2 border border-gray-300 mb-4"
                />
              </div>
              <div>
                <input
                  type="text"
                  id="province"
                  name="province"
                  placeholder="Province"
                  className="w-full p-2 border border-gray-300 mb-4"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  id="district"
                  name="district"
                  placeholder="District"
                  className="w-full p-2 border border-gray-300 mb-4"
                />
              </div>
              <div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Your phone number"
                  className="w-full p-2 border border-gray-300 mb-4"
                />
              </div>
            </div>
          </form>

          <div className="cancel flex items-center p-5 ml-4">
            <button className="canceling py-4 px-10 border border-black mr-4">
              Cancel
            </button>
            <div className="save">
              <button className="saving py-4 px-10 bg-primary text-white border border-white">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
