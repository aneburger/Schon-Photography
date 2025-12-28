/*****************************************
 * Created On: 2025 / 12 / 01
 * Last Modified: 2025 / 12 / 27
 * 
 * Author: Ané Burger t.a. Arroww Web Dev
 * 
******************************************/

import React, { useEffect, useRef, useState } from "react";

const images = [
  "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765582258/web-8_iazale.jpg", // car1
  "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765582036/web-16_diu9ss.jpg", // car2
  "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1764780908/VanSandwykBruidspaar-77_wuqcaj.jpg", // car3
  "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765582260/RivierplaasA_MSchonPhotog-573_cjk0zf.jpg", // car4
];

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const timerRef = useRef(null);

  const goTo = (next) => {
    setPrevIndex(index);
    setIndex(next);
    setIsFading(true);
    // end fade after duration
    setTimeout(() => setIsFading(false), 700);
    // reset auto timer
    resetTimer();
  };

  const prev = () => goTo((index - 1 + images.length) % images.length);
  const next = () => goTo((index + 1) % images.length);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setPrevIndex((p) => {
        const newPrev = p === index ? index : p;
        return newPrev;
      });
      setIndex((i) => (i + 1) % images.length);
      setIsFading(true);
      setTimeout(() => setIsFading(false), 700);
    }, 5000);
  };

  useEffect(() => {
    resetTimer();
    return () => timerRef.current && clearInterval(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="relative w-full h-[70vh] md:h-[85vh] lg:h-screen overflow-hidden font-montserrat">
      {/* Images for cross-fade */}
      <img
        id={`car${prevIndex + 1}`}
        src={images[prevIndex]}
        alt="previous"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}
      />
      <img
        id={`car${index + 1}`}
        src={images[index]}
        alt="current"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${isFading ? 'opacity-100' : 'opacity-100'}`}
      />

      {/* Black overlay (#00000040 at 25% opacity) */}
      <div className="absolute inset-0 bg-[#00000040]/25" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-6">
        <img
          src="/assets/images/whiteLogo.png"
          alt="brand"
          className="h-28 md:h-32 lg:h-36 mb-6 md:mb-8"
        />

        <h1
          id="schon"
          className="text-4xl md:text-6xl lg:text-7xl font-light tracking-wide text-center mb-2 md:mb-3"
        >
          SCHÖN
          <span className="block">PHOTOGRAPHY</span>
        </h1>

        <h4 id="tagline" className="text-base md:text-xl lg:text-2xl text-center opacity-90">
          Artistic, Timeless and Elegant
        </h4>
      </div>

      {/* Arrows */}
      <button
        aria-label="Previous"
        onClick={prev}
        className="absolute left-4 md:left-8 bottom-16 md:bottom-20 z-10 text-white/90 hover:text-white transition-colors"
      >
        <img src="/assets/images/left-arrow.png" alt="left" className="h-12 md:h-14 lg:h-16" />
      </button>
      <button
        aria-label="Next"
        onClick={next}
        className="absolute right-4 md:right-8 bottom-16 md:bottom-20 z-10 text-white/90 hover:text-white transition-colors"
      >
        <img src="/assets/images/right-arrow.png" alt="right" className="h-12 md:h-14 lg:h-16" />
      </button>
    </section>
  );
};

export default Carousel;