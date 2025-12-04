/*****************************************
 * Created On: 2025 / 12 / 01
 * Last Modified: 2025 / 12 / 04
 * 
 * Author: Ané Burger t.a. Arroww Web Dev
 * 
******************************************/

import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <section className="bg-[#91A083] text-[#F0F6EA] font-montserrat">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 items-center gap-6 lg:gap-8 px-6 lg:px-8 py-10 lg:py-20">
        {/* Image */}
        <div className="overflow-hidden rounded-2xl">
          <img
            src="https://res.cloudinary.com/dgc7pj1dx/image/upload/v1764850489/Chris_LoritaPreviews-21_wvhnd4.jpg"
            alt="Couple smiling"
            className="w-full h-auto object-cover aspect-[4/5] lg:aspect-[4/3] lg:h-[600px] xl:h-[700px]"
          />
        </div>

        {/* Copy */}
        <div>
          <h1 className="leading-tight">
            <span className="block text-[24px] lg:text-[48px] font-light tracking-wide">
              WELCOME TO
            </span>
            <span className="block text-[24px] lg:text-[48px] font-normal tracking-wide whitespace-nowrap max-[410px]:whitespace-normal">
              SCHÖN PHOTOGRAPHY
            </span>
          </h1>

          <h3 className="mt-6 text-[16px] lg:text-[24px] font-normal leading-relaxed lg:max-w-[48rem] xl:max-w-[56rem]">
            We're a mother and daughter photography duo, bound not only by love
            but by a shared vision —{" "}
            <em className="italic font-semibold">to tell stories</em> through
            light, connection, and the quiet beauty of real moments.
          </h3>

          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 text-[14px] lg:text-[16px] tracking-wide"
          >
            MEET THE DUO
            <img
              src="/assets/images/up-right-arrow.png"
              alt=""
              aria-hidden="true"
              className="h-4 w-4 lg:h-5 lg:w-5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Welcome;