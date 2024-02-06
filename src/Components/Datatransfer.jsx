import { useState, createContext, useContext } from "react";

export const Datatransfer = createContext();

export default function DataHelp({ children }) {
  const myvalue = { age: "20" };
  const alpahvalue = { name: "aayush" };
  const place = { address: "gusaiana"};
  const caste = {caste : "bishnoi"};
  const value = { myvalue, alpahvalue , place ,caste };
  return (
    <Datatransfer.Provider value={value}>{children}</Datatransfer.Provider>
  );
}