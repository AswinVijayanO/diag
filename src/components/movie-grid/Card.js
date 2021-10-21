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
        style={{}}
        className={"inline"}
      />
      {
          !loaded&&<div
          style={{height:200}}
          className="animate-pulse bg-white rounded-sm bg-opacity-60"
          ></div>
      }
      <p className="text-xs truncate">{movie.name}</p>
    </div>
  );
}
