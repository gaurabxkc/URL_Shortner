import React, { useState } from "react";
import axios from "axios";
import UrlForm from "../components/UrlForm.jsx";
import ShortUrlDisplay from "../components/ShortUrlDisplay.jsx";

const HomePage = () => {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleShorten = async () => {
    if (!longUrl) return;
    setLoading(true);
    setError("");
    setShortUrl("");

    try {
      const response = await axios.post("http://localhost:3000/api/create", { url: longUrl });
      setShortUrl(response.data);
    } catch (err) {
      setError("Failed to shorten URL. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center  justify-center bg-zinc-800 p-4">
      <div className="bg-black p-8 rounded-2xl shadow-2xl w-full max-w-md transform transition duration-500 hover:scale-105">
        <h1 className="text-3xl font-bold text-center mb-6 text-white">URL Shortener</h1>

        <UrlForm longUrl={longUrl} setLongUrl={setLongUrl} handleShorten={handleShorten} loading={loading} />

        {error && <p className="text-red-500 mt-4 text-center">{error}</p>}

        {shortUrl && <ShortUrlDisplay shortUrl={shortUrl} />}
      </div>
    </div>
  );
};

export default HomePage;
