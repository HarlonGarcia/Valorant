import React from "react";
import "./Home.css";
import BannerHero from "../../components/BannerHero";
import AnimatedBg from "../../components/AnimatedBg/AnimatedBg";
import killjoy from "../../assets/images/killjoy.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-screen md:w-full">
      <BannerHero />
      <div className="h-auto w-full">
        <AnimatedBg />
        <div className="flex flex-col h-full w-full py-6 px-4 justify-center items-center md:px-24 md:py-12">
          <div className="flex flex-col py-2 px-8 items-center mb-6 sm:px-8 sm:flex-row">
            <img
              src={killjoy}
              alt=""
              className="w-36 h-auto mb-4 sm:mr-8 sm:mb-0 md:w-52"
            />
            <p className="text-white text-sm text-center font-montserrat sm:text-left sm:text-lg ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem quam similique nobis sint ut voluptatum? Totam,
              quod sint quis modi eius nisi rem doloribus at esse veniam aut
              soluta praesentium. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Exercitationem quam similique nobis sint ut
              voluptatum? Totam, quod sint quis modi eius nisi rem doloribus at
              esse veniam aut soluta praesentium.
            </p>
          </div>
          <Link to="/agents">
            <button className="btn text-sm sm:text-xl font-montserrat text-white px-4 mx-2 w-52 py-2 h-16 sm:px-0 sm:w-96">
              Conheça todos os agentes
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
