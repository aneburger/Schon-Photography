/*****************************************
 * Created On: 2025 / 12 / 01
 * Last Modified: 2026 / 01 / 18
 * 
 * Author: Ané Burger t.a. Arroww Web Dev
 * 
******************************************/

import React from "react";

const Services = () => {
  return (
    <section id="services" className="bg-[#F0F6EA]">
      {/* Title */}
      <div className="bg-[#D1DDC6] text-[#4A6741] font-montserrat px-4 sm:px-6 lg:px-8 py-10 lg:py-14 text-center">
        <h2 className="text-[22px] sm:text-[24px] lg:text-[28px] font-medium tracking-wide">
          SERVICES & INVESTMENT
        </h2>
        <h3 className="mt-4 text-[14px] sm:text-[16px] lg:text-[18px] font-normal">
          MORE INFORMATION ABOUT PRICING, PACKAGES, AND WHAT TO EXPECT
        </h3>
        <p className="mt-6 max-w-3xl mx-auto text-[13px] sm:text-[14px] lg:text-[16px] leading-relaxed">
          For a more comprehensive overview or to enquire about additional sessions,
          please feel free to reach out, and we will happily provide the information.
        </p>
      </div>

      {/* Cards */}
      <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

          {/* Wedding */}
          <ServiceCard
            title="WEDDING PACKAGES"
            subtitle="FROM R6 500"
            copy= "We offer full-day, half-day and light coverage wedding packages."
            img="https://res.cloudinary.com/dgc7pj1dx/image/upload/v1764879048/VanSandwykBruidspaar-41_km6fnp.jpg"
            pdfFileName="wedding.pdf"
          />

          {/* Lifestyle */}
          <ServiceCard
            title="LIFESTYLE PACKAGES"
            subtitle="FROM R800"
            copy="We offer engagement, couples, matric farewell/formals, family and event packages."
            img="https://res.cloudinary.com/dgc7pj1dx/image/upload/v1764879430/JH-6_j8frlv.jpg"
            pdfFileName="lifestyle.pdf"
          />

          {/* Engagement
          <ServiceCard
            title="ENGAGEMENT PACKAGES"
            subtitle="FROM R850"
            copy="For a surprise engagement, send us a message and we'll help you make sure every moment is captured."
            img="https://res.cloudinary.com/dgc7pj1dx/image/upload/v1764879234/WLKerkpleinSchonPhotography-165_klbgxj.jpg"
          />

          <ServiceCard
            title="FORMAL PACKAGES"
            subtitle="FROM R1000"
            copy="Matric Farewell packages start at 1 hour per couple. Feel free to reach out if you're booking for a larger group."
            img="https://res.cloudinary.com/dgc7pj1dx/image/upload/v1764879345/MelindieenStephan-15_jk6r7x.jpg"
          />
 
          <ServiceCard
            title="COUPLE SESSIONS"
            subtitle="FROM R600"
            copy="All couple sessions are one hour minimum. You're welcome to enquire about extended session options."
            img="https://res.cloudinary.com/dgc7pj1dx/image/upload/v1764879430/JH-6_j8frlv.jpg"
          />

          <ServiceCard
            title="FAMILY SESSIONS"
            subtitle="FROM R850"
            copy="To capture your family's memories."
            img="https://res.cloudinary.com/dgc7pj1dx/image/upload/v1764879540/SchonLifestyleOMPreviews-6_logts0.jpg"
            className="lg:col-span-2"
          /> */}

        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ title, subtitle, copy, img, pdfFileName, className = "" }) => {
  
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = `/assets/pdfs/${pdfFileName}`;
    link.download = pdfFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  return (
    <div className={`relative rounded-2xl overflow-hidden ${className}`}>
      {/* Image */}
      <img
        src={img}
        alt=""
        className="w-full h-[420px] sm:h-[460px] lg:h-[400px] xl:h-[440px] object-cover"
        loading="lazy"
      />
      {/* Overlay: #304529 at 52% */}
      <div className="absolute inset-0 bg-[#304529]/[0.52]" />
      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 sm:px-8">
        <h2 className="text-white font-montserrat font-regular text-[20px] sm:text-[24px] lg:text-[26px] tracking-wide">
          {title}
        </h2>
        <h3 className="mt-2 text-white/90 font-montserrat text-[14px] sm:text-[15px] lg:text-[16px] tracking-wide">
          {subtitle}
        </h3>
        <p className="mt-4 max-w-md text-white/90 font-montserrat font-light text-[10px] sm:text-[14px] lg:text-[15px] leading-relaxed">
          {copy}
        </p>
        <div className="mt-6">
          {/* <Contact buttonText={"Get a Quote"} /> */}
          <button type="button" onClick={handleDownload}>
            Download Pricing Guide
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;