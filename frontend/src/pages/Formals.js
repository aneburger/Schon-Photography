// frontend/src/pages/Weddings.js
/*****************************************
 * Created On: 2025 / 12 / 01
 * Last Modified: 2025 / 12 / 11
 * 
 * Author: Ané Burger t.a. Arroww Web Dev
 * 
******************************************/

import React, { useEffect, useState } from "react";

const FORMAL_IMAGES = [
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765483871/ReghardtAlexa-153_xrsnna.jpg",
    alt: "Formal Image",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765483884/ReghardtAlexa-137_pz2963.jpg",
    alt: "Formal Image",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765483894/ReghardtAlexa-127_tqmwme.jpg",
    alt: "Formal Image",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765484063/KarliRuanSchonPhotos-56_ba2cn4.jpg",
    alt: "Formal Image",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765478101/ReghardtAlexa-143_qokbqv.jpg",
    alt: "Formal Image",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1764879345/MelindieenStephan-15_jk6r7x.jpg",
    alt: "Formal Image",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765486023/KarliRuanSchonPhotos-17_lwn8ob.jpg",
    alt: "Formal Image",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765484011/KarliRuanSchonPhotos-117_tpdzsa.jpg",
    alt: "Formal Image",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765483943/MelindieenStephan-195_ltr7zd.jpg",
    alt: "Formal Image",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765483932/ReghardtAlexa-109_bq0ziq.jpg",
    alt: "Formal Image",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765483951/MelindieenStephan-82_jfavh1.jpg",
    alt: "Formal Image",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765483961/MelindieenStephan-64_ttcihm.jpg",
    alt: "Formal Image",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765483972/MelindieenStephan-30_wqc7em.jpg",
    alt: "Formal Image",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765483982/KarliRuanSchonPhotos-218_wzjcxf.jpg",
    alt: "Formal Image",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765484089/KarliRuanSchonPhotos-92_dlk2pu.jpg",
    alt: "Formal Image",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765485809/KarliRuanSchonPhotos-26_kqauee.jpg",
    alt: "Formal Image",
  },


  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765583874/NikhaMXA-189_un0yks.jpg",
    alt: "Formal Image",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765583876/Xandri_Marno-160_z2pjhi.jpg",
    alt: "Formal Image",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765583879/SSMXA-138_ov3sit.jpg",
    alt: "Formal Image",
  },


  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765583880/StefanJohaneDinee-76_iecfbl.jpg",
    alt: "Formal Image",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765583881/StefanJohaneDinee-11_twy1kb.jpg",
    alt: "Formal Image",
  },

  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765583889/MikoAlwynHazelwood-34_bq5dud.jpg",
    alt: "Formal Image",
  },
];

const Formals = ({ onClose }) => {
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
            FORMALS
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
            {FORMAL_IMAGES.map((image) => (
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

export default Formals;