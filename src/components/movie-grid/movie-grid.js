import React, { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector } from "react-redux";
import { Card } from "./Card";

const MovieGrid = ({ loadNext }) => {
  const { data ,query} = useSelector((state) => state.search);


  return (
    <div>
      {
        query?
        <p className="p-4 text-left text-white">Search results for <b>"{query}"</b></p>
        :<></>
      }
      {
       data&& data.items.length>0?
        <InfiniteScroll
        dataLength={data ? data.items.length : 0}
        next={async() =>{await loadNext(parseInt(data["page"]) + 1)}}
        hasMore={data? data.items.length<data.total:false}
        loader={<h4></h4>}
      >
        {data && (
          <div
            className="grid grid-cols-3 lg:grid-cols-6 gap-x-2 gap-y-3 text-white  p-2"
            id="scrollableDiv"
          >

            {data.items.map((movie, index) => (
              <Card movie={movie} key={`${movie.name}-${index}`}></Card>
            ))}
            
          </div>
        )}
      </InfiniteScroll>
      : <p className="p-4 text-left text-gray-400 text-xs">Nothing found</p>
      }
     
    </div>
  );
};
export default MovieGrid;
