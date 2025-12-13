// frontend/src/pages/Weddings.js
/*****************************************
 * Created On: 2025 / 12 / 01
 * Last Modified: 2025 / 12 / 11
 * 
 * Author: Ané Burger t.a. Arroww Web Dev
 * 
******************************************/

import React, { useEffect, useState } from "react";

const FAMILY_IMAGES = [
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1764879540/SchonLifestyleOMPreviews-6_logts0.jpg",
    alt: "Family Image",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765458586/SchonLifestyleOMPreviews-18_t4sdap.jpg",
    alt: "Family Image",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765478276/SchonLifestyleOMPreviews-17_cpkknr.jpg",
    alt: "Family Image",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765487090/SchonLifestyleOMPreviews-23_wqgvoc.jpg",
    alt: "Family Image",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765487089/SchonLifestyleOMPreviews-2_kvrjar.jpg",
    alt: "Family Image",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765487094/SchonLifestyleDuPlooyFam-4_efbxv9.jpg",
    alt: "Family Image",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765487095/SchonLifestyleDuPlooyFam-22_pn76uu.jpg",
    alt: "Family Image",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765487099/SchonLifestyleDuPlooyFam-30_msxwli.jpg",
    alt: "Family Image",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765487102/SchonLifestyleDuPlooyFam-45_vqpxne.jpg",
    alt: "Family Image",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765487105/SchonLifestyleOMPreviews-27_und8ec.jpg",
    alt: "Family Image",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765487110/SchonLifestyleDuPlooyFam-68_cmeekv.jpg",
    alt: "Family Image",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765487112/SchonLifestyleDuPlooyFam-82_xva9hv.jpg",
    alt: "Family Image",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765584308/SchonLifestyleDuPlooyFam-122_ozawae.jpg",
    alt: "Family Image",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765584309/DeWetFamily-44_su7pid.jpg",
    alt: "Family Image",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765584316/DeWetFamily-2_tl8yl4.jpg",
    alt: "Family Image",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765584320/DeWetFamily-105_bdfoqf.jpg",
    alt: "Family Image",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765584320/LettauJacaranda-73_xhuo9b.jpg",
    alt: "Family Image",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765584319/GroblersRietondaleSchon-132_bjajev.jpg",
    alt: "Family Image",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765584320/GroblersRietondaleSchon-9_zfpzvw.jpg",
    alt: "Family Image",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765584323/GroblersRietondaleSchon-6_buz8da.jpg",
    alt: "Family Image",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765584323/GroblersRietondaleSchon-135_wnlhre.jpg",
    alt: "Family Image",
  }
];

const Family = ({ onClose }) => {
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
            Family
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
            {FAMILY_IMAGES.map((image) => (
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

export default Family;