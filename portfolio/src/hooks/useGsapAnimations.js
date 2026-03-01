import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useGsapAnimations = () => {
  useLayoutEffect(() => {
    // ── INTRO (tanpa scroll) ──────────────────────────────────────────
    gsap.from(".hero-main-container", {
      scale: 1.45,
      duration: 2.8,
      ease: "power3.out",
    });

    gsap.to(".overlay", {
      opacity: 0,
      duration: 2.8,
      ease: "power3.out",
      onComplete: () => {
        document.body.style.overflow = "visible";
        document.body.style.overflowX = "hidden";
      },
    });

    // ── SCROLL INDICATOR bounce ───────────────────────────────────────
    const scrollIndicator = document.querySelector(".scroll-indicator");
    const bounceTimeline = gsap.timeline({ repeat: -1, yoyo: true });
    bounceTimeline.to(scrollIndicator, {
      y: 20,
      opacity: 0.6,
      duration: 0.8,
      ease: "power1.inOut",
    });

    // ── SCROLL-DRIVEN TIMELINE ────────────────────────────────────────
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".container",
        scrub: 2,
        pin: true,
        start: "top top",
        end: "+=2000",
        ease: "none",
      },
    });

    tl.set(".hero-main-container", { scale: 1.25 });

    tl.to(".hero-main-container", { scale: 1, duration: 1 });

    tl.to(".hero-main-logo", { opacity: 0, duration: 0.5 }, "<");

    tl.to(".hero-main-image", { opacity: 0, duration: 0.9 }, "<+=0.5");

    tl.to(
      ".hero-main-container",
      { backgroundSize: "45vh", duration: 1.5 },
      "<+=0.2"
    );

    tl.fromTo(
      ".hero-text",
      {
        backgroundImage: `radial-gradient(
          circle at 50% 200vh,
          rgba(255, 214, 135, 0) 0,
          rgba(157, 47, 106, 0.5) 90vh,
          rgba(157, 47, 106, 0.8) 120vh,
          rgba(32, 31, 66, 0) 150vh
        )`,
      },
      {
        backgroundImage: `radial-gradient(circle at 50% 3.9575vh, rgb(255, 213, 133) 0vh,
         rgb(247, 77, 82) 50.011vh,
          rgb(145, 42, 105) 90.0183vh,
           rgba(32, 31, 66, 0) 140.599vh)`,
        duration: 3,
      },
      "<1.2"
    );

    tl.fromTo(
      ".hero-text-logo",
      {
        opacity: 0,
        maskImage: `radial-gradient(circle at 50% 145.835%, rgb(255, 255, 255) 36.11%, rgba(255, 255, 255, 0) 68.055%)`,
      },
      {
        opacity: 1,
        maskImage: `radial-gradient(
          circle at 50% 105.594%,
          rgb(255, 255, 255) 62.9372%,
          rgba(255, 255, 255, 0) 81.4686%
        )`,
        duration: 3,
      },
      "<0.2"
    );

    tl.set(".hero-main-container", { opacity: 0 });

    tl.to(".hero-1-container", { scale: 0.85, duration: 3 }, "<-=3");

    tl.set(
      ".hero-1-container",
      {
        maskImage: `radial-gradient(circle at 50% 16.1137vh, rgb(255, 255, 255) 96.1949vh, rgba(255, 255, 255, 0) 112.065vh)`,
      },
      "<+=2.1"
    );

    tl.to(
      ".hero-1-container",
      {
        maskImage: `radial-gradient(circle at 50% -40vh, rgb(255, 255, 255) 0vh, rgba(255, 255, 255, 0) 80vh)`,
        duration: 2,
      },
      "<+=0.2"
    );

    tl.to(".hero-text-logo", { opacity: 0, duration: 2 }, "<1.5");

    tl.set(".hero-1-container", { opacity: 0 });
    tl.set(".hero-2-container", { visibility: "visible" });

    tl.to(".hero-2-container", { opacity: 1, duration: 3 }, "<+=0.2");

    tl.fromTo(
      ".hero-2-container",
      {
        backgroundImage: `radial-gradient(
          circle at 50% 200vh,
          rgba(255, 214, 135, 0) 0,
          rgba(157, 47, 106, 0.5) 90vh,
          rgba(157, 47, 106, 0.8) 120vh,
          rgba(32, 31, 66, 0) 150vh
        )`,
      },
      {
        backgroundImage: `radial-gradient(circle at 50% 3.9575vh, rgb(255, 213, 133) 0vh,
         rgb(247, 77, 82) 50.011vh,
          rgb(145, 42, 105) 90.0183vh,
           rgba(32, 31, 66, 0) 140.599vh)`,
        duration: 3,
      },
      "<1.2"
    );

    // ── CLEANUP saat komponen unmount ─────────────────────────────────
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.killTweensOf("*");
    };
  }, []);
};

export default useGsapAnimations;