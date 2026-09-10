import { Link } from "react-router-dom";

import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="eurovia-footer">

      {/* =========================
          MAIN FOOTER
      ========================= */}
      <div className="footer-main">
        <div className="container">

          <div className="footer-top-line">
            <span>EUROPE · TRAVEL · STORIES</span>
            <span>EST. 2026</span>
          </div>

          <div className="footer-grid">

            {/* BRAND */}
            <div className="footer-brand">

              <Link to="/" className="footer-logo">
                EURO<span>VIA</span>
              </Link>

              <div className="footer-brand-line" />

              <p>
                Curating unforgettable journeys through
                Europe's timeless cities, hidden villages,
                coastlines and unforgettable stories.
              </p>

              <Link to="/contact" className="footer-plan-link">
                Plan Your Journey
                <ArrowUpRight size={18} />
              </Link>

              <div className="footer-socials">
                <a href="#" aria-label="Instagram">
                  <i className="bi bi-instagram" />
                </a>

                <a href="#" aria-label="Facebook">
                  <i className="bi bi-facebook" />
                </a>

                <a href="#" aria-label="Pinterest">
                  <i className="bi bi-pinterest" />
                </a>
              </div>

            </div>

            {/* EXPLORE */}
            <div className="footer-column">

              <span className="footer-column-number">01</span>
              <h4>Explore</h4>

              <Link to="/destinations">
                Destinations
                <ArrowUpRight size={14} />
              </Link>

              <Link to="/tours">
                Tours
                <ArrowUpRight size={14} />
              </Link>

              <Link to="/experiences">
                Experiences
                <ArrowUpRight size={14} />
              </Link>

              <Link to="/gallery">
                Gallery
                <ArrowUpRight size={14} />
              </Link>

            </div>

            {/* COMPANY */}
            <div className="footer-column">

              <span className="footer-column-number">02</span>
              <h4>Company</h4>

              <Link to="/about">
                About Us
                <ArrowUpRight size={14} />
              </Link>

              <Link to="/blog">
                Travel Journal
                <ArrowUpRight size={14} />
              </Link>

              <Link to="/contact">
                Contact
                <ArrowUpRight size={14} />
              </Link>

              <Link to="/contact">
                Book a Trip
                <ArrowUpRight size={14} />
              </Link>

            </div>

            {/* CONTACT */}
            <div className="footer-column footer-contact">

              <span className="footer-column-number">03</span>
              <h4>Get In Touch</h4>

              <div className="footer-contact-item">
                <MapPin size={18} />
                <div>
                  <small>VISIT US</small>
                  <p>New Delhi, India</p>
                </div>
              </div>

              <div className="footer-contact-item">
                <Phone size={18} />
                <div>
                  <small>CALL US</small>
                  <p>+91 98765 43210</p>
                </div>
              </div>

              <div className="footer-contact-item">
                <Mail size={18} />
                <div>
                  <small>EMAIL US</small>
                  <p>hello@eurovia.com</p>
                </div>
              </div>

            </div>

          </div>

          {/* BOTTOM */}
          <div className="footer-bottom">

            <span>
              © 2026 EUROVIA. All Rights Reserved.
            </span>

            <span>
              DISCOVER EUROPE
            </span>

            <Link to="/contact">
              Start Your Story
              <ArrowUpRight size={15} />
            </Link>

          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;