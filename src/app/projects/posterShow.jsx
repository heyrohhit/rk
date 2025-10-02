"use client";

import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Modern, responsive and animated showcase (glassmorphism + refined hover)
const PosterShow = ({ apis = [], title = "Showcase", discription = "", showOnly = 0 }) => {
  const [selected, setSelected] = useState(null);

  // Close on ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const open = useCallback((item) => setSelected(item), []);
  const close = useCallback(() => setSelected(null), []);

  // Lock/unlock page scroll when modal is open
  useEffect(() => {
    const body = document.body;

    const unlock = () => {
      const top = body.style.top;
      body.style.position = "";
      body.style.top = "";
      body.style.width = "";
      body.style.overflow = "";
      if (top) {
        const y = Math.abs(parseInt(top, 10)) || 0;
        window.scrollTo(0, y);
      }
    };

    if (selected) {
      const y = window.scrollY || window.pageYOffset;
      body.style.position = "fixed";
      body.style.top = `-${y}px`;
      body.style.width = "100%";
      body.style.overflow = "hidden";
    } else {
      unlock();
    }

    return () => {
      // Ensure scroll is restored if component unmounts while locked
      if (body.style.position === "fixed") {
        unlock();
      }
    };
  }, [selected]);

  // Ensure higher-quality thumbnails for Google Drive links
  const getImageSrc = useCallback((url, w = 1600) => {
    if (!url) return url;
    try {
      const u = new URL(url);
      if (u.hostname.includes("drive.google.com") && u.pathname.includes("thumbnail")) {
        // Add/replace size parameter for better quality
        u.searchParams.set("sz", `w${w}`);
        return u.toString();
      }
      // Fallback for other providers
      return url;
    } catch {
      return url;
    }
  }, []);

  // Apply showOnly limit (0 = show all)
  const visibleItems = Array.isArray(apis)
    ? (showOnly && showOnly > 0 ? apis.slice(0, showOnly) : apis)
    : [];

  return (
    <section className="w-[100svw] py-12 md:py-16 overflow-hidden">
      {/* Header */}
      <div className="w-[100svw] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2 mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            {title}
          </h2>
          {discription ? (
            <p className="w-[100svw] text-sm md:text-base opacity-80 mx-auto">
              {discription}
            </p>
          ) : null}
        </div>

        {/* Grid */}
        <div className="flex flex-wrap justify-center align-center gap-8 md:gap-8 overflow-hidden" style={{padding:"0.5rem 0.8rem"}}>
          {visibleItems.map((item, index) => (
            <motion.article
              key={item?.id ?? index}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -6, rotate: -0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group w-[300px]  relative rounded-t-3xl overflow-hidden border border-white/10 bg-white/5 dark:bg-white/5 flex items-center justify-center flex-col backdrop-blur-xl shadow-[0_8px_40px_-12px_RGBA(0,0,0,0.35)] hover:shadow-[0_14px_60px_-18px_RGBA(0,0,0,0.55)] transition-all duration-300"
            >
              {/* Media */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src={getImageSrc(item.image, 1600)}
                  srcSet={`
                    ${getImageSrc(item.image, 480)} 480w,
                    ${getImageSrc(item.image, 768)} 768w,
                    ${getImageSrc(item.image, 1200)} 1200w,
                    ${getImageSrc(item.image, 1600)} 1600w
                  `}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  alt={item.title || title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transform transition duration-700 group-hover:scale-110 group-hover:rotate-[0.4deg] saturate-60 grayscale-[15%] group-hover:saturate-100 group-hover:grayscale-0"
                />

                {/* Soft vignette */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
                {item.date ? (
                  <div
                    className="absolute top-3 right-3 text-[10px] md:text-xs bg-white text-black font-semibold shadow rounded-md"
                    style={{ padding: "3px 5px" }}
                  >
                    {item.date}
                  </div>
                ) : null}

                {/* Center reveal title */}
                <div className="absolute inset-0 flex justify-around p-4 overflow-hidden">
                  <h3 className="text-left text-lg md:text-xl font-extrabold tracking-tight opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 drop-shadow" >
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Body */}
              <div className="w-full p-4 flex overflow-hidden justify-between">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1.5 text-[11px] " style={{padding:"3px 5px"}}>
                    {item.title}
                  </span>
                </div>
                <button
                  onClick={() => open(item)}
                  className="px-3.5 py-2 text-md md:text-xl font-semibold rounded-md bg-white text-black hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition"
                  style={{padding:"3px 5px"}} >
                  Preview
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Modal Preview */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-[0px] z-[999] scroll-none flex items-center justify-center p-4 h-[100svh]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <div
              className="absolute text-md inset-0 bg-black/70 backdrop-blur-sm"
              onClick={close}
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              initial={{ scale: 0.96, y: 8, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.98, y: 8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="relative z-[999] w-full max-w-5xl rounded-t-3xl overflow-hidden border border-white/10 bg-[var(--background)] text-[var(--foreground)] shadow-2xl min-[660px]:flex min-[660px]:items-center min-[660px]:justify-center min-[660px]:gap-8"
              style={{padding:"20px"}}>
              <div className="relative">
                <img
                  src={getImageSrc(selected.image, 2000)}
                  srcSet={`
                    ${getImageSrc(selected.image, 768)} 768w,
                    ${getImageSrc(selected.image, 1200)} 1200w,
                    ${getImageSrc(selected.image, 1600)} 1600w,
                    ${getImageSrc(selected.image, 2000)} 2000w
                  `}
                  sizes="(max-width: 768px) 100vw, 70vw"
                  alt={selected.title || title}
                  className="w-full rounded-2xl max-h-[50vh] object-contain bg-black min-[660px]:w-[280px]"
                  decoding="async"
                />
               
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold">{selected.title}</h3>
                {selected.description ? (
                  <p className="text-sm opacity-90 mt-1">{selected.description}</p>
                ) : null}
                {selected.date ? (
                  <p className="text-xs opacity-70 mt-2">{selected.date}</p>
                ) : null}
              </div>
              <button
                  onClick={close}
                  className="absolute top-5 right-5 flex justify-center items-center text-5xl lg:text-2xl w-9 h-9 rounded-full bg-white text-black font-bold shadow hover:scale-105 active:scale-95 transition"
                  aria-label="Close preview"
                >
                  ×
                </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PosterShow;