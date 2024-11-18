import React from "react";

const Footer = () => {
  return (
    <>
      <footer
        className=" border-t border-stroke py-8 font-medium lg:py-12"
        style={{ backgroundColor: "rgba(255, 186, 194, 0.7)" }}
      >
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-20">
          <div className="py-6 lg:pt-8">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              <div className="col-span-1 md:col-span-2 lg:col-span-1 ">
                <div className="flex flex-col gap-6">
                  <a href="/" className="relative">
                    <img
                      width={30}
                      height={30}
                      src="/image/footer/facebook.png"
                      alt="Facebook"
                    />
                  </a>
                  <a href="/" className="relative">
                    <img
                      width={30}
                      height={30}
                      src="/image/footer/twitter.png"
                      alt="Twitter"
                    />
                  </a>
                  <a href="/" className="relative">
                    <img
                      width={30}
                      height={30}
                      src="/image/footer/instagram.png"
                      alt="Logo3"
                    />
                  </a>
                </div>
              </div>

              <div className="col-span-1">
                <div className="animate_top">
                  <ul className="text-[#482326]">
                    <li>
                      <a
                        href="#"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Support
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Terms and Conditions
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-span-1">
                <div className="animate_top">
                  <ul className="text-[#482326]">
                    <li>
                      <a
                        href="#"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-span-1">
                <div className="animate_top">
                  <ul className="flex flex-col gap-6 text-[#482326]">
                    <li className="flex items-center">
                      <img
                        width={32}
                        height={31}
                        src="/image/footer/phone.png"
                        alt="Phone Icon"
                        className="mr-2"
                      />
                      <span>91 12345678</span>
                    </li>
                    <li className="flex items-center">
                      <img
                        width={32}
                        height={31}
                        src="/image/footer/email.png"
                        alt="Email Icon"
                        className="mr-2"
                      />
                      <span>123@gmail.com</span>
                    </li>
                    <li className="flex items-center">
                      <img
                        width={32}
                        height={31}
                        src="/image/footer/gps.png"
                        alt="Location Icon"
                        className="mr-2"
                      />
                      <span>India</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col flex-wrap items-center justify-center gap-5 border-t border-stroke py-7 lg:flex-row lg:justify-center lg:gap-0">
            <div class="animate_top">
              <p>&copy; {new Date().getFullYear()} All rights reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
