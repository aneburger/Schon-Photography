/*****************************************
 * Created On: 2025 / 12 / 01
 * Last Modified: 2025 / 12 / 11
 * 
 * Author: Ané Burger t.a. Arroww Web Dev
 * 
******************************************/

import React from "react";

const AboutTheDuo = () => {
  return (
    <section className="relative w-full">
      {/* Background Image */}
      <img
        src="https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765446130/RivierplaasA_MSchonPhotog-573_qbs3ks.jpg"
        alt="About Us"
        className="w-full h-[450px] sm:h-[500px] md:h-[550px] lg:h-[600px] xl:h-[650px] object-cover"
        loading="lazy"
      />
      
      {/* Overlay: #2d4028ff at 54% */}
      <div className="absolute inset-0 bg-[#2d4028ff]/[0.60]" />
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 text-[#F0F6EA]">
        <h4 className="font-playfair italic font-medium text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px]">
          About the Duo
        </h4>
        <h1 className="mt-3 sm:mt-4 font-montserrat font-light text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] xl:text-[48px] leading-snug sm:leading-snug md:leading-tight lg:leading-tight max-w-[90%] lg:max-w-[70%] xl:max-w-[60%]">
          CAPTURING THE ESSENCE OF LOVE, IN ALL ITS FORMS
        </h1>
      </div>
    </section>
  );
};

export default AboutTheDuo;