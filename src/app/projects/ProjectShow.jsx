"use client";
import React, { lazy, Suspense, useEffect, useState } from "react";
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
  const [isMobile, setIsMobile] = useState(false);

  // ✅ Safe check for window
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 660);
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const displayedProjects = showOnly > 0 ? apis.slice(0, showOnly) : apis;

  const getGridClass = (index) => {
    if (index === 0) {
      return "md:col-span-3 md:col-start-1 md:row-start-1 md:row-span-2";
    }

    if (index >= 1 && index <= 2) {
      return `md:col-start-4 md:row-start-${index}`;
    }

    if (index === 3) {
      return "md:col-start-1 md:row-start-3";
    }

    const posIndex = index - 4;
    const col = (posIndex % 4) + 2;
    const row = Math.floor(posIndex / 4) + 3;
    return `md:col-start-${col} md:row-start-${row}`;
  };

  return (
    <main
      className="p-6 overflow-hidden"
      style={{ margin: "1rem" }}
    >
      <h1 className="text-[1.5rem] font-bold text-center font-[Georgia] italic projectTitle" style={{ marginTop: "2rem" }}>
        {title || "My Projects"}
      </h1>
      <span className="w-full flex justify-center items-center text-white font-bold text-center font-[Georgia] italic projectTitle m-5" style={{ marginTop: "0.5rem",padding:"1rem" }}>
        {discription || "discription"}
      </span>

      {/* Grid container */}
      <div
        className="
          grid grid-cols-1 gap-8 w-full auto-rows-[450px] sm:auto-rows-[400px]
          md:grid-cols-4 md:auto-rows-[250px] md:h-auto relative
        "
      >
        {displayedProjects.map((item, index) => {
          const gridClass = getGridClass(index);

          return (
            <div
              key={index}
              className={`flex justify-center relative items-center IframeWrapper ${gridClass}`}
            >

              <Suspense
                fallback={
                  <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-500 text-sm overflow-hidden">
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
                  } iframes`}
                />
                 {/* ✅ Mobile button only */}
              {isMobile ?
                <Link
                  href={item.image}
                  className="bg-orange-500 w-[8rem] h-[3rem] rounded-2xl cursor-pointer flex justify-center items-center"
                  style={{
                    padding: "0.5rem",
                    position: "absolute",
                    top: "88%",
                    right: "0%",
                    zIndex: "9999",
                  }}
                >
                  Show Project
                </Link> :  
                <span className="text-[var(--foreground)] absolute w-full h-full flex justify-center items-center text-center flex-col texts" style={{ padding: "2rem" }}>
                  {item.description}
                  <Link
                    href={item.image}
                    className="bg-orange-500 rounded cursor-pointer"
                    style={{ padding: "0.5rem", marginTop: "1rem" }}
                  >
                    Show Project
                  </Link>
                </span>
              }
               
              </Suspense>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default IframeGrid;
