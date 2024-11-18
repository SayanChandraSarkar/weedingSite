import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mt-8 sm:mt-16 md:mt-12">
          <section className="overflow-hidden pb-8 pt-8 md:pb-12 md:pt-12 xl:pb-16">
            <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
              <div className="mx-auto flex flex-col items-center justify-between md:flex-row">
                {/* Background Image */}
                <div className="relative mb-6 w-full overflow-hidden md:block md:w-1/2">
                  <img
                    src="/image/About/background.png"
                    alt="Background"
                    className="inset-0 h-[70%] w-full opacity-30"
                  />
                </div>
                {/* Second Image */}
                <div className="relative flex w-full items-center justify-center md:mb-0 md:w-1/2">
                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    src="/image/About/About1.png"
                    style={{
                      width: "100%",
                      // maxWidth: "395px",
                      height: "auto",
                      // left: "25%",
                      transform: "translateX(-50%)",
                      marginTop: "20px",
                    }}
                    className="absolute left-[50%] h-auto w-auto max-w-[290px] border-[12px] border-white md:left-[25%] md:max-w-[395px]"
                    alt="About Image"
                  />
                </div>
                {/* Text Content */}
                <div className="mt-[60%] pl-0 md:mt-0 md:w-1/2">
                  <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontSize: "40px",
                      fontWeight: "600",
                      lineHeight: "60px",
                      textAlign: "center",
                    }}
                    className="mb-2 text-center text-xl font-bold text-[#482326] md:text-2xl lg:text-3xl"
                  >
                    About Us
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "14px",
                      fontWeight: "300",
                      lineHeight: "18px",
                      textAlign: "center",
                    }}
                    className="mb-2 text-base leading-relaxed text-[#482326] md:text-lg"
                  >
                    Timeless Wedding Elegance
                  </motion.p>
                  <hr className="w-100 md:w-100 mb-4 h-0.5 border-t border-gray-400 bg-[#482326]" />
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    style={{
                      fontFamily: "Poppins",
                      // fontSize: "20px",
                      fontStyle: "italic",
                      fontWeight: "400",
                      lineHeight: "30px",
                      textAlign: "left",
                    }}
                    className="text-[16px] text-base leading-relaxed text-[#482326] md:text-[20px]"
                  >
                    Step into a world of elegance and sophistication at our
                    premier wedding outfit boutique. Whether you're a bride,
                    groom, or part of the bridal party, we specialize in
                    crafting exquisite attire that captures the essence of your
                    love story. Our expert designers blend traditional
                    craftsmanship with contemporary flair, ensuring each piece
                    is a masterpiece tailored to perfection.
                  </motion.p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-8 md:mt-12">
          <section className="pb-8 pt-8 md:pb-12 xl:pb-16">
            <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
              <div className="mx-auto flex flex-col-reverse items-center justify-between md:flex-row">
                {/* Text Content */}
                <div className="mt-8 pl-0 md:w-1/2 md:pl-8">
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    style={{
                      fontFamily: "Poppins",
                      // fontSize: "20px",
                      fontStyle: "italic",
                      fontWeight: "400",
                      lineHeight: "30px",
                      textAlign: "left",
                    }}
                    className="pb-6 text-[16px] text-base leading-relaxed text-[#482326] md:text-[20px]"
                  >
                    Step into a world of elegance and sophistication at our
                    premier wedding outfit boutique. Whether you're a bride,
                    groom, or part of the bridal party, we specialize in
                    crafting exquisite attire that captures the essence of your
                    love story.
                  </motion.p>

                  <hr className="md:w-120 mb-4 h-0.5 w-full border-t border-gray-400 bg-[#482326]" />

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    style={{
                      fontFamily: "Poppins",
                      // fontSize: "20px",
                      fontStyle: "italic",
                      fontWeight: "400",
                      lineHeight: "30px",
                      textAlign: "left",
                    }}
                    className="pb-6 text-[16px] text-base leading-relaxed text-[#482326] md:text-[20px]"
                  >
                    Step into a world of elegance and sophistication at our
                    premier wedding outfit boutique. Whether you're a bride,
                    groom, or part of the bridal party, we specialize in
                    crafting exquisite attire that captures the essence of your
                    love story.
                  </motion.p>

                  <hr className="md:w-120 mb-4 h-0.5 w-full border-t border-gray-400 bg-[#482326]" />
                </div>
                {/* Image */}
                <div className="relative flex w-full items-center justify-center md:w-1/2">
                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    src="/image/About/About2.png"
                    style={{
                      width: "100%",
                      maxWidth: "400px",
                      height: "auto",
                      opacity: "1",
                      zIndex: "999",
                    }}
                    alt="About Image"
                  />
                  <img
                    src="/image/Hero/Rectangle 94.png"
                    className="absolute right-[15%] top-[-8%] hidden h-auto max-h-full w-auto max-w-full md:block md:h-full"
                    style={{
                      zIndex: "99",
                    }}
                    alt=""
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
                <div className="pl-0 md:w-1/2 md:pl-8">
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    style={{
                      fontFamily: "Calibri",
                      // fontSize: "35px",
                      fontStyle: "italic",
                      fontWeight: "700",
                      lineHeight: "42.72px",
                      textAlign: "left",
                      color: "#482326",
                    }}
                    className="text-[25px] leading-relaxed md:text-[35px]"
                  >
                    Visit our other branch, offering the same exceptional
                    quality and trendy fashion selections that you love.
                  </motion.p>
                </div>
                <div className="flex h-full items-center justify-center md:w-1/2">
                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    src="/image/About/About3.png"
                    style={{
                      width: "400px",
                      gap: "0px",
                      borderRadius: "40px 0px 0px 0px",
                      opacity: "0px",
                    }}
                    alt="About Image"
                    className="mt-4 md:mt-0"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
