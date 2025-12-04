/*****************************************
 * Created On: 2025 / 12 / 01
 * Last Modified: 2025 / 12 / 01
 * 
 * Author: Ané Burger t.a. Arroww Web Dev
 * 
******************************************/

import React from "react";
import Contact from "./Contact";

const Connect = () => {
  return (
    <section className="bg-[#F0F6EA]">
      <div className="w-full px-0 py-10 lg:py-14">
        <div className="relative overflow-hidden">
          {/* Background image */}
          <img
            src="https://res.cloudinary.com/dgc7pj1dx/image/upload/v1764878052/JLDetails-5_hjaxcb.jpg"
            alt="Details"
            className="w-full h-[380px] sm:h-[420px] lg:h-[460px] object-cover"
            loading="lazy"
          />
          {/* Overlay: #4A6741 at 55% */}
          <div className="absolute inset-0 bg-[#4A6741]/[0.55]" />
          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 sm:px-8">
            <h3 className="text-[#F0F6EA] font-montserrat font-regular tracking-wide text-[26px] sm:text-[30px] lg:text-[36px]">
              LET'S CONNECT
            </h3>
            <p className="mt-4 max-w-2xl text-[#F0F6EA] font-montserrat text-[14px] sm:text-[16px] lg:text-[18px] leading-relaxed">
              We look forward to hearing from you and to help you craft
              memories that will linger, timeless and ever true.
            </p>
            <div className="mt-8">
              <Contact buttonText={"CONTACT US"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
