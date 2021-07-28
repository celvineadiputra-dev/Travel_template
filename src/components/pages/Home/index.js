import React from "react";

import Navbar from "../../ui/organisms/navbar";
import Hero from "../../ui/organisms/hero";

import "../../../assets/scss/_home.scss"

const index = () => {
  return (
    <>
      <div className="bg-decore">
        <Navbar />
        <Hero />
      </div>
    </>
  );
};

export default index;
