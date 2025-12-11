/*****************************************
 * Created On: 2025 / 12 / 01
 * Last Modified: 2025 / 12 / 01
 * 
 * Author: Ané Burger t.a. Arroww Web Dev
 * 
******************************************/

import React from "react";

const Quote = () => {
  return (
    <section className="relative w-full font-montserrat">
      <img
        alt="Celebration toast"
        src="https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765457274/quote_skljp9.png"
        loading="lazy"
        className="h-[320px] w-full object-cover sm:h-[360px] md:h-[420px]"
      />
      <div className="absolute inset-0 bg-[#395232]/[0.54]" />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-[#F0F6EA]">
        <p className="max-w-3xl text-base font-regular italic leading-relaxed sm:text-lg md:text-xl lg:text-3xl lg:leading-relaxed">
          “ART AND LOVE ARE THE SAME THING: IT'S THE PROCESS OF SEEING YOURSELF IN THE THINGS THAT ARE NOT YOU.”
        </p>
        <p className="mt-4 font-light text-xs tracking-[0.12em] text-[#F0F6EA]/80 sm:text-sm">
          - CHUCK KLOSTERMAN
        </p>
      </div>
    </section>
  );
};

export default Quote;
