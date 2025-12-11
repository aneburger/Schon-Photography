/*****************************************
 * Created On: 2025 / 12 / 01
 * Last Modified: 2025 / 12 / 11
 *
 * Author: Ané Burger t.a. Arroww Web Dev
 *
 ******************************************/

import React, { useEffect, useState } from "react";

const IMAGES = [
  "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765447736/DLStudio-7_h4am53.jpg",
  "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765447742/DLStudio-5_syyguu.jpg",
  "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765447738/DLStudio-8_n1584r.jpg",
];
const CYCLE_MS = 6000;

const Hi = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setActiveIndex((prev) => (prev + 1) % IMAGES.length),
      CYCLE_MS
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#F0F6EA] py-12 sm:py-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 sm:px-10 lg:flex-row lg:items-stretch lg:gap-20 lg:px-16 xl:gap-24 xl:px-24">
        <div
            id="images-of-us"
            className="relative w-full overflow-hidden rounded-[10px] sm:aspect-[5/4] lg:aspect-auto lg:min-h-[520px] lg:max-w-[520px] xl:max-w-[560px]"
            >
            <div
                className="flex h-full w-full transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
                {IMAGES.map((src) => (
                <img key={src} src={src} alt="About Us" loading="lazy" className="h-full w-full flex-shrink-0 object-cover" />
                ))}
            </div>
        </div>

        <div className="flex w-full flex-col items-center justify-center text-center font-montserrat text-[#4A6741] lg:flex-1 lg:items-start lg:text-left">
          <h1 className="text-[26px] font-light uppercase tracking-[0.18em] sm:text-[30px] md:text-[34px] lg:text-[38px]">
            HI, WE&apos;RE THE <span className="font-medium">SCHÖN</span>BORN&apos;S
          </h1>
          <h4 className="mt-4 text-lg font-light sm:text-xl">DANÉ &amp; LIANA</h4>
          <h5 className="mt-1 text-xs uppercase tracking-[0.18em] sm:text-sm">
            a.k.a. Blom &amp; Liaans
          </h5>

          <div className="mt-6 space-y-4 text-sm leading-relaxed sm:text-base sm:leading-relaxed lg:max-w-xl">
            <p>
              We&apos;re a mother and daughter photography duo, bound not only by love but by a
              shared vision — to{" "}
              <span className="italic font-medium">tell stories</span> through light, connection,
              and the quiet beauty of real moments.
            </p>
            <p>
              With chai lattes in hand and hearts wide open, we find{" "}
              <span className="italic font-medium">magic</span> in the in-between: the stolen
              glances, the soft laughter, the way love lingers in a frame.
            </p>
            <p>
              Our work is rooted in emotion and guided by{" "}
              <span className="italic font-medium">intuition</span>, capturing the essence of love
              in all its forms. Each session is an invitation to{" "}
              <span className="italic font-medium">slow down</span>, to feel deeply, and to
              preserve memories that <span className="italic font-medium">speak beyond words</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hi;
