import { createContext, useEffect, useState, useContext } from "react";

const MovieContext = createContext({});

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }: { children: React.ReactNode }) => {
  return <MovieContext.Provider value={{}}>{children}</MovieContext.Provider>;
};
