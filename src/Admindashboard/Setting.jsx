import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Setting = () => {
  return (
    <div className="setting-user">
      <div className="information-part flex">
        <div className="setting-right-side ml-16">
          <h4 className="profile-setting-tile mt-16 ml-8">profile</h4>
          <span className="setting-info-title ml-8 text-gray-700">
            This information will be displayed publicly be careful what you
            share
          </span>
          <form className="settings-tab-form ml-8 mt-16">
            <div className="row flex gap-4">
              <div className="col flex-1">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full p-2 border border-gray-300 mb-4"
                />
              </div>
              <div className="col flex-1">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full p-2 border border-gray-300 mb-4"
                />
              </div>
            </div>

            <div className="row flex gap-4">
              <div className="col flex-1">
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
              <div className="col flex-1">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Your phone number"
                  className="w-full p-2 border border-gray-300 mb-4"
                />
              </div>
            </div>

            <span className="personal-address mr-8 mt-10">personal address</span>
   

            <div className="row flex gap-4">
              <div className="col flex-1">
                <input
                  type="text"
                  id="country"
                  name="country"
                  placeholder="Your country"
                  className="w-full p-2 border border-gray-300 mb-4"
                />
              </div>
              <div className="col flex-1">
                <input
                  type="text"
                  id="province"
                  name="province"
                  placeholder="Province"
                  className="w-full p-2 border border-gray-300 mb-4"
                />
              </div>
            </div>

            <div className="row flex gap-4">
              <div className="col flex-1">
                <input
                  type="text"
                  id="district"
                  name="district"
                  placeholder="District"
                  className="w-full p-2 border border-gray-300 mb-4"
                />
              </div>
              <div className="col flex-1">
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
              <button className="saving py-4 px-10 bg-purple-700 text-white border border-white">
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
