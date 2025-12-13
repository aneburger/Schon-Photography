// frontend/src/pages/Weddings.js
/*****************************************
 * Created On: 2025 / 12 / 01
 * Last Modified: 2025 / 12 / 11
 * 
 * Author: Ané Burger t.a. Arroww Web Dev
 * 
******************************************/

import React, { useEffect, useState } from "react";

const COUPLES_IMAGES = [
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1764877692/JH-8_pdyjsd.jpg",
    alt: "Couples Image",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1764879430/JH-6_j8frlv.jpg",
    alt: "Couples Image",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765480097/WLKerkpleinSchonPhotography-138_w6ctcd.jpg",
    alt: "Couples Image",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765478276/SchonLifestyleOMPreviews-17_cpkknr.jpg",
    alt: "Couples Image",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765458586/SchonLifestyleOMPreviews-18_t4sdap.jpg",
    alt: "Couples Image",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765486478/JH-18_cgbhik.jpg",
    alt: "Couples Image",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765486488/JH-14_u43yli.jpg",
    alt: "Couples Image",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765486501/JH-7_qx32wb.jpg",
    alt: "Couples Image",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765486591/JH-2_fi8gk9.jpg",
    alt: "Couples Image",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765486626/EEEngagement-16_vwolai.jpg",
    alt: "Couples Image",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765486692/C_MEngagementSchonPhotography-181_qmqymj.jpg",
    alt: "Couples Image",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765486698/C_MEngagementSchonPhotography-27_pxpcvv.jpg",
    alt: "Couples Image",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765584088/WLKerkpleinSchonPhotography-11_pib3lc.jpg",
    alt: "Couples Image",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765584087/GroblersRietondaleSchon-189_xpoqm8.jpg",
    alt: "Couples Image",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765584084/GroblersRietondaleSchon-197_gvqr48.jpg",
    alt: "Couples Image",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765584081/JohnTenHelene-9_pm08jm.jpg",
    alt: "Couples Image",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765584088/WLKerkpleinSchonPhotography-41_e7cqn6.jpg",
    alt: "Couples Image",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765584094/GroblersRietondaleSchon-61_gwnkcq.jpg",
    alt: "Couples Image",
  },
];

const Couples = ({ onClose }) => {
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
            Couples
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
            {COUPLES_IMAGES.map((image) => (
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

export default Couples;