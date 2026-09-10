
import { Link } from "react-router-dom";
import {
    ArrowRight,
    ArrowUpRight,
    Check,
    Clock3,
    Mail,
    MapPin,
    MessageCircle,
    Phone,
    Send,
    Sparkles,
} from "lucide-react";

import "./Contact.css";

const Contact = () => {
    return (
        <div className="contact-page">

            {/* =====================================================
          HERO
      ===================================================== */}

            <section className="contact-hero">

                <div className="contact-hero-image">
                    <img
                        src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=2200&q=90"
                        alt="European travel"
                    />
                </div>

                <div className="contact-hero-overlay" />

                <div className="contact-hero-grid" />

                <div className="container">

                    <div className="contact-hero-inner">

                        <div className="contact-hero-content">

                            <div className="contact-hero-topline">
                                <span>06</span>
                                <i />
                                <strong>EUROVIA CONCIERGE</strong>
                            </div>

                            <span className="contact-eyebrow">
                                <span />
                                LET'S PLAN SOMETHING BEAUTIFUL
                            </span>

                            <h1>
                                Your Europe
                                <br />
                                <em>starts here.</em>
                            </h1>

                            <p>
                                Tell us where you want to go, what you want
                                to experience and how you want to travel.
                                We'll take care of the rest.
                            </p>

                            <a
                                href="#contact-form"
                                className="contact-hero-btn"
                            >
                                <span>Start a conversation</span>
                                <ArrowUpRight size={17} />
                            </a>

                        </div>

                        <div className="contact-hero-side">

                            <div className="contact-side-word">
                                CONTACT
                            </div>

                            <div className="contact-hero-circle">
                                <span>PLAN</span>
                                <strong>YOUR</strong>
                                <span>EUROPE</span>
                            </div>

                            <div className="contact-side-bottom">
                                <span>EUROPE · TRAVEL · STORIES</span>
                                <span>EST. 2026</span>
                            </div>

                        </div>

                    </div>

                </div>

                <div className="contact-hero-bottom">

                    <span>NEW DELHI · INDIA</span>

                    <div>
                        <span>PARIS</span>
                        <i />
                        <span>AMALFI</span>
                        <i />
                        <span>ZURICH</span>
                        <i />
                        <span>SANTORINI</span>
                    </div>

                </div>

            </section>


            {/* =====================================================
          INTRO / CONTACT INFO
      ===================================================== */}

            <section className="contact-info-section">

                <div className="container">

                    <div className="contact-info-header">

                        <div className="contact-info-index">
                            <span>01</span>
                            <i />
                            <strong>LET'S CONNECT</strong>
                        </div>

                        <p>
                            Your next European story can begin with
                            one simple conversation.
                        </p>

                    </div>

                    <div className="contact-info-grid">

                        <div className="contact-info-intro">

                            <span className="contact-section-label">
                                GET IN TOUCH
                            </span>

                            <h2>
                                Let's make your
                                <br />
                                next trip <em>happen.</em>
                            </h2>

                            <p>
                                Whether you're dreaming about a romantic
                                escape, a family adventure or a long European
                                journey, our travel team is ready to help
                                shape it around you.
                            </p>

                            <div className="contact-trust">

                                <div>
                                    <Check size={15} />
                                    Personalised itineraries
                                </div>

                                <div>
                                    <Check size={15} />
                                    Handpicked experiences
                                </div>

                                <div>
                                    <Check size={15} />
                                    Dedicated travel support
                                </div>

                            </div>

                        </div>


                        <a
                            href="mailto:hello@eurovia.com"
                            className="contact-info-card"
                        >

                            <div className="contact-info-card-top">
                                <span>01</span>

                                <div className="contact-info-icon">
                                    <Mail size={20} />
                                </div>
                            </div>

                            <span className="contact-card-label">
                                EMAIL US
                            </span>

                            <h3>
                                hello@eurovia.com
                            </h3>

                            <div className="contact-card-link">
                                Send an email
                                <ArrowUpRight size={15} />
                            </div>

                        </a>


                        <a
                            href="tel:+919876543210"
                            className="contact-info-card contact-info-card-teal"
                        >

                            <div className="contact-info-card-top">
                                <span>02</span>

                                <div className="contact-info-icon">
                                    <Phone size={20} />
                                </div>
                            </div>

                            <span className="contact-card-label">
                                CALL US
                            </span>

                            <h3>
                                +91 98765 43210
                            </h3>

                            <div className="contact-card-link">
                                Call Eurovia
                                <ArrowUpRight size={15} />
                            </div>

                        </a>

                    </div>

                </div>

            </section>


            {/* =====================================================
          FORM + CONCIERGE
      ===================================================== */}

            <section
                className="contact-main-section"
                id="contact-form"
            >

                <div className="container">

                    <div className="contact-main-header">

                        <div className="contact-info-index">
                            <span>02</span>
                            <i />
                            <strong>YOUR JOURNEY</strong>
                        </div>

                        <p>
                            The more you tell us, the more personal
                            we can make your journey.
                        </p>

                    </div>

                    <div className="contact-main-grid">

                        {/* ================= FORM ================= */}

                        <div className="contact-form-wrapper">

                            <div className="contact-form-heading">

                                <span className="contact-section-label">
                                    PLAN YOUR JOURNEY
                                </span>

                                <h2>
                                    Tell us about
                                    <br />
                                    your <em>dream.</em>
                                </h2>

                                <p>
                                    Share a few details and our travel
                                    specialists will get back to you.
                                </p>

                            </div>


                            <form
                                className="contact-form"
                                onSubmit={(e) => e.preventDefault()}
                            >

                                <div className="form-row">

                                    <div className="form-group">
                                        <label>01 · YOUR NAME</label>

                                        <input
                                            type="text"
                                            placeholder="Your full name"
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>02 · EMAIL ADDRESS</label>

                                        <input
                                            type="email"
                                            placeholder="you@example.com"
                                            required
                                        />
                                    </div>

                                </div>


                                <div className="form-row">

                                    <div className="form-group">
                                        <label>03 · PHONE NUMBER</label>

                                        <input
                                            type="tel"
                                            placeholder="+91 00000 00000"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>04 · TRAVEL TYPE</label>

                                        <select defaultValue="" required>
                                            <option value="" disabled>
                                                Select travel type
                                            </option>

                                            <option>Couples Escape</option>
                                            <option>Family Holiday</option>
                                            <option>Solo Journey</option>
                                            <option>Luxury Escape</option>
                                            <option>Group Adventure</option>
                                        </select>
                                    </div>

                                </div>


                                <div className="form-row">

                                    <div className="form-group">
                                        <label>05 · DESTINATION</label>

                                        <select defaultValue="" required>
                                            <option value="" disabled>
                                                Where do you want to go?
                                            </option>

                                            <option>France</option>
                                            <option>Italy</option>
                                            <option>Switzerland</option>
                                            <option>Greece</option>
                                            <option>Spain</option>
                                            <option>Portugal</option>
                                            <option>Austria</option>
                                            <option>Multiple Countries</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label>06 · TRAVEL DATES</label>

                                        <input
                                            type="text"
                                            placeholder="e.g. June 2027"
                                        />
                                    </div>

                                </div>


                                <div className="form-group form-message">

                                    <label>07 · YOUR MESSAGE</label>

                                    <textarea
                                        rows="6"
                                        placeholder="Tell us what you're imagining..."
                                    />

                                </div>


                                <div className="contact-submit-row">

                                    <small>
                                        By submitting, you agree to be contacted
                                        about your travel enquiry.
                                    </small>

                                    <button
                                        type="submit"
                                        className="contact-submit"
                                    >
                                        <span>Send my enquiry</span>

                                        <strong>
                                            <Send size={17} />
                                        </strong>
                                    </button>

                                </div>

                            </form>

                        </div>


                        {/* ================= SIDE PANEL ================= */}

                        <aside className="contact-side-panel">

                            <div className="side-panel-top">

                                <span>EUROVIA CONCIERGE</span>

                                <Sparkles size={21} />

                            </div>

                            <div className="side-panel-heading">

                                <small>TRAVEL NOTE · 01</small>

                                <h3>
                                    Travel should feel
                                    <br />
                                    <em>effortless.</em>
                                </h3>

                            </div>

                            <p>
                                From your first idea to the moment you
                                arrive home, we're here to make every
                                detail feel considered.
                            </p>


                            <div className="side-panel-details">

                                <div>

                                    <div className="side-detail-icon">
                                        <MapPin size={17} />
                                    </div>

                                    <div>
                                        <span>OUR OFFICE</span>
                                        <strong>New Delhi, India</strong>
                                    </div>

                                </div>


                                <div>

                                    <div className="side-detail-icon">
                                        <Clock3 size={17} />
                                    </div>

                                    <div>
                                        <span>OFFICE HOURS</span>
                                        <strong>Mon — Sat · 09:00 — 19:00</strong>
                                    </div>

                                </div>


                                <div>

                                    <div className="side-detail-icon">
                                        <MessageCircle size={17} />
                                    </div>

                                    <div>
                                        <span>RESPONSE TIME</span>
                                        <strong>Usually within 24 hours</strong>
                                    </div>

                                </div>

                            </div>


                            <div className="side-panel-footer">

                                <div className="side-panel-number">
                                    <small>EUROVIA</small>
                                    <strong>01</strong>
                                </div>

                                <div className="side-panel-mini">
                                    <span>PARIS</span>
                                    <i />
                                    <span>ROME</span>
                                    <i />
                                    <span>AMALFI</span>
                                </div>

                            </div>

                        </aside>

                    </div>

                </div>

            </section>


            {/* =====================================================
          LOCATION
      ===================================================== */}

            <section className="contact-location">

                <div className="contact-location-image">

                    <img
                        src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=2200&q=90"
                        alt="European landscape"
                    />

                </div>

                <div className="contact-location-overlay" />

                <div className="contact-location-grid" />

                <div className="container">

                    <div className="contact-location-content">

                        <div className="location-index">
                            <span>03</span>
                            <i />
                            <strong>WHERE IT BEGINS</strong>
                        </div>

                        <span className="location-eyebrow">
                            WHERE THE JOURNEY BEGINS
                        </span>

                        <h2>
                            One office.
                            <br />
                            One continent.
                            <br />
                            <em>Endless possibilities.</em>
                        </h2>

                        <div className="location-card">

                            <div className="location-card-icon">
                                <MapPin size={20} />
                            </div>

                            <div>
                                <small>EUROVIA TRAVEL STUDIO</small>
                                <strong>New Delhi, India</strong>
                                <p>
                                    Serving travellers across Europe
                                    with personalised journeys.
                                </p>
                            </div>

                            <ArrowUpRight size={20} />

                        </div>

                    </div>

                </div>

                <div className="location-coordinates">
                    28°36′N · 77°13′E
                </div>

            </section>
{/* =========================
    EUROPE MAP
========================= */}
<section className="contact-map-section">
  <div className="container">

    <div className="contact-map-heading">
      <div>
        <span className="section-label">FIND US</span>

        <h2>
          Europe is <em>closer</em><br />
          than you think.
        </h2>
      </div>

      <p>
        From India to Europe's most unforgettable cities,
        our travel specialists are ready to help you plan
        every detail of your journey.
      </p>
    </div>

    <div className="contact-map-wrapper">

      {/* Map */}
      <div className="contact-map">
        <iframe
          title="Eurovia Europe Travel Map"
          src="https://www.google.com/maps?q=Europe&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        <div className="map-overlay-card">
          <div className="map-card-number">EUROVIA</div>

          <h3>
            Your journey<br />
            starts here.
          </h3>

          <span>
            EUROPE · TRAVEL · STORIES
          </span>
        </div>

        <div className="map-pin">
          <MapPin size={20} />
        </div>
      </div>

      {/* Location Details */}
      <div className="map-details">

        <div className="map-detail-top">
          <span>01</span>
          <strong>OUR BASE</strong>
        </div>

        <h3>
          New Delhi,<br />
          <em>India</em>
        </h3>

        <p>
          Our travel team works from India while our
          journeys take you across Europe's most iconic
          cities, coastlines, islands and mountains.
        </p>

        <div className="map-info-list">

          <div className="map-info-item">
            <div className="map-info-icon">
              <MapPin size={18} />
            </div>

            <div>
              <small>OFFICE</small>
              <strong>New Delhi, India</strong>
            </div>
          </div>

          <div className="map-info-item">
            <div className="map-info-icon">
              <Phone size={18} />
            </div>

            <div>
              <small>PHONE</small>
              <strong>+91 98765 43210</strong>
            </div>
          </div>

          <div className="map-info-item">
            <div className="map-info-icon">
              <Mail size={18} />
            </div>

            <div>
              <small>EMAIL</small>
              <strong>hello@eurovia.com</strong>
            </div>
          </div>

        </div>

        <Link to="/contact" className="map-plan-button">
          Start Planning
          <ArrowUpRight size={17} />
        </Link>

      </div>

    </div>
  </div>
</section>




            {/* =====================================================
          FAQ
      ===================================================== */}

            <section className="contact-help">

                <div className="container">

                    <div className="contact-help-header">

                        <div className="contact-info-index">
                            <span>04</span>
                            <i />
                            <strong>GOOD TO KNOW</strong>
                        </div>

                        <span>
                            BEFORE YOU WRITE
                        </span>

                    </div>


                    <div className="contact-help-grid">

                        <div className="contact-help-heading">

                            <span className="contact-section-label">
                                QUICK ANSWERS
                            </span>

                            <h2>
                                A few things
                                <br />
                                you may <em>wonder.</em>
                            </h2>

                            <p>
                                Still have questions? Tell us what
                                you're looking for and we'll guide you.
                            </p>

                            <Link to="/about" className="help-about-link">
                                Meet Eurovia
                                <ArrowUpRight size={16} />
                            </Link>

                        </div>


                        <div className="contact-help-list">

                            <details open>

                                <summary>
                                    <span>
                                        <b>01</b>
                                        How far in advance should I plan?
                                    </span>

                                    <ArrowRight size={18} />
                                </summary>

                                <p>
                                    For the best choice of hotels, experiences
                                    and seasonal availability, we recommend
                                    planning around 2–6 months ahead.
                                </p>

                            </details>


                            <details>

                                <summary>
                                    <span>
                                        <b>02</b>
                                        Can you create a multi-country itinerary?
                                    </span>

                                    <ArrowRight size={18} />
                                </summary>

                                <p>
                                    Absolutely. We can combine multiple European
                                    countries into one seamless journey based on
                                    your interests and available time.
                                </p>

                            </details>


                            <details>

                                <summary>
                                    <span>
                                        <b>03</b>
                                        Do you plan luxury trips?
                                    </span>

                                    <ArrowRight size={18} />
                                </summary>

                                <p>
                                    Yes. We can tailor premium stays, private
                                    transfers, curated experiences and special
                                    occasions into your itinerary.
                                </p>

                            </details>


                            <details>

                                <summary>
                                    <span>
                                        <b>04</b>
                                        Can I customise an existing tour?
                                    </span>

                                    <ArrowRight size={18} />
                                </summary>

                                <p>
                                    Every Eurovia journey can be adjusted around
                                    your preferred destinations, pace, experiences
                                    and travel style.
                                </p>

                            </details>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
          FINAL CTA
      ===================================================== */}

            <section className="contact-final-cta">

                <div className="container">

                    <div className="contact-final-inner">

                        <div className="final-cta-number">
                            05
                        </div>

                        <div className="final-cta-content">

                            <span>
                                YOUR NEXT CHAPTER
                            </span>

                            <h2>
                                Ready to see
                                <br />
                                <em>Europe differently?</em>
                            </h2>

                        </div>

                        <a href="#contact-form">

                            <span>Start planning</span>

                            <strong>
                                <ArrowUpRight size={19} />
                            </strong>

                        </a>

                    </div>

                </div>

                <div className="final-cta-word">
                    EUROPE
                </div>

            </section>

        </div>
    );
};

export default Contact;

