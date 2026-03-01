import { useRef, useState } from "react";
import gsap from "gsap";

const menuItems = ["Home", "About", "Portfolio", "Certificate", "Contact"];

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const overlayRef = useRef(null);
  const itemsRef = useRef([]);
  const tlRef = useRef(null);

  const openMenu = () => {
    setIsOpen(true);

    // reset posisi dulu
    gsap.set(menuRef.current, { x: "100%" });
    gsap.set(itemsRef.current, { x: 80, opacity: 0 });

    tlRef.current = gsap.timeline();

    // overlay fade in
    tlRef.current.to(overlayRef.current, {
      opacity: 1,
      duration: 0.4,
      ease: "power2.out",
    });

    // panel slide dari kanan
    tlRef.current.to(
      menuRef.current,
      {
        x: "0%",
        duration: 0.5,
        ease: "power3.out",
      },
      "<"
    );

    // list item muncul satu per satu (stagger)
    tlRef.current.to(
      itemsRef.current,
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.08,
        ease: "power3.out",
      },
      "<+=0.2"
    );
  };

  const closeMenu = () => {
    tlRef.current = gsap.timeline({
      onComplete: () => setIsOpen(false),
    });

    // item menghilang duluan
    tlRef.current.to(itemsRef.current, {
      x: 80,
      opacity: 0,
      duration: 0.3,
      stagger: 0.04,
      ease: "power2.in",
    });

    // panel slide keluar ke kanan
    tlRef.current.to(
      menuRef.current,
      {
        x: "100%",
        duration: 0.4,
        ease: "power3.in",
      },
      "<+=0.1"
    );

    // overlay fade out
    tlRef.current.to(
      overlayRef.current,
      {
        opacity: 0,
        duration: 0.3,
      },
      "<"
    );
  };

  const handleNavClick = (item) => {
    closeMenu();
    // scroll ke section yang sesuai
    const target = document.querySelector(`#${item.toLowerCase()}`);
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth" });
      }, 600);
    }
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

      {/* Overlay gelap di belakang menu */}
      <div
        ref={overlayRef}
        className="menu-overlay"
        style={{ opacity: 0, display: isOpen ? "block" : "none" }}
        onClick={closeMenu}
      />

      {/* Panel navigasi */}
      <nav
        ref={menuRef}
        className="nav-panel"
        style={{ transform: "translateX(100%)", display: isOpen ? "flex" : "none" }}
      >
        {/* Close button */}
        <button className="close-btn" onClick={closeMenu} aria-label="Close menu">
          ✕
        </button>

        {/* Nav items */}
        <ul className="nav-list">
          {menuItems.map((item, index) => (
            <li
              key={item}
              ref={(el) => (itemsRef.current[index] = el)}
              className="nav-item"
              onClick={() => handleNavClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default HamburgerMenu;