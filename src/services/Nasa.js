const API_KEY = process.env.REACT_APP_NASA_API_KEY;

export async function fetchIOTD() {
  const image = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
  );
  const resp = await image.json();
  return resp;
}
