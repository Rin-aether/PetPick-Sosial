import { useEffect, useState } from "react";

type CatImage = {
  id: string;
  url: string;
};

export const useCatImages = () => {
  const [images, setImages] = useState<CatImage[]>([]);

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search?limit=12")
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((err) => console.error(err));
  }, []);

  return { images };
};
