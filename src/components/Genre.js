"use client";
import axios from "axios";
import { CounterContext } from "@/context/counter.context";
import { useContext } from "react";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Footer from "./Footer";

export default function Genre({ title }) {
  const [movieList, setMovieList] = useState({ movies: [] }); // Initialize with an empty array
  const { stateSearch, setStateSearch, search, setSearch } =
    useContext(CounterContext);
  const customHeaders = {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_SECRET_KEY}`,
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
      items: 5.5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4.5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2.5,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.5,
    },
  };

  return (
    <div className="w-full">
      <h1 className="text-3xl m-5 mb-0">{title}</h1>
      <Carousel 
        center
        responsive={responsive}
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className="ml-5"
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
      >
        {movieList.movies
          .filter((movie) => movie.title === search || search==="")
          .filter((movie) => movie.genres[0] === title)
          .map((movie, index) => (
            <div key={index} >
              <img className="w-4/5  mt-0 shadow-md" src={movie.backdrop} alt="movie" />
              <p>{movie.title}</p>
            </div>
          ))}

      </Carousel>
    </div>
  );
}
