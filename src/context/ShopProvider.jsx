import { createContext } from "preact";
import React from "react";

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const eventW = () => {
    console.log("yes");
  };
  const value = { eventW };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
