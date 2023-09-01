"use client";
import axios from "axios";

import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Gener({title}) {
  const [movieList, setMovieList] = useState({ movies: [] }); // Initialize with an empty array

  const customHeaders = {
    Authorization: "Bearer Wookie2019",
  };

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await axios.get(
          "https://wookie.codesubmit.io/movies",
          {
            headers: customHeaders,
          }
        );

        setMovieList(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchMovies();
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="w-full">
      <h1 className="text-3xl m-5 mb-0">{title}</h1>
       <Carousel responsive={responsive}
    //    swipeable={true}
  draggable={false}
//   showDots={true}
//   responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}> 
      <div className="flex flex-row">
        
          {movieList.movies.filter((movie)=>movie.genres[0]===title).map((movie, index) => (

              <img
                src={movie.backdrop}
                style={{ margin: '20px',marginTop:'0px' , width: '300px' }}
              />
          ))}
        
      </div>
      </Carousel>
    </div>
  );
}