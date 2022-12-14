import React from "react";
import banner from "../assets/images/banner.jpg";
import { motion } from "framer-motion";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";

const BannerHero = () => {
  return (
    <div className="flex flex-col">
      <img
        src={banner}
        className="bg-fixed bg-center bg-no-repeat bg-cover w-full"
        alt=""
      />
      <div className="flex w-full bg-white py-6 md:px-24 md:py-12 mx-auto justify-between flex-col items-center md:flex-row ">
        <p className="w-4/5 leading-relaxed text-center text-md text-blue mb-6 font-montserrat font-semibold items-center sm:text-lg md:text-left md:mr-6 md:mb-0 lg:text-xl lg:w-full">
          <span className="text-red">Valorant</span> é um jogo eletrônico
          multijogador gratuito para jogar de tiro em primeira pessoa
          desenvolvido e publicado pela{" "}
          <span className="underline underline-offset-4 decoration-red decoration-2">
            Riot Games
          </span>
          . Você terá no mínimo 13 rodadas para atacar e defender com disparos
          certeiros e habilidades táticas. Com apenas uma vida por rodada, você
          deve pensar mais rápido que o oponente se quiser sobreviver. Encare
          inimigos nos modos Competitivo e Sem Ranque, além da Disputa da Spike
          e do Mata-Mata!
        </p>
        <a
          href="https://playvalorant.com/pt-br/"
          rel="noreferrer"
          target="_blank"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              ease: "easeIn",
            }}
            className="bg-blue hover:bg-blue-dark hover:text-blue-light cursor-pointer whitespace-nowrap flex flex-col items-center justify-center transition-all duration-500 hover:shadow-xl hover:shadow-blue-light py-2 px-8 md:px-6 text-white h-20 sm:h-32 md:auto"
          >
            <h3 className="mb-2 font-montserrat sm:mb-4 text-md sm:text-xl">
              Começe a jogar
            </h3>
            <RocketLaunchIcon className="h-5 w-5 sm:h-6 sm:w-6 mx-auto text-blue-light" />
          </motion.div>
        </a>
      </div>
    </div>
  );
};

export default BannerHero;
