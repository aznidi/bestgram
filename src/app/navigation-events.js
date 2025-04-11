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
    
    // Fonction pour compléter la barre et la réinitialiser après
    const resetProgress = () => {
      NProgress.done();
      // Réinitialisation complète après animation terminée
      setTimeout(() => {
        NProgress.remove();
      }, 500);
    };

    // Démarrer la barre de progression
    NProgress.start();

    // Terminer la barre de progression après un petit délai
    timer = setTimeout(() => {
      resetProgress();
    }, 300);

    // Nettoyer lorsque le composant est démonté ou la route change
    return () => {
      clearTimeout(timer);
      resetProgress();
    };
  }, [pathname, searchParams]);

  return null;
} 