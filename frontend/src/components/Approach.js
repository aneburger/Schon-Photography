/*****************************************
 * Created On: 2025 / 12 / 01
 * Last Modified: 2025 / 12 / 11
 *
 * Author: Ané Burger t.a. Arroww Web Dev
 *
 ******************************************/

import React from "react";

const APPROACH_IMAGE =
  "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765458586/SchonLifestyleOMPreviews-18_t4sdap.jpg";

const Approach = () => {
  return (
    <section className="bg-[#F0F6EA] py-12 sm:py-16">
      <div className="mx-auto flex w-full max-w-[95vw] xl:max-w-7xl flex-col gap-12 px-6 sm:px-8 lg:px-12 text-left text-[#4A6741] font-montserrat lg:flex-row lg:items-center lg:gap-16 xl:gap-20">
        <div className="flex-1">
          <h4 className="font-playfair text-lg font-medium italic sm:text-xl">
            Our Approach
          </h4>
          <h1 className="mt-4 text-1xl font-light uppercase tracking-[0.13em] leading-snug sm:text-[25px] md:text-[30px] lg:text-[32px] xl:text-[34px]">
            ENDURING <span className="font-medium">MEMORIES</span> CAPTURED THROUGH STUNNING, HEART-STIRRING VISUALS.
          </h1>
          <p className="mt-8 text-sm leading-relaxed sm:text-base">
            Each frame is a testament to the moments that define us. With every click, we weave a story, one that transcends time, creating not just images, but timeless impressions that linger in the soul.
          </p>
          <p className="mt-5 text-sm leading-relaxed sm:text-base">
            Together, we will craft a legacy of unforgettable experiences, where every detail speaks volumes and every memory is cherished for a lifetime. Through artistry and vision, we&apos;ll transform fleeting moments into lasting treasures, each one a reflection of who we are and the beauty we share.
          </p>
        </div>

        <div className="flex-1">
          <img
            src={APPROACH_IMAGE}
            alt="Loved ones sharing an embrace"
            loading="lazy"
            className="h-[260px] w-full rounded-[8px] object-cover shadow-sm sm:h-[320px] md:h-[360px] lg:h-[420px] xl:h-[460px] lg:max-w-[500px] xl:max-w-[560px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Approach;