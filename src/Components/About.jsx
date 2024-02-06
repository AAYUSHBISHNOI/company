
import React, { useContext } from "react";
import { Datatransfer } from "./Datatransfer";

const About = () => {
  function DataContext() {
    return useContext(Datatransfer);
  }
  const { myvalue, alpahvalue ,place ,caste } = DataContext();
  console.log(myvalue, alpahvalue , place ,caste);
  return <div></div>;
};

export default About