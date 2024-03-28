import React from 'react'

const Setting = () => {
  return (
    <div className="setting">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Settings</h1>

        {/* General Settings */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">General Settings</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="siteName">Site Name</label>
              <input
                type="text"
                id="siteName"
                name="siteName"
                value={generalSettings.siteName}
                onChange={handleGeneralSettingsChange}
                className="w-full p-2 border rounded"
              />
            </div>
            {/* Add more input fields for other general settings */}
          </div>
        </div>

        {/* Account Settings */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
          <div>
            <label
              htmlFor="emailNotifications"
              className="flex items-center mb-2"
            >
              <input
                type="checkbox"
                id="emailNotifications"
                name="emailNotifications"
                checked={accountSettings.emailNotifications}
                onChange={handleAccountSettingsChange}
                className="mr-2"
              />
              Receive Email Notifications
            </label>
          </div>
          {/* Add more input fields for other account settings */}
        </div>

        {/* Payment Settings */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Payment Settings</h2>
          {/* Add payment settings components */}
        </div>

        {/* Buttons */}
        <div className="flex justify-end">
          <button
            onClick={saveSettings}
            className="px-4 py-2 bg-blue-500 text-white rounded mr-4"
          >
            Save
          </button>
          <button
            onClick={cancelSettings}
            className="px-4 py-2 bg-gray-300 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Setting
