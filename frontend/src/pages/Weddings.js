/*****************************************
 * Created On: 2025 / 12 / 01
 * Last Modified: 2025 / 12 / 11
 * 
 * Author: Ané Burger t.a. Arroww Web Dev
 * 
******************************************/

import React, { useEffect, useState } from "react";

const WEDDING_IMAGES = [
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765445816/RivierplaasA_MSchonPhotog-573_a7rycb.jpg",
    alt: "Bride and groom sharing their first dance in a candle-lit barn reception.",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1764879048/VanSandwykBruidspaar-41_km6fnp.jpg",
    alt: "Bride smiling at the camera while walking hand in hand with her groom through tall grass.",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1764878409/Venue_Dekor-61_xvafcc.jpg",
    alt: "Romantic reception table with greenery and candles.",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1764878052/JLDetails-5_hjaxcb.jpg",
    alt: "Wedding rings and perfume arranged on lace fabric.",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1764877760/VanSandwykBruidspaar-112_qzifxs.jpg",
    alt: "Bride hugging the groom during outdoor portraits.",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1764877743/Chris_LoritaPreviews-23_ufeze7.jpg",
    alt: "Newlyweds laughing together while confetti falls.",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1764877718/Chris_LoritaPreviews-21_lp9ebq.jpg",
    alt: "Bride and groom sharing a quiet moment together.",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1764877711/VanSandwykBruidspaar-16_umklat.jpg",
    alt: "Wedding dress hanging beside bridal accessories.",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1764780914/Venue_Dekor-91_wbngzd.jpg",
    alt: "Outdoor ceremony arch decorated with flowers.",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1764780908/VanSandwykBruidspaar-77_wuqcaj.jpg",
    alt: "Bride and groom strolling through a meadow.",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765479488/Venue_Dekor-183_en0wuj.jpg",
    alt: "Evening reception table glowing with candlelight.",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765479590/VanSandwykBruidspaar-147_u7x7uj.jpg",
    alt: "Couple enjoying their first dance surrounded by guests.",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765479659/RivierplaasA_MSchonPhotog-493_hrwpce.jpg",
    alt: "Bride and groom posing near a rustic stone wall.",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765479623/VanSandwykBruidspaar-182_zbedd8.jpg",
    alt: "Newlyweds embracing during golden hour.",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765479567/Venue_Dekor-18_uazupb.jpg",
    alt: "Close-up of an elegant wedding table setting.",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765582258/web-8_iazale.jpg",
    alt: "Umbrella.",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765582036/web-16_diu9ss.jpg",
    alt: "Aisle",
  },

  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765582956/VanSandwykTroue-321_o6fpf1.jpg",
    alt: "Groom.",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765582958/VanSandwykTroue-399_tuorjd.jpg",
    alt: "Groom.",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765582959/web-12_gxhmls.jpg",
    alt: "Bride",
  },

  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765582961/web-4_pvgs02.jpg",
    alt: "Couple",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765582964/web-9_lohi8i.jpg",
    alt: "Close-Up.",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765582965/web-2_fvrrgq.jpg",
    alt: "Bride",
  },

  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765582967/web-7_c86ovk.jpg",
    alt: "Bride and Groom",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765582966/RivierplaasA_MSchonPhotog-24_gdbza3.jpg",
    alt: "Decor.",
  },
  {
    src: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765582965/VanSandwykTroue-1031_ny5ld9.jpg",
    alt: "Flowers",
  }
];

const Weddings = ({ onClose }) => {
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
          <h1 className="text-2xl font-light uppercase tracking-[0.18em] sm:text-3xl md:text-[34px]">
            Weddings
          </h1>
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="rounded-full bg-[#4A6741]/10 px-4 py-2 text-sm font-medium uppercase tracking-[0.16em] transition hover:bg-[#4A6741]/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4A6741]"
            >
              Close
            </button>
          )}
        </div>

        <div className="mt-8 flex-1 overflow-y-auto pr-1">
            <div className="columns-2 gap-4 sm:columns-2 md:columns-3 lg:columns-4">
            {WEDDING_IMAGES.map((image) => (
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

export default Weddings;