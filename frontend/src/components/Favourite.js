/*****************************************
 * Created On: 2025 / 12 / 01
 * Last Modified: 2025 / 12 / 01
 * 
 * Author: Ané Burger t.a. Arroww Web Dev
 * 
******************************************/

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const IMAGES = [
  "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1764877760/VanSandwykBruidspaar-112_qzifxs.jpg",
  "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1764877743/Chris_LoritaPreviews-23_ufeze7.jpg",
  "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1764877728/C_MEngagementSchonPhotography-225_thwxh3.jpg",
  "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1764877718/Chris_LoritaPreviews-21_lp9ebq.jpg",
  "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1764877703/MelindieenStephan-30_kmwiyo.jpg",
  "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1764877711/VanSandwykBruidspaar-16_umklat.jpg",
  "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1764877692/JH-8_pdyjsd.jpg",
  "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1764780908/WLKerkpleinSchonPhotography-12_mmfapy.jpg",
  "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1764877955/ReghardtAlexa-127_p8jvi8.jpg",
  "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1764878010/EEEngagement-88_ytbukt.jpg",
  "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1764878052/JLDetails-5_hjaxcb.jpg",
  "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1764878409/Venue_Dekor-61_xvafcc.jpg",
  "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765584320/DeWetFamily-105_bdfoqf.jpg",
  "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765582258/web-8_iazale.jpg",
  "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765582964/web-9_lohi8i.jpg",
  "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765582956/VanSandwykTroue-321_o6fpf1.jpg",
  "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765582967/web-7_c86ovk.jpg"
];

const Favourite = () => {
  const [modalSrc, setModalSrc] = useState(null);

  // Close on Escape
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setModalSrc(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <section className="bg-[#F0F6EA] py-12 lg:py-16">
      <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h1 className="text-[#4A6741] font-montserrat font-normal text-[15px] lg:text-[30px] tracking-wide text-center mb-6 lg:mb-8">
          OUR FAVOURITE MOMENTS
        </h1>

        {/* Masonry grid */}
        <div className="columns-2 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
          {IMAGES.map((src, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setModalSrc(src)}
              className="group mb-4 block w-full break-inside-avoid rounded-xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#4A6741]"
            >
              <img
                src={src}
                alt="Favourite moment"
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                loading="lazy"
              />
            </button>
          ))}
        </div>

        {/* Link */}
        <div className="mt-8 lg:mt-10 flex items-center justify-center gap-2">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-[#4A6741] font-montserrat tracking-wide text-[14px] lg:text-[16px]"
          >
            EXPLORE OUR WORK
            <img
              src="/assets/images/up-right-arrow-green.png"
              alt=""
              aria-hidden="true"
              className="h-4 w-4 lg:h-5 lg:w-5"
            />
          </Link>
        </div>
      </div>

      {/* Modal */}
      {modalSrc && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={() => setModalSrc(null)}
        >
          <div
            className="relative max-w-[90vw] max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={modalSrc}
              alt="Enlarged favourite"
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
            />
            <button
              type="button"
              onClick={() => setModalSrc(null)}
              className="absolute -top-3 -right-3 bg-white/90 text-[#4A6741] rounded-full shadow-md px-3 py-1 text-sm font-medium hover:bg-white"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Favourite;
