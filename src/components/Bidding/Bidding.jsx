import React from 'react'
 import { useState,useEffect } from 'react';

   const Bidding = () => {
      const [item, setItem] = useState({
        id: 1,
        title: "Vintage Guitar",
        description:
          "A beautifully maintained 1965 Fender Stratocaster in Sunburst finish. Owned by a famous blues guitarist.",
        imageUrl: "https://via.placeholder.com/800x400.png?text=Vintage+Guitar",
        startingBid: 5000,
      });

      const [currentBid, setCurrentBid] = useState(0);
      const [bidAmount, setBidAmount] = useState(0);
      const [bidHistory, setBidHistory] = useState([]);
      const [timeLeft, setTimeLeft] = useState(3600); // 1 hour in seconds

      useEffect(() => {
        setCurrentBid(item.startingBid);
        setBidAmount(item.startingBid + 100);
      }, [item]);

      useEffect(() => {
        const timer = setInterval(() => {
          setTimeLeft((prevTime) => prevTime - 1);
        }, 1000);

        return () => clearInterval(timer);
      }, []);

      const formatTime = (seconds) => {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hrs}:${mins < 10 ? "0" : ""}${mins}:${
          secs < 10 ? "0" : ""
        }${secs}`;
      };

      const placeBid = (e) => {
        e.preventDefault();
        if (bidAmount > currentBid) {
          setCurrentBid(bidAmount);
          setBidHistory([
            ...bidHistory,
            { amount: bidAmount, time: new Date() },
          ]);
          setBidAmount(bidAmount + 100);
        } else {
          alert("Your bid must be higher than the current bid!");
        }
      };

  return (
    <div>
      <div className="font-sans max-w-3xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-center mb-6">{item.title}</h1>

        <img
          src={item.imageUrl}
          alt={item.title}
          className="w-full h-auto rounded-lg shadow-md"
        />

        <p className="mt-4 text-gray-700">{item.description}</p>

        <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg mt-6">
          <span className="text-lg">Current Bid:</span>
          <span className="text-3xl font-bold text-green-600">
            ${currentBid}
          </span>
        </div>

        <p className="mt-4">
          Time Left:{" "}
          <span className="font-semibold">{formatTime(timeLeft)}</span>
        </p>

        <form onSubmit={placeBid} className="flex gap-4 mt-6">
          <input
            type="number"
            value={bidAmount}
            onChange={(e) => setBidAmount(Number(e.target.value))}
            min={currentBid + 1}
            step={1}
            className="flex-1 px-4 py-2 text-lg border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-6 py-2 text-lg bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Place Bid
          </button>
        </form>

        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-4">Bid History</h3>
          {bidHistory.length === 0 ? (
            <p className="text-gray-600 italic">
              No bids yet. Be the first to bid!
            </p>
          ) : (
            <ul>
              {bidHistory.map((bid, index) => (
                <li
                  key={index}
                  className={`flex justify-between items-center px-4 py-3 ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <span className="font-medium">${bid.amount}</span>
                  <span className="text-gray-600 text-sm">
                    {bid.time.toLocaleString()}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="mt-10 p-4 bg-yellow-50 border-l-4 border-yellow-400">
          <h4 className="text-lg font-semibold text-yellow-800">
            Bidding Tips
          </h4>
          <ul className="list-disc list-inside mt-2 text-sm text-yellow-800">
            <li>Set a maximum budget and stick to it.</li>
            <li>Research the item's value before bidding.</li>
            <li>Don't get caught up in bidding wars.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Bidding
