"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import NProgress from "nprogress";

// Configuration de NProgress
NProgress.configure({
  showSpinner: false,
  trickleSpeed: 200,
  minimum: 0.08,
  easing: "ease",
  speed: 300,
});

export function NavigationEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Ajouter des styles personnalisés pour la barre de progression
  useEffect(() => {
    const styleElement = document.createElement("style");
    styleElement.textContent = `
      #nprogress .bar {
        background: #3B82F6 !important;
        height: 3px !important;
      }
    `;
    document.head.appendChild(styleElement);

    return () => {
      if (styleElement.parentNode) {
        styleElement.parentNode.removeChild(styleElement);
      }
    };
  }, []);

  // Gérer la navigation
  useEffect(() => {
    let timer;

    const resetProgress = () => {
      NProgress.done();
      setTimeout(() => {
        NProgress.remove();
      }, 500);
    };

    NProgress.start();

    timer = setTimeout(() => {
      resetProgress();
    }, 300);

    return () => {
      clearTimeout(timer);
      resetProgress();
    };
  }, [pathname, searchParams]);

  return null;
}
