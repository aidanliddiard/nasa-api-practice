import React, { useEffect, useState } from "react";
import { fetchIOTD } from "../services/Nasa";

export default function IOTD() {
  const [image, setImage] = useState({});

  useEffect(() => {
    const fetchImage = async () => {
      const resp = await fetchIOTD();
      console.log("resp", resp);
      setImage(resp);
    };
    fetchImage();
  }, []);
  return (
    <div>
      <h3>{image.date}</h3>
      <h2>{image.title}</h2>
      <img src={image.url} />
      <p>{image.explanation}</p>
    </div>
  );
}
