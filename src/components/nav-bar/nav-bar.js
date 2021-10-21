import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchMovies } from "../../actions";

function Back() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 19l-7-7m0 0l7-7m-7 7h18"
      />
    </svg>
  );
}

function Search() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );
}

const NavBar = () => {
  const { data, query } = useSelector((state) => state.search);

  const dispatch = useDispatch();
  const [search, setSearch] = useState({ query: "", active: false });
  return (
    <nav className="sticky top-0 z-50 flex flex-wrap w-full justify-between items-center py-4 px-2 text-white bg-gradient-to-b from-black  via-black to-transparent ">
      <div className=" flex flex-grow items-center space-x-2">
        <div className="hover:bg-gray-200 hover:bg-opacity-50 hover:backdrop-filter hover:backdrop-blur-md  p-2 rounded-full">
          <Back/>
        </div>

        {search.active ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(searchMovies(search.query));
            }}
          >
            <input
              className="bg-gray-200 backdrop-filter backdrop-blur-md  backdrop-brightness-75 bg-opacity-20  text-sm py-2 px-4 rounded-full w-40 lg:w-100 text-white border-opacity-0 focus:outline-none"
              type="text"
              value={search.query}
              onChange={(e) =>
                setSearch((s) => ({ active: true, query: e.target.value }))
              }
            ></input>
          </form>
        ) : (
          <span>
            <b>{data?.title ? data.title : "Home"}</b>
          </span>
        )}
      </div>

      <span
        className="hover:bg-gray-200 hover:bg-opacity-50 hover:backdrop-filter hover:backdrop-blur-md  p-2 rounded-full"
        onClick={() => {
          setSearch((s) => ({ ...s, active: !s.active }))
          dispatch(searchMovies(null));
      }}
      >
        <Search/>
      </span>
    </nav>
  );
};
export default NavBar;
