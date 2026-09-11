import { ArrowUp } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import "./WhatsApp.css";

const WhatsApp = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/919876543210",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="whatsapp-actions">

      {/* Scroll Top */}
      <button
        className="top-button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <ArrowUp size={22} />
      </button>

      {/* WhatsApp */}
      <button
        className="whatsapp-button"
        onClick={openWhatsApp}
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </button>

    </div>
  );
};

export default WhatsApp;