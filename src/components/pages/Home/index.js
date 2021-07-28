import React from "react";

import Navbar from "../../ui/organisms/navbar";
import Hero from "../../ui/organisms/hero";
import Category from "../../ui/organisms/category"

import "../../../assets/scss/_home.scss"

const index = () => {
  return (
    <>
      <div className="bg-decore">
        <Navbar />
        <Hero />
      </div>
      <Category/>
    </>
  );
};

export default index;
