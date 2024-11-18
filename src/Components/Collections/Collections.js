import React from "react";
import { motion } from "framer-motion";

const Collections = () => {
  return (
    <div>
      <div className="mt-8 md:mt-12">
        <section className="overflow-hidden pb-8 pt-8 md:pb-12 xl:pb-16">
          <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
            <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-between md:flex-row">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-ffbac2 relative flex items-center justify-center rounded-lg  md:w-1/2 md:pl-8"
              >
                <div
                  className="rounded-xl  p-10 text-center md:p-20"
                  style={{
                    backgroundImage:
                      "linear-gradient(322.97deg, rgba(255, 186, 194, 0.273) 107.43%, rgba(254, 127, 127, 0.231) 108.33%, rgba(178, 34, 34, 0.231) 110.81%, rgba(71, 71, 71, 0.28) 112.99%, rgba(255, 255, 255, 0.063) 168.2%, rgba(255, 255, 255, 0) 171.38%, rgba(255, 255, 255, 0.119) 187.57%)",
                  }}
                >
                  <h3
                    className="mb-10 text-[30px] md:text-[40px]"
                    style={{
                      fontFamily: "Calibri",
                      // fontSize: "40px",
                      fontStyle: "italic",
                      fontWeight: "400",
                      lineHeight: "48.83px",
                      textAlign: "center",
                    }}
                  >
                    Woman’s collection
                  </h3>
                  <p
                    className="text-1xl text-[18px] leading-relaxed md:text-[23px]"
                    style={{
                      fontFamily: "Poppins",
                      // fontSize: "23px",
                      fontStyle: "italic",
                      fontWeight: "400",
                      lineHeight: "34.5px",
                      textAlign: "left",
                    }}
                  >
                    From stunning bridal gowns that epitomize romance to
                    impeccably tailored suits that exude charm and confidence,
                    we cater to every style and vision. Let us be part of your
                    special day, and together, we'll create memories to last a
                    lifetime. Visit us today and experience the epitome of
                    bridal elegance.
                  </p>

                  <div
                    className="absolute bottom-0 left-0 h-8 w-40 bg-opacity-50"
                    style={{
                      transform: "rotate(-30deg)",
                      left: "-50px",
                      bottom: "20px",
                      backgroundImage:
                        "linear-gradient(322.97deg, rgba(255, 186, 194, 0.273) 107.43%, rgba(254, 127, 127, 0.231) 108.33%, rgba(178, 34, 34, 0.231) 110.81%, rgba(71, 71, 71, 0.28) 112.99%, rgba(255, 255, 255, 0.063) 168.2%, rgba(255, 255, 255, 0) 171.38%, rgba(255, 255, 255, 0.119) 187.57%)",
                    }}
                  ></div>
                </div>

                <img
                  src="/image/Collections/flowers.png"
                  alt="Flower"
                  className="w-91.16 h-212.59 absolute bottom-[-20px] left-[-30px] w-[100px] opacity-100"
                />
              </motion.div>
              <div
                className="!md:w-[500] flex w-[362px] items-center justify-center"
                style={{
                  // width: "500px",
                  gap: "0px",
                  opacity: "0px",
                }}
              >
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  src="/image/Collections/Woman.png"
                  className="w-42 md:w-84 pt-16"
                  alt="Woman Collection Image"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-8 md:mt-12">
        <section className="overflow-hidden pb-8 pt-8 md:pb-12 xl:pb-16">
          <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
            <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-between md:flex-row">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-ffbac2 flex items-center justify-center rounded-lg md:w-1/2 md:pl-8"
              >
                <div className="relative">
                  <div
                    className="relative rounded-xl p-10 text-center md:p-20"
                    style={{
                      backgroundImage:
                        "linear-gradient(322.97deg, rgba(255, 186, 194, 0.273) 107.43%, rgba(254, 127, 127, 0.231) 108.33%, rgba(178, 34, 34, 0.231) 110.81%, rgba(71, 71, 71, 0.28) 112.99%, rgba(255, 255, 255, 0.063) 168.2%, rgba(255, 255, 255, 0) 171.38%, rgba(255, 255, 255, 0.119) 187.57%)",
                    }}
                  >
                    <h3
                      className="mb-10 text-[30px] md:text-[40px]"
                      style={{
                        fontFamily: "Calibri",
                        // fontSize: "40px",
                        fontStyle: "italic",
                        fontWeight: "400",
                        lineHeight: "48.83px",
                        textAlign: "center",
                      }}
                    >
                      Man’s collection
                    </h3>
                    <p
                      className="text-1xl text-[18px] leading-relaxed md:text-[23px]"
                      style={{
                        fontFamily: "Poppins",
                        // fontSize: "23px",
                        fontStyle: "italic",
                        fontWeight: "400",
                        lineHeight: "34.5px",
                        textAlign: "left",
                      }}
                    >
                      From stunning bridal gowns that epitomize romance to
                      impeccably tailored suits that exude charm and confidence,
                      we cater to every style and vision. Let us be part of your
                      special day, and together, we'll create memories to last a
                      lifetime. Visit us today and experience the epitome of
                      bridal elegance.
                    </p>
                  </div>

                  {/* Adjusted Tape */}
                  <div
                    className="absolute bottom-0 left-0 h-8 w-40 bg-opacity-50"
                    style={{
                      transform: "rotate(-30deg)",
                      left: "-50px",
                      bottom: "20px",
                      backgroundImage:
                        "linear-gradient(322.97deg, rgba(255, 186, 194, 0.273) 107.43%, rgba(254, 127, 127, 0.231) 108.33%, rgba(178, 34, 34, 0.231) 110.81%, rgba(71, 71, 71, 0.28) 112.99%, rgba(255, 255, 255, 0.063) 168.2%, rgba(255, 255, 255, 0) 171.38%, rgba(255, 255, 255, 0.119) 187.57%)",
                    }}
                  ></div>

                  {/* Flower Image */}
                  <img
                    src="/image/Collections/flowers.png"
                    alt="Flower"
                    className="w-91.16 h-212.59 absolute bottom-[-20px] left-[-30px] w-[100px] opacity-100 md:left-[-50px] "
                  />
                </div>
              </motion.div>

              <div
                className="!md:w-[500] flex w-[362px] items-center justify-center"
                style={{
                  gap: "0px",
                  opacity: "0px",
                }}
              >
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  src="/image/Collections/Man.png"
                  className="w-42 md:w-84 pt-16"
                  alt="man Collection Image"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Collections;
