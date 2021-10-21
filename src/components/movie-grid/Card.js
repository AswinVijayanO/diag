import React, { useState } from "react";

export function Card({ movie }) {
    const [loaded,setLoaded] = useState(false)
  const loadImage = (name) => {
    try {
      return require(`../../slices/${name}`).default;
    } catch {
      return require(`../../slices/placeholder_for_missing_posters.png`)
        .default;
    }
  };
  const handleOnLoad = () => {
    setLoaded(true);
  };
  return (
    <div className="text-left">
      <img
        alt={movie.name}
        onLoad={handleOnLoad}
        src={loadImage(movie["poster-image"])}
        style={{width:172}}
        className={loaded?"h-30 w-15 inline":"h-30 w-15 bg-white"}
      />
      <p className="text-xs truncate">{movie.name}</p>
    </div>
  );
}
