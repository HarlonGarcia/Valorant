import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import BannerHero from "../../components/BannerHero";
import AnimatedBg from "../../components/AnimatedBg/AnimatedBg";
import killjoy from "../../assets/images/killjoy.png";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import MapCarousel from "../../components/MapCarousel";
import axios from "axios";

const Home = () => {
  const [maps, setMaps] = useState(null);
  const agentsRef = useRef(null);
  const mapsRef = useRef(null);
  const agentsInView = useInView(agentsRef, { once: true });
  const mapsInView = useInView(mapsRef, { once: true });

  useEffect(() => {
    axios(
      `${process.env.REACT_APP_API_URL}/maps?language=${process.env.REACT_APP_LANG}`
    )
      .then(({ data }) => setMaps(data.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="w-screen md:w-full">
      <BannerHero />
      <div className="h-auto w-full">
        <AnimatedBg />
        <div
          ref={agentsRef}
          style={{
            transform: agentsInView ? "none" : "translateX(-100px)",
            opacity: agentsInView ? 1 : 0,
            transition: "all 0.7s cubic-bezier(.32,-0.01,0,1.01) 0.5s",
          }}
          className="flex flex-col h-full w-full py-6 px-4 justify-center items-center md:px-24 md:py-12"
        >
          <div className="flex flex-col py-2 px-8 items-center mb-6 sm:mb-2 sm:px-8 sm:flex-row">
            <img
              src={killjoy}
              alt=""
              className="w-36 h-auto mb-4 sm:mr-8 sm:mb-0 md:w-52"
            />
            <p className="text-white text-md text-center font-montserrat sm:text-left sm:text-lg ">
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
            <button className="btn text-md sm:text-lg lg:text-xl font-montserrat text-white px-4 mx-2 w-52 py-2 h-16 sm:w-80 lg:w-96">
              Conheça todos os agentes
            </button>
          </Link>
        </div>
      </div>
      <div className="flex justify-center h-auto w-full text-white bg-red font-montserrat px-12 py-8 sm:px-20 md:px-28 md:py-12">
        <motion.div
          ref={mapsRef}
          style={{
            transform: mapsInView ? "none" : "translateX(100px)",
            opacity: mapsInView ? 1 : 0,
            transition: "all 0.7s cubic-bezier(.32,-0.01,0,1.01) 0.5s",
          }}
          className="flex flex-col items-center justify-center sm:items-start md:w-4/5 lg:w-2/3"
        >
          <h3 className="text-3xl font-black -mb-3.5 -ml-1.5 z-10 text-shadow-md sm:text-4xl md:text-5xl md:text-shadow-lg">
            Mapas
          </h3>
          <MapCarousel maps={maps} />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
