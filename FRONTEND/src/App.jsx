import React, { useState } from "react";
import HomePage from "./components/HomePage";
import axios from "axios";

function App() {
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
      const response = await axios.post("http://localhost:3000/api/create", { longUrl });
      setShortUrl(response.data.shortUrl);
    } catch (err) {
      setError("Failed to shorten URL. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <HomePage
      longUrl={longUrl}
      setLongUrl={setLongUrl}
      handleShorten={handleShorten}
      loading={loading}
      error={error}
      shortUrl={shortUrl}
    />
  );
}

export default App;
