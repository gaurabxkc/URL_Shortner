// src/apis/urlApi.js
// API functions to connect frontend to backend

const BASE_URL = 'http://localhost:3000'; // Change port if your backend runs on a different port

export async function createShortUrl(longUrl) {
   const response = await fetch(`${BASE_URL}/api/shorten`, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify({ longUrl }),
   });
   return response.json();
}

export async function getShortUrl(shortCode) {
   const response = await fetch(`${BASE_URL}/api/${shortCode}`);
   return response.json();
}
