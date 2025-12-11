// frontend/src/pages/Portfolio.js
/*****************************************
 * Created On: 2025 / 12 / 01
 * Last Modified: 2025 / 12 / 11
 * 
 * Author: Ané Burger t.a. Arroww Web Dev
 * 
******************************************/

import React, { useEffect, useState } from "react";
import PortfolioTitle from "../components/PortfolioTitle";
import Footer from "../components/Footer";
import Weddings from "./Weddings";
import Engagements from "./Engagements";
import Formals from "./Formals";
import Couples from "./Couples";
import Family from "./Family";

const portfolioCategories = [
  {
    key: "weddings",
    title: "Weddings",
    image: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1764879048/VanSandwykBruidspaar-41_km6fnp.jpg",
    alt: "Bride smiling back at the camera while holding hands with the groom in a sunlit field.",
  },
  {
    key: "engagements",
    title: "Engagements",
    image: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1764780908/WLKerkpleinSchonPhotography-12_mmfapy.jpg",
    alt: "Champagne being poured into a flute during an engagement celebration.",
  },
  {
    key: "formals",
    title: "Formals",
    image: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765478101/ReghardtAlexa-143_qokbqv.jpg",
    alt: "Formal couple embracing under a canopy of leaves.",
  },
  {
    key: "couples",
    title: "Couples",
    image: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1764877728/C_MEngagementSchonPhotography-225_thwxh3.jpg",
    alt: "Couple sharing a joyful moment together outdoors.",
  },
  {
    key: "family",
    title: "Family",
    image: "https://res.cloudinary.com/dgc7pj1dx/image/upload/v1765478276/SchonLifestyleOMPreviews-17_cpkknr.jpg",
    alt: "Parents embracing their child in a leafy outdoor setting.",
  },
];

const overlayComponents = {
  weddings: Weddings,
  engagements: Engagements,
  formals: Formals,
  couples: Couples,
  family: Family
};

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    if (!activeCategory) {
      document.body.style.overflow = "";
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [activeCategory]);

  const handleCategoryClick = (categoryKey) => {
    if (overlayComponents[categoryKey]) {
      setActiveCategory(categoryKey);
    }
  };

  const closeOverlay = () => setActiveCategory(null);

  const ActiveOverlayComponent = activeCategory ? overlayComponents[activeCategory] : null;

  return (
    <div className="flex min-h-screen flex-col bg-[#F0F6EA]">
      <PortfolioTitle />

      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-10">
          <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:gap-10">
            {portfolioCategories.map((category, index) => {
              const isLastItem = index === portfolioCategories.length - 1;

              return (
                <button
                  key={category.title}
                  type="button"
                  onClick={() => handleCategoryClick(category.key)}
                  aria-label={`View ${category.title} gallery`}
                  className={`group relative block aspect-[4/5] w-full overflow-hidden rounded-[10px] shadow-md transition-transform duration-300 hover:-translate-y-1 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#304529] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F0F6EA] ${
                    isLastItem ? "sm:col-span-2 sm:max-w-sm sm:justify-self-center lg:max-w-md xl:max-w-lg" : ""
                  }`}
                >
                  <img
                    src={category.image}
                    alt={category.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-[#304529]/[0.52] transition-opacity duration-300 group-hover:opacity-40" />
                  <span className="absolute inset-0 z-10 flex items-center justify-center px-6 text-center font-montserrat text-lg font-regular uppercase tracking-[0.20em] text-[#F0F6EA] sm:text-xl lg:text-2xl">
                    {category.title}
                  </span>
                </button>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />

      {ActiveOverlayComponent && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-8 sm:px-6"
          onClick={closeOverlay}
        >
          <div className="w-full max-w-6xl" onClick={(event) => event.stopPropagation()}>
            <ActiveOverlayComponent onClose={closeOverlay} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;