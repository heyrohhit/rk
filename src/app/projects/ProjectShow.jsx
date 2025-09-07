"use client";
import React, { lazy, Suspense } from "react";
import Link from "next/link";

// ✅ Lazy iframe wrapper
const LazyIframe = ({ src, title, className }) => (
  <iframe
    src={src}
    title={title}
    className={className}
    scrolling="no"
    loading="lazy" // ✅ browser-level lazy loading
  ></iframe>
);

const IframeGrid = ({ apis = [], showOnly = 0, title, discription }) => {
  const displayedProjects = showOnly > 0 ? apis.slice(0, showOnly) : apis;

  const getGridClass = (index) => {
    if (index === 0) {
      // ✅ First item always big (row-span-2)
      return "md:col-span-3 md:col-start-1 md:row-start-1 md:row-span-2";
    }

    if (index >= 1 && index <= 2) {
      // ✅ 2nd & 3rd item side column me
      return `md:col-start-4 md:row-start-${index}`;
    }

    if (index === 3) {
      // ✅ 4th item fix at col 1, row 3
      return "md:col-start-1 md:row-start-3";
    }

    // ✅ Remaining items auto grid me
    const posIndex = index - 4;
    const col = (posIndex % 4) + 2; // shift col to start from 2
    const row = Math.floor(posIndex / 4) + 3;
    return `md:col-start-${col} md:row-start-${row}`;
  };

  return (
    <main className="p-6 overflow-hidden" style={{margin:"1rem"}}>
      <h1 className="text-[1.5rem] font-bold text-center font-[Georgia] italic projectTitle" style={{marginTop:"2rem"}}>
        {title || "My Projects"}
      </h1>
      <span className="w-full flex justify-center items-center text-white font-bold text-center font-[Georgia] italic projectTitle m-5" style={{margin:"0.5rem"}}>
        {discription || "discription"}
      </span>

      {/* Grid container */}
      <div
        className="
        grid grid-cols-1 gap-8 w-full auto-rows-[350px]
        md:grid-cols-4 md:auto-rows-[250px] md:h-auto
      "
      >
        {displayedProjects.map((item, index) => {
          const gridClass = getGridClass(index);

          return (
            <Link href={item.image} key={index}
            className={`flex justify-center relative items-center IframeWrapper ${gridClass} cursor-pointer`}>
            
              <Suspense
                fallback={
                  <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-500 text-sm">
                    Loading...
                  </div>
                }
              >
               
                <LazyIframe
                  src={item.image}
                  title={item.title}
                  className={`${
                    title === "Poster Projects" || title === "Logo Projects"
                      ? "IframeImageFirst"
                      : "IframeImage"
                  }`}
                />
               
              </Suspense>
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default IframeGrid;
