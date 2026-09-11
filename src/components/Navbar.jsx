import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  ArrowUpRight,
  Menu,
  X,
  Phone,
  MessageCircle,
  CalendarDays,
} from "lucide-react";

import "./Navbar.css";

const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Destinations",
    path: "/destinations",
  },
  {
    name: "Tours",
    path: "/tours",
  },
  {
    name: "Experiences",
    path: "/experiences",
  },
  {
    name: "Gallery",
    path: "/gallery",
  },
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const location = useLocation();

  const closeMenu = () => {
    setOpen(false);
  };

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/919876543210",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <header className="eurovia-navbar">

      {/* =================================================
          TOP INFO BAR
      ================================================= */}

      <div className="navbar-topbar">
        <div className="navbar-topbar-container">

          <div className="topbar-left">
            <span className="topbar-dot"></span>

            <span>
              Discover Europe — curated journeys, unforgettable
              experiences.
            </span>
          </div>

          <div className="topbar-right">

            <a href="tel:+919876543210" className="topbar-phone">
              <Phone size={14} />
              <span>+91 98765 43210</span>
            </a>

            <span className="topbar-divider"></span>

            <span className="topbar-time">
              Mon – Sat : 9:00 AM – 8:00 PM
            </span>

          </div>

        </div>
      </div>


      {/* =================================================
          MAIN NAVBAR
      ================================================= */}

      <div className="navbar-container">

        {/* =================================================
            LOGO
        ================================================= */}

        <Link
          to="/"
          className="eurovia-logo"
          onClick={closeMenu}
        >

          <div className="logo-mark">
            <span>EU</span>
          </div>

          <div className="logo-content">

            <span className="logo-main">
              EURO<span>VIA</span>
            </span>

            <span className="logo-sub">
              EUROPE · TRAVEL · STORIES
            </span>

          </div>

        </Link>


        {/* =================================================
            DESKTOP / MOBILE MENU
        ================================================= */}

        <nav
          className={`navbar-menu ${
            open ? "menu-open" : ""
          }`}
        >

          <div className="navbar-links">

            {navLinks.map((link, index) => {

              const isActive =
                link.path === "/"
                  ? location.pathname === "/"
                  : location.pathname === link.path ||
                    location.pathname.startsWith(
                      `${link.path}/`
                    );

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={closeMenu}
                  className={`nav-link ${
                    isActive ? "active" : ""
                  }`}
                >

                  <span className="nav-number">
                    0{index + 1}
                  </span>

                  <span className="nav-text">
                    {link.name}
                  </span>

                </Link>
              );
            })}

          </div>


          {/* =================================================
              NAV ACTIONS
          ================================================= */}

          <div className="nav-actions">

            {/* PHONE */}

            <a
              href="tel:+919876543210"
              className="nav-icon-btn phone-btn"
              aria-label="Call us"
            >
              <Phone size={18} />
            </a>


            {/* WHATSAPP */}

            <button
              type="button"
              className="nav-icon-btn whatsapp-nav-btn"
              onClick={openWhatsApp}
              aria-label="WhatsApp"
            >
              <MessageCircle size={19} />
            </button>


            {/* BOOK NOW */}

            <Link
              to="/contact"
              className="nav-book"
              onClick={closeMenu}
            >

              <CalendarDays size={17} />

              <span>Book Your Tour</span>

              <span className="nav-book-icon">
                <ArrowUpRight size={15} />
              </span>

            </Link>

          </div>

        </nav>


        {/* =================================================
            MOBILE MENU BUTTON
        ================================================= */}

        <button
          type="button"
          className="mobile-menu-btn"
          onClick={() => setOpen(!open)}
          aria-label={
            open
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={open}
        >
          {open ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>

      </div>


      {/* =================================================
          MOBILE OVERLAY
      ================================================= */}

      {open && (
        <button
          type="button"
          className="navbar-mobile-overlay"
          onClick={closeMenu}
          aria-label="Close menu"
        />
      )}

    </header>
  );
};

export default Navbar;