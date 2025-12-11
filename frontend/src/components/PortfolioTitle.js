/*****************************************
 * Created On: 2025 / 12 / 01
 * Last Modified: 2025 / 12 / 11
 * 
 * Author: Ané Burger t.a. Arroww Web Dev
 * 
******************************************/

import React from "react";

const PortfolioTitle = () => {
  return (
    <section className="bg-[#D1DDC6] py-12 sm:py-16">
      <div className="mx-auto flex max-w-5xl flex-col items-center px-6 text-center font-montserrat text-[#4A6741]">
        <h1 className="text-2xl font-regular uppercase tracking-[0.1em] sm:text-3xl md:text-[34px]">
          PORTFOLIO
        </h1>
        <h3 className="mt-4 text-sm font-regular uppercase tracking-[0.22em] sm:text-base md:text-lg">
          WHERE LIGHT MEETS FEELING, AND MOMENTS TURN TIMELESS
        </h3>
        <p className="mt-6 text-sm font-light leading-relaxed sm:text-base md:text-lg md:leading-relaxed">
          At Schön Photography we capture the joy in the unposed, the beauty in the everyday, and the love in every in-between.{" "}
          <span className="italic">Honest, heartfelt, and artfully real.</span>
        </p>
      </div>
    </section>
  );
};

export default PortfolioTitle;
