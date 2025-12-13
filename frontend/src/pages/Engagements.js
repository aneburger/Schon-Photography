// frontend/src/pages/Weddings.js
/*****************************************
 * Created On: 2025 / 12 / 01
 * Last Modified: 2025 / 12 / 11
 * 
 * Author: Ané Burger t.a. Arroww Web Dev
 * 
******************************************/

import React, { useEffect, useState } from "react";

const ENGAGE_IMAGES = [
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1764780908/WLKerkpleinSchonPhotography-12_mmfapy.jpg",
    alt: "Engagement Image",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1764780910/C_MEngagementSchonPhotography-225_szqbiq.jpg",
    alt: "Engagement Image",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1764878010/EEEngagement-88_ytbukt.jpg",
    alt: "Engagement Image",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1764879234/WLKerkpleinSchonPhotography-165_klbgxj.jpg",
    alt: "Engagement Image",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765457274/quote_skljp9.png",
    alt: "Engagement Image",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765479798/WLKerkpleinSchonPhotography-75_pwipud.jpg",
    alt: "Engagement Image",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765479830/EEEngagement-39_cgoutt.jpg",
    alt: "Engagement Image",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765479844/C_MEngagementSchonPhotography-145_kxxbvg.jpg",
    alt: "Engagement Image",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765479870/C_MEngagementSchonPhotography-82_fhyens.jpg",
    alt: "Engagement Image",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765480028/C_MEngagementSchonPhotography-136_sqwipv.jpg",
    alt: "Engagement Image",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765480038/C_MEngagementSchonPhotography-231_z2xhnq.jpg",
    alt: "Engagement Image",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765480068/EEEngagement-51_gpin43.jpg",
    alt: "Engagement Image",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765480097/WLKerkpleinSchonPhotography-138_w6ctcd.jpg",
    alt: "Engagement Image",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765480051/EEEngagement-20_uldpqd.jpg",
    alt: "Engagement Image",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765480251/EEEngagement-70_dbyvrv.jpg",
    alt: "Engagement Image",
  },


  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765583573/Andreas_LarissaVerlowing-37_zrpawe.jpg",
    alt: "Engagement Image",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765583577/OMDinokengEngagementSchonPhotography-25_fa8jsz.jpg",
    alt: "Engagement Image",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765583574/Andreas_LarissaVerlowing-24_wj2acq.jpg",
    alt: "Engagement Image",
  },

  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765583579/RiekertMiya-23_a2n04o.jpg",
    alt: "Engagement Image",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765583579/WLVerlowingSchonPhotography-149_spsd36.jpg",
    alt: "Engagement Image",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765583581/D_DSchonPhotography-49_u5urxo.jpg",
    alt: "Engagement Image",
  },

  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765583581/RiekertMiya-141_vxje9n.jpg",
    alt: "Engagement Image",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765583582/Andreas_LarissaVerlowing-19_zykhse.jpg",
    alt: "Engagement Image",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765583588/MarnusAnzelleIreneFarm-102_pagqcz.jpg",
    alt: "Engagement Image",
  },
];

const Engagements = ({ onClose }) => {
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key !== "Escape") return;

      if (activeImage) {
        setActiveImage(null);
        return;
      }

      if (onClose) onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImage, onClose]);

  return (
    <>
      <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-3xl bg-[#F0F6EA] px-5 py-8 text-[#4A6741] font-montserrat shadow-xl sm:px-8 sm:py-10 flex max-h-[80vh] flex-col">
        <div className="flex items-start justify-between gap-6">
          <h1 className="text-lg font-light uppercase tracking-[0.16em] sm:text-xl md:text-[30px]">
            Engagements
          </h1>
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="rounded-full bg-[#4A6741]/10 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.14em] transition hover:bg-[#4A6741]/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4A6741] sm:px-4 sm:py-2 sm:text-sm"
            >
              Close
            </button>
          )}
        </div>

        <div className="mt-8 flex-1 overflow-y-auto pr-1">
            <div className="columns-2 gap-4 sm:columns-2 md:columns-3 lg:columns-4">
            {ENGAGE_IMAGES.map((image) => (
                <button
                key={image.src}
                type="button"
                onClick={() => setActiveImage(image)}
                className="group mb-4 block w-full break-inside-avoid overflow-hidden rounded-[10px] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#4A6741]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F0F6EA]"
                >
                <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
                </button>
            ))}
            </div>
        </div>
      </div>

      {activeImage && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 p-4"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-h-[85vh] max-w-[92vw]"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={activeImage.src}
              alt={activeImage.alt}
              className="max-h-[85vh] max-w-full rounded-[10px] object-contain shadow-2xl"
            />
            <button
              type="button"
              onClick={() => setActiveImage(null)}
              className="absolute -top-3 -right-3 rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-[#4A6741] shadow-md transition hover:bg-white"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Engagements;