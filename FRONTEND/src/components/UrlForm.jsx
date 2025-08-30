import React from "react";

const UrlForm = ({ longUrl, setLongUrl, handleShorten, loading }) => {
  return (
    <div>
      <input type="url" placeholder="Enter your long URL" value={longUrl} onChange={(e) => setLongUrl(e.target.value)} className="w-full p-3 border text-white border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-3 focus:ring-teal-500 transition" />
      <button
        onClick={handleShorten}
        disabled={loading}
        className={`w-full py-3 rounded-lg font-semibold shadow-md transition
          ${loading ? "bg-white cursor-not-allowed" : "bg-teal-600 hover:bg-teal-800 text-white"}`}
      >
        {loading ? "Shortening..." : "Shorten URL"}
      </button>
    </div>
  );
};

export default UrlForm;
