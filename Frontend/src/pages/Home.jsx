import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Hero from "../component/Hero";
import LatestCollection from "../component/LatestCollection";
import BestSeller from "../component/BestSeller";
import Policy from "../component/Policy";
import Subscribe from "../component/Subscribe";

const Home = () => {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
        });

        setTimeout(() => {
          window.scrollBy({
            top: -60,
            behavior: "smooth",
          });
        }, 500);
      }
    }
  }, [location]);

  return (
    <div>
      <Hero />

      <div id="latest">
        <LatestCollection />
      </div>

      <div id="bestseller">
        <BestSeller />
      </div>

      <Policy />

      <Subscribe />
    </div>
  );
};

export default Home;