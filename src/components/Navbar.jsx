import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  ArrowUpRight,
  Menu,
  X,
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

  return (
    <header className="eurovia-navbar">

      {/* =================================================
          NAVBAR INNER
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
          <span className="logo-main">
            EURO<span>VIA</span>
          </span>

          <span className="logo-sub">
            EUROPE · TRAVEL · STORIES
          </span>
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
              BOOK NOW
          ================================================= */}

          <Link
            to="/contact"
            className="nav-book"
            onClick={closeMenu}
          >
            <span>Book Now</span>

            <span className="nav-book-icon">
              <ArrowUpRight size={16} />
            </span>
          </Link>

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
          MOBILE MENU OVERLAY
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