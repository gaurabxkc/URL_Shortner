import React from "react";

const UrlForm = ({ longUrl, setLongUrl, handleShorten, loading }) => {
  return (
    <div>
      <input type="url" placeholder="Enter your long URL" value={longUrl} onChange={(e) => setLongUrl(e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-4 focus:ring-purple-300 transition" />
      <button
        onClick={handleShorten}
        disabled={loading}
        className={`w-full py-3 rounded-lg font-semibold shadow-md transition
          ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-purple-600 hover:bg-purple-700 text-white"}`}
      >
        {loading ? "Shortening..." : "Shorten URL"}
      </button>
    </div>
  );
};

export default UrlForm;
