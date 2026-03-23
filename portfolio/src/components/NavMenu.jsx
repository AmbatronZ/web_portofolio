import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const navItems = ["Home", "About", "Portfolio", "Certificate", "Contact", "Footer"];

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const overlayRef = useRef(null);
  const menuRef = useRef(null);
  const itemsRef = useRef([]);
  const tlRef = useRef(null);

  useEffect(() => {
    // Set initial state
    gsap.set(menuRef.current, { x: "100%" });
    gsap.set(itemsRef.current, { x: 60, opacity: 0 });

    // Build timeline
    tlRef.current = gsap.timeline({ paused: true });

    tlRef.current
      .to(overlayRef.current, {
        opacity: 1,
        visibility: "visible",
        duration: 0.35,
        ease: "power2.out",
      })
      .to(
        menuRef.current,
        {
          x: "0%",
          duration: 0.5,
          ease: "power3.out",
        },
        "<"
      )
      .to(
        itemsRef.current,
        {
          x: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.07,
          ease: "power2.out",
        },
        "<+=0.15"
      );
  }, []);

  const openMenu = () => {
    setIsOpen(true);
    tlRef.current.play();
  };

  const closeMenu = () => {
    tlRef.current.reverse();
    tlRef.current.eventCallback("onReverseComplete", () => setIsOpen(false));
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
    closeMenu();
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        className={`hamburger-btn ${isOpen ? "is-open" : ""}`}
        onClick={isOpen ? closeMenu : openMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Dark overlay behind menu */}
      <div
        ref={overlayRef}
        className="nav-overlay"
        onClick={closeMenu}
      />

      {/* Slide-in menu panel */}
      <nav ref={menuRef} className="nav-panel">
        {/* Close button */}
        <button className="nav-close-btn" onClick={closeMenu} aria-label="Close menu">
          ✕
        </button>

        {/* Nav items */}
        <ul className="nav-list">
          {navItems.map((item, i) => (
            <li
              key={item}
              ref={(el) => (itemsRef.current[i] = el)}
              className={`nav-item ${activeItem === item ? "is-active" : ""}`}
              onClick={() => handleItemClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default NavMenu;