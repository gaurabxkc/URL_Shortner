import React, { useState } from "react";

const ShortUrlDisplay = ({ shortUrl }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-6 bg-black p-4 rounded-xl text-center break-words animate-fadeIn relative">
      <p className="font-semibold text-zinc-200 mb-2">Short URL:</p>
      <a href={shortUrl} target="_blank" rel="noopener noreferrer" className="text-teal-400 font-medium hover:underline">
        {shortUrl}
      </a>
      <button onClick={copyToClipboard} className="absolute top-2 right-2 bg-teal-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-teal-600 transition">
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
};

export default ShortUrlDisplay;
