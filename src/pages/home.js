import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { append, setData } from "../actions";
import MovieGrid from "../components/movie-grid/movie-grid";
import NavBar from "../components/nav-bar/nav-bar";
import { getMovies } from "../services/service";
const Home = () => {
  const dispatch = useDispatch();
  const { data ,query} = useSelector((state) => state.search);
  useEffect(()=>{
    const fetch = async ()=>{
      const data = await getMovies(1)
      dispatch(setData(data))
    }
    fetch()
  },[query])
  const loadNext = async (page)=>{
    console.log(page)
    const data = await getMovies(page)
    dispatch(append(data))
  }
  return (
    <div className="h-full "  >
      <NavBar />
      <MovieGrid  loadNext={loadNext}/>
    </div>
  );
};
export default Home;
