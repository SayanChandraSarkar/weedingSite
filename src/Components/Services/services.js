import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div>
      <div className="mt-8 md:mt-12">
        <section className="bg-ffbac2 overflow-hidden rounded-lg pb-8 pt-10 md:pb-12 xl:pb-16">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0"
          >
            <h3
              className="text-left text-4xl text-[40px] leading-relaxed text-[#482326] md:text-[50px] lg:text-center"
              style={{
                // fontSize: "50px",
                fontWeight: "600",
                lineHeight: "90px",
              }}
            >
              Our Services
            </h3>

            <div
              className="mx-auto mt-6 flex flex-col items-center rounded-xl md:flex-row"
              style={{
                backgroundImage:
                  "linear-gradient(322.97deg, rgba(255, 186, 194, 0.273) 107.43%, rgba(254, 127, 127, 0.231) 108.33%, rgba(178, 34, 34, 0.231) 110.81%, rgba(71, 71, 71, 0.28) 112.99%, rgba(255, 255, 255, 0.063) 168.2%, rgba(255, 255, 255, 0) 171.38%, rgba(255, 255, 255, 0.119) 187.57%)",
              }}
            >
              <div className="flex items-center justify-center p-12">
                <img
                  src="/image/Services/Service1.png"
                  className="w-[300px]"
                  alt=""
                />
              </div>

              <div className="flex flex-col items-center justify-center pl-0 md:w-1/2 lg:pl-15">
                <h3 className="custom-heading mb-4 text-center text-3xl font-semibold leading-relaxed text-[#482326]">
                  Heading
                </h3>

                <p
                  className="text-1xl p-6 text-left text-[18px] leading-relaxed text-[#482326] md:text-[23px]"
                  style={{
                    fontFamily: "Poppins",
                    // fontSize: "23px",
                    fontStyle: "italic",
                    fontWeight: 400,
                    lineHeight: "34.5px",
                    marginTop: "-20px",
                  }}
                >
                  From stunning bridal gowns that epitomize romance to
                  impeccably tailored suits that exude charm and confidence, we
                  cater to every style and vision. Let us be part of your
                  special day, and together, we'll create memories to last a
                  lifetime. Visit us today and experience the epitome of bridal
                  elegance.
                </p>
              </div>
            </div>
          </motion.div>
        </section>
      </div>

      <div className="mt-8 md:mt-12">
        <section className="bg-ffbac2 overflow-hidden rounded-lg pb-8 pt-8 md:pb-12 xl:pb-16">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0"
          >
            <div
              className="mx-auto flex flex-col items-center rounded-xl md:flex-row"
              style={{
                backgroundImage:
                  "linear-gradient(322.97deg, rgba(255, 186, 194, 0.273) 107.43%, rgba(254, 127, 127, 0.231) 108.33%, rgba(178, 34, 34, 0.231) 110.81%, rgba(71, 71, 71, 0.28) 112.99%, rgba(255, 255, 255, 0.063) 168.2%, rgba(255, 255, 255, 0) 171.38%, rgba(255, 255, 255, 0.119) 187.57%)",
              }}
            >
              <div className="flex items-center justify-center p-12">
                <img
                  src="/image/Services/Service2.png"
                  className="w-[300px]"
                  alt=""
                />
              </div>

              <div className="flex flex-col items-center justify-center pl-0 md:w-1/2 lg:pl-15">
                <h3 className="custom-heading mb-4 text-center text-3xl font-semibold leading-relaxed text-[#482326]">
                  Heading
                </h3>

                <p
                  className="text-1xl p-6 text-left text-[18px] leading-relaxed text-[#482326] md:text-[23px]"
                  style={{
                    fontFamily: "Poppins",
                    // fontSize: "23px",
                    fontStyle: "italic",
                    fontWeight: 400,
                    lineHeight: "34.5px",
                    marginTop: "-20px",
                  }}
                >
                  From stunning bridal gowns that epitomize romance to
                  impeccably tailored suits that exude charm and confidence, we
                  cater to every style and vision. Let us be part of your
                  special day, and together, we'll create memories to last a
                  lifetime. Visit us today and experience the epitome of bridal
                  elegance.
                </p>
              </div>
            </div>
          </motion.div>
        </section>
      </div>

      <div className="mt-8 md:mt-12">
        <section className="bg-ffbac2 overflow-hidden rounded-lg pb-8 pt-8 md:pb-12 xl:pb-16">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0"
          >
            <div
              className="mx-auto flex flex-col items-center rounded-xl md:flex-row"
              style={{
                backgroundImage:
                  "linear-gradient(322.97deg, rgba(255, 186, 194, 0.273) 107.43%, rgba(254, 127, 127, 0.231) 108.33%, rgba(178, 34, 34, 0.231) 110.81%, rgba(71, 71, 71, 0.28) 112.99%, rgba(255, 255, 255, 0.063) 168.2%, rgba(255, 255, 255, 0) 171.38%, rgba(255, 255, 255, 0.119) 187.57%)",
              }}
            >
              <div className="flex items-center justify-center p-12">
                <img
                  src="/image/Services/Service3.png"
                  className="w-[300px]"
                  alt=""
                />
              </div>

              <div className="flex flex-col items-center justify-center pl-0 md:w-1/2 lg:pl-15">
                <h3 className="custom-heading mb-4 text-center text-3xl font-semibold leading-relaxed text-[#482326]">
                  Heading
                </h3>

                <p
                  className="text-1xl p-6 text-left text-[18px] leading-relaxed text-[#482326] md:text-[23px]"
                  style={{
                    fontFamily: "Poppins",
                    // fontSize: "23px",
                    fontStyle: "italic",
                    fontWeight: 400,
                    lineHeight: "34.5px",
                    marginTop: "-20px",
                  }}
                >
                  From stunning bridal gowns that epitomize romance to
                  impeccably tailored suits that exude charm and confidence, we
                  cater to every style and vision. Let us be part of your
                  special day, and together, we'll create memories to last a
                  lifetime. Visit us today and experience the epitome of bridal
                  elegance.
                </p>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Services;
