import React from "react";
import "./Home.css";
import BannerHero from "../../components/BannerHero";
import AnimatedBg from "../../components/AnimatedBg/AnimatedBg";
import killjoy from "../../assets/images/killjoy.png";
import { Link } from "react-router-dom";

const Home = () => {
  /*var requestAnimationFrame = window.requestAnimationFrame || 
                            window.mozRequestAnimationFrame || 
                            window.webkitRequestAnimationFrame ||
                            window.msRequestAnimationFrame;
 
var bodyElement = document.querySelector("body");
var floatie = document.querySelector("#floatie");
 
 
var currentScrollPosition;
var iteration;
var start = false;
 
function setup() {
    // do something when the up arrow is clicked
    floatie.addEventListener("click", animateToTopOfPage, false);
     
    // deal with the mouse wheel
    bodyElement.addEventListener("mousewheel", stopEverything, false);
    bodyElement.addEventListener("DOMMouseScroll", stopEverything, false);
     
    // wheeeeeeee!
    animationLoop();
}
setup();
 
//
// kick of the animation to scroll your window back to the top
//
function animateToTopOfPage(e) {
    currentScrollPosition = getScrollPosition();
     
    start ^= true;
    iteration = 0;
}
 
//
// stop the animation and reset start and iteration
//
function stopEverything() {
    start = false;
}
 
//
// a cross-browser (minus Opera) way of getting the current scroll position
//
function getScrollPosition() {
    if (document.documentElement.scrollTop == 0) {
        return document.body.scrollTop;
    } else {
        return document.documentElement.scrollTop;
    }
}
 
//
// kicks into high gear only when the start variable is true
//
function animationLoop() {
    // start is true when you click on the up arrow
    if (start) {
        // where the magic happens                           
        window.scrollTo(0, easeOutCubic(iteration, 
                                        currentScrollPosition,
                                        -currentScrollPosition, 
                                        50));
         
        iteration++;
         
        // once you reach the top of the document, stop the scrolling
        if (getScrollPosition() <= 0) {
            stopEverything();
        }
    }
    requestAnimationFrame(animationLoop);
}
*/

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
