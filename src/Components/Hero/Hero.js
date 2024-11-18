import React from "react";
// import { motion, optimizedAppearDataAttribute } from "framer-motion";
// import { Link } from "react-router-dom";

import About from "../About/About";
import Collections from "../Collections/Collections";
import Services from "../Services/services";

const Hero = () => {
  return (
    <div style={{ fontFamily: "Poppins, sans-serif" }}>
      <section className="relative mt-10 pb-8 pt-20 md:mt-20 md:pb-16 xl:pb-20">
        <div
          className="md:padding-[50px] mx-auto max-w-c-1390 md:mt-[100px]"
          style={{
            background:
              "linear-gradient(322.97deg, rgba(255, 186, 194, 0.693) 107.43%, rgba(254, 127, 127, 0.231) 108.33%, rgba(178, 34, 34, 0.231) 110.81%, rgba(71, 71, 71, 0.28) 112.99%, rgba(255, 255, 255, 0.063) 168.2%, rgba(255, 255, 255, 0) 171.38%, rgba(255, 255, 255, 0.119) 187.57%)",
            backgroundPosition: "center",
          }}
        >
          <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
            <div className="w-full rounded-xl  md:w-1/2">
              <div className="absolute left-[14%] top-[-16%] flex h-full items-center justify-center md:left-[10%] md:top-[10%]">
                <img
                  src="/image/Hero/img 1.jpg"
                  className=" h-auto max-h-full w-auto max-w-full "
                  alt="Main"
                  style={{ zIndex: "999" }}
                />
                <img
                  src="/image/Hero/Rectangle 94.png"
                  className=" hidden h-auto max-h-full w-auto max-w-full md:mb-0 md:block"
                  style={{
                    zIndex: "99",
                    position: "absolute",
                    left: "20%",
                    top: "10%",
                  }}
                  alt=""
                />
              </div>
            </div>
            <div className="mt-[22rem] w-full p-8 md:mt-0 md:w-1/2 md:px-8 lg:px-12 xl:px-16">
              <h3
                style={{
                  fontSize: "1.5625rem",
                  fontWeight: 500,
                  lineHeight: "1.5",
                  textAlign: "left",
                }}
                className="mb-6 mt-10 text-[#482326] md:mt-0"
              >
                Elegant Ensembles for Everlasting Moments
              </h3>

              <hr className="w-100 md:w-120 mb-4 h-0.5 border-t border-gray-400 bg-[#482326] text-[18px] md:text-[20px]" />
              <p
                style={{
                  // fontSize: "20px",
                  fontStyle: "italic",
                  fontWeight: 400,
                  lineHeight: "30px",
                  textAlign: "left",
                }}
                className="mt-4 text-base leading-relaxed md:text-lg"
              >
                Step into a world of elegance and sophistication at our premier
                wedding outfit boutique. Whether you're a bride, groom, or part
                of the bridal party, we specialize in crafting exquisite attire
                that captures the essence of your love story.
              </p>
            </div>
          </div>
        </div>
      </section>

      <About />
      <Collections />
      <Services />
    </div>
  );
};

export default Hero;
