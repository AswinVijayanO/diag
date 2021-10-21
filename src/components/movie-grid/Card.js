import React from "react";
const addFallback = (ev)=>{
    ev.target.src = '/slices/placeholder_for_missing_posters.png'
  }
export function Card({ movie }) {
    return (<div  className="text-left">
        <img alt={movie.name} onError={addFallback} src={`/slices/${movie["poster-image"]}`} className="inline" />
        <p className="text-xs truncate">{movie.name}</p>
    </div>);
}
