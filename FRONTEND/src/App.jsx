import React, { useState } from "react";
import HomePage from "./components/HomePage";
import { createShortUrl } from "./apis/urlApi";

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
      const data = await createShortUrl(longUrl);
      console.log(data);
      if (data.shortUrl) {
        setShortUrl(data.shortUrl);
      } else {
        setError("Failed to shorten URL. Please try again.");
      }
    } catch (err) {
      setError("Failed to shorten URL. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return <HomePage longUrl={longUrl} setLongUrl={setLongUrl} handleShorten={handleShorten} loading={loading} error={error} shortUrl={shortUrl} />;
}

export default App;
