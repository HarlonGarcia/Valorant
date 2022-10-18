import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import BannerHero from "../../components/BannerHero";
import AnimatedBg from "../../components/AnimatedBg/AnimatedBg";
import killjoy from "../../assets/images/killjoy.png";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import MapCarousel from "../../components/MapCarousel";
import Footer from "../../components/Footer";
import logo from "../../assets/images/valorant-logotipo.svg";
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
    <>
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
            <div className="flex flex-col py-2 px-8 items-center mb-6 sm:mb-4 sm:px-8 sm:flex-row">
              <img
                src={killjoy}
                alt="killjoy"
                className="w-36 h-auto mb-4 sm:mr-8 sm:mb-0 md:w-52"
              />
              <p className="text-white text-md text-center font-montserrat sm:text-left sm:text-lg lg:text-xl">
                Mais do que armas e munição,{" "}
                <span className="font-semibold text-blue-light bg-white/10 p-1">
                  Valorant
                </span>{" "}
                inclui agentes com habilidades adaptativas, rápidas e letais,
                que criam oportunidades para você exibir sua mecânica de tiro.
                Cada Agente é único, assim como os momentos de destaque de cada
                partida!
                <br></br>
                <br></br>
                Mas é claro...a vitória vai depender da sua criatividade, do
                trabalho em equipe e da sua precisão!
              </p>
            </div>
            <Link to="/agents">
              <button className="btn text-md sm:text-lg lg:text-xl font-montserrat text-white px-4 mx-2 w-52 py-2 h-16 sm:w-80 lg:w-96">
                Conheça todos os agentes
              </button>
            </Link>
          </div>
        </div>
        <div className="relative overflow-hidden flex justify-center h-auto w-full text-white bg-gradient-to-t from-red-darker to-red font-montserrat px-12 py-8 sm:px-20 md:px-28 md:py-12">
          <motion.div
            ref={mapsRef}
            style={{
              transform: mapsInView ? "none" : "translateX(100px)",
              opacity: mapsInView ? 1 : 0,
              transition: "all 0.7s cubic-bezier(.32,-0.01,0,1.01) 0.5s",
            }}
            className="flex flex-col items-center z-10 justify-center sm:items-start md:w-4/5 lg:w-2/3"
          >
            <h3 className="text-3xl font-black -mb-3.5 -ml-1.5 z-10 text-shadow-md sm:text-4xl md:text-5xl md:text-shadow-lg">
              Mapas
            </h3>
            <MapCarousel maps={maps} />
          </motion.div>
          <span
            translate="no"
            className="font-syne text-8xl text-white/10 absolute top-0 z-0 sm:text-10xl md:text-12xl"
          >
            VALORANT
          </span>
          <span
            translate="no"
            className="font-syne text-8xl text-white/10 absolute bottom-0 left-0 z-0 sm:left-10 sm:text-9xl md:text-12xl"
          >
            MAPS
          </span>
          <span>
            <img
              className="h-24 sm:h-48 md:w-60 lg:w-96 absolute bottom-10 right-0 lg:right-10"
              src={logo}
              alt="valorant logo"
            />
          </span>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
