"use client";
import { VscSearch } from "react-icons/vsc";
import { CounterContext } from "@/context/counter.context";
import React, { useContext } from "react";

export default function Header() {
  const { stateSearch, setStateSearch, search, setSearch } =
    useContext(CounterContext);
  return (
    <div className="w-full ">
      <div className="m-5 flex justify-between flex-wrap">
        <div className="text-3xl text-center">
          <h1>WOOKIES</h1>
          <h1>MOVIES</h1>
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
