"use client";
import { VscSearch } from "react-icons/vsc";
import { CounterContext } from "@/context/counter.context";
import React, { useContext, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const { stateSearch, setStateSearch, search, setSearch } =
    useContext(CounterContext);

  return (
    <div className="w-full ">
      <div className="m-5 flex justify-between flex-wrap">
        <div className="flex items-center text-3xl text-center">
          <div className="mr-3">
          <Image src="/logo.jpg" width={60} height={60} alt="Fortunesoft"/>
          </div>
          <div>
          <h1>WOOKIES</h1>
          <h1>MOVIES</h1>
          </div>
        </div>
        <div className="flex items-end">
          <button onClick={() => setSearch(stateSearch)}>
            <VscSearch className="text-2xl mr-3 font-bold" />
          </button>
          <input
            className="input"
            type="text"
            onChange={(e) => setStateSearch(e.target.value)}
            placeholder="Search by Full Name"
          ></input>
        </div>
      </div>
      <hr className="hr" />
    </div>
  );
}
