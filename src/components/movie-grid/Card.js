import React from "react";

export function Card({ movie }) {
  const loadImage = (name) => {
    try {
      return require(`../../slices/${name}`).default;
    } catch {
      return require(`../../slices/placeholder_for_missing_posters.png`)
        .default;
    }
  };
  return (
    <div className="text-left">
      <img
        alt={movie.name}
        src={loadImage(movie["poster-image"])}
        className="inline"
      />
      <p className="text-xs truncate">{movie.name}</p>
    </div>
  );
}
