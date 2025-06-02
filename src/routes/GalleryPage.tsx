import type { FC } from "react";
import { useCatImages } from "../hooks/useCatImage";

export const GallelyPage: FC = () => {
  const { images } = useCatImages();

  return (
    <div className="w-full p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {images.map((cat) => (
        <img
          key={cat.id}
          src={cat.url}
          alt="cat"
          className="rounded shadow-md object-cover w-full h-48"
        />
      ))}
    </div>
  );
};
