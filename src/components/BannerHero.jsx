import React from "react";
import banner from "../assets/images/banner.jpg";
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
        <p className="w-4/5 text-center text-sm text-blue mb-6 font-montserrat font-semibold items-center sm:text-lg md:text-left md:mr-6 md:mb-0">
          Valorant é um jogo eletrônico multijogador gratuito para jogar de tiro
          em primeira pessoa desenvolvido e publicado pela Riot Games. Você terá
          13 rodadas para atacar e defender com disparos certeiros e habilidades
          táticas. Com apenas uma vida por rodada, você deve pensar mais rápido
          que o oponente se quiser sobreviver. Encare inimigos nos modos
          Competitivo e Sem Ranque, além da Disputa da Spike e do Mata-Mata!
        </p>
        <button className="bg-blue hover:bg-blue-dark py-2 px-12 md:px-6 text-white h-20 sm:h-32 md:block md:auto">
          <h3 className="mb-4 text-sm sm:text-xl">Começe a jogar</h3>
          <RocketLaunchIcon className="h-6 w-6 mx-auto text-blue-light" />
        </button>
      </div>
    </div>
  );
};

export default BannerHero;
