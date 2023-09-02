"use client";

import React, { Dispatch, createContext, useReducer, useState } from "react";

export const CounterContext = createContext();

export const CounterContextProvider = ({ children }) => {
  const [stateSearch, setStateSearch] = useState("");
  const [search, setSearch] = useState("");

  return (
    <CounterContext.Provider
      value={{ stateSearch, setStateSearch, search, setSearch }}
    >
      {children}
    </CounterContext.Provider>
  );
};
