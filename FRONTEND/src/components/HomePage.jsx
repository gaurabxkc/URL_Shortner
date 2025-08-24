import React from "react";
import UrlForm from "./UrlForm";
import ShortUrlDisplay from "./ShortUrlDisplay";

export default function HomePage({ longUrl, setLongUrl, handleShorten, loading, error, shortUrl }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md transform transition duration-500 hover:scale-105">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">URL Shortener</h1>

        <UrlForm
          longUrl={longUrl}
          setLongUrl={setLongUrl}
          handleShorten={handleShorten}
          loading={loading}
        />

        {error && <p className="text-red-500 mt-4 text-center">{error}</p>}

        {shortUrl && <ShortUrlDisplay shortUrl={shortUrl} />}
      </div>
    </div>
  );
}
