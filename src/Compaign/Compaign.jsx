
import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const App = () => {
  const [donors, setDonors] = useState([
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
  ]);

  const [campaigns, setCampaigns] = useState([
    { id: 1, name: "Education Campaign", total: 5000 },
    { id: 2, name: "Healthcare Campaign", total: 3000 },
  ]);

  const [fundraisers, setFundraisers] = useState([
    { id: 1, name: "Charity Gala", total: 10000 },
    { id: 2, name: "Walkathon", total: 8000 },
  ]);

  const beneficiaryGroups = [
    "Children and Students",
    "Youth",
    "Women",
    "Patients",
  ];

  const handleDonation = (
    amount,
    campaignId,
    fundraiserId,
    beneficiaryGroup
  ) => {
    // Update campaign total
    const updatedCampaigns = campaigns.map((campaign) =>
      campaign.id === campaignId
        ? { ...campaign, total: campaign.total + amount }
        : campaign
    );
    setCampaigns(updatedCampaigns);

    // Update fundraiser total
    const updatedFundraisers = fundraisers.map((fundraiser) =>
      fundraiser.id === fundraiserId
        ? { ...fundraiser, total: fundraiser.total + amount }
        : fundraiser
    );
    setFundraisers(updatedFundraisers);

    // Add new donor
    const newDonor = {
      id: donors.length + 1,
      name: `Donor ${donors.length + 1}`,
    };
    setDonors([...donors, newDonor]);

    console.log(`Donated $${amount} to ${beneficiaryGroup} group.`);
  };

  return (
    <>
     <Navbar />
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Donors</h2>
            <ul className="space-y-2">
              {donors.map((donor) => (
                <li key={donor.id} className="text-gray-700">
                  {donor.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Campaigns</h2>
            <ul className="space-y-2">
              {campaigns.map((campaign) => (
                <li key={campaign.id} className="text-gray-700">
                  {campaign.name} (Total: ${campaign.total})
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Fundraisers</h2>
            <ul className="space-y-2">
              {fundraisers.map((fundraiser) => (
                <li key={fundraiser.id} className="text-gray-700">
                  {fundraiser.name} (Total: ${fundraiser.total})
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Beneficiary Groups</h2>
            <ul className="space-y-2">
              {beneficiaryGroups.map((group, index) => (
                <li key={index} className="text-gray-700">
                  {group}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-primary mb-6 text-center">
            Make a Donation
          </h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const amount = parseInt(e.target.elements.amount.value);
              const campaignId = parseInt(e.target.elements.campaignId.value);
              const fundraiserId = parseInt(
                e.target.elements.fundraiserId.value
              );
              const beneficiaryGroup = e.target.elements.beneficiaryGroup.value;
              handleDonation(
                amount,
                campaignId,
                fundraiserId,
                beneficiaryGroup
              );
              e.target.reset();
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div>
              <label
                htmlFor="amount"
                className="block font-bold text-gray-700 mb-2"
              >
                Amount:
              </label>
              <input
                type="number"
                id="amount"
                name="amount"
                className="border-2 border-blue-600 px-3 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div>
              <label
                htmlFor="campaignId"
                className="block font-bold text-gray-700 mb-2"
              >
                Campaign:
              </label>
              <select
                id="campaignId"
                name="campaignId"
                className="border-2 border-blue-600 px-3 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              >
                <option value="">Select a campaign</option>
                {campaigns.map((campaign) => (
                  <option key={campaign.id} value={campaign.id}>
                    {campaign.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="fundraiserId"
                className="block font-bold text-gray-700 mb-2"
              >
                Fundraiser:
              </label>
              <select
                id="fundraiserId"
                name="fundraiserId"
                className="border-2 border-blue-600 px-3 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              >
                <option value="">Select a fundraiser</option>
                {fundraisers.map((fundraiser) => (
                  <option key={fundraiser.id} value={fundraiser.id}>
                    {fundraiser.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="beneficiaryGroup"
                className="block font-bold text-gray-700 mb-2"
              >
                Beneficiary Group:
              </label>
              <select
                id="beneficiaryGroup"
                name="beneficiaryGroup"
                className="border-2 border-blue-600 px-3 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              >
                <option value="">Select a beneficiary group</option>
                {beneficiaryGroups.map((group, index) => (
                  <option key={index} value={group}>
                    {group}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="bg-primary text-white font-bold py-3 rounded-md hover:bg-blue-700 mt-4 w-96"
            >
              Donate
            </button>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
