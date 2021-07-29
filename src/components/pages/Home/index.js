import React from "react";

import Navbar from "../../ui/organisms/navbar";
import Hero from "../../ui/organisms/hero";
import Category from "../../ui/organisms/category"
import TopSelling from "../../ui/organisms/topSelling"
import BookTrip from "../../ui/organisms/bookTrip"

import "../../../assets/scss/_home.scss"

const index = () => {
  return (
    <>
      <div className="bg-decore">
        <Navbar />
        <Hero />
      </div>
      <Category/>
      <TopSelling/>
      <BookTrip/>
    </>
  );
};

export default index;
