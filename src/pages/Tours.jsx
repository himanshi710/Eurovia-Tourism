import { useState } from "react";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  Clock3,
  Compass,
  MapPin,
  MoveRight,
  Sparkles,
  Star,
} from "lucide-react";

import TourCard from "../components/TourCard";

import "./Tours.css";

const tours = [
  {
    number: "01",
    title: "Grand European Journey",
    location: "Paris · Rome · Zurich",
    duration: "12 Days",
    price: "₹1,89,000",
    category: "MULTI-COUNTRY",
    type: "multi",
    image:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=90",
  },
  {
    number: "02",
    title: "Italian Summer",
    location: "Rome · Florence · Amalfi",
    duration: "09 Days",
    price: "₹1,39,000",
    category: "ITALY",
    type: "europe",
    image:
      "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?auto=format&fit=crop&w=1200&q=90",
  },
  {
    number: "03",
    title: "Swiss Alpine Escape",
    location: "Zurich · Interlaken · Zermatt",
    duration: "08 Days",
    price: "₹1,59,000",
    category: "SWITZERLAND",
    type: "europe",
    image:
      "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=90",
  },
  {
    number: "04",
    title: "Greek Island Story",
    location: "Athens · Santorini · Mykonos",
    duration: "08 Days",
    price: "₹1,29,000",
    category: "GREECE",
    type: "islands",
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=90",
  },
  {
    number: "05",
    title: "Paris & Provence",
    location: "Paris · Avignon · Nice",
    duration: "07 Days",
    price: "₹1,19,000",
    category: "FRANCE",
    type: "europe",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=90",
  },
  {
    number: "06",
    title: "Portugal by the Ocean",
    location: "Lisbon · Porto · Algarve",
    duration: "08 Days",
    price: "₹1,15,000",
    category: "PORTUGAL",
    type: "coast",
    image:
      "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1200&q=90",
  },
  {
    number: "07",
    title: "Spanish Discovery",
    location: "Barcelona · Seville · Madrid",
    duration: "09 Days",
    price: "₹1,25,000",
    category: "SPAIN",
    type: "europe",
    image:
      "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1200&q=90",
  },
  {
    number: "08",
    title: "Vienna & Prague",
    location: "Vienna · Prague · Budapest",
    duration: "08 Days",
    price: "₹1,22,000",
    category: "CENTRAL EUROPE",
    type: "multi",
    image:
      "https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&w=1200&q=90",
  },
];

const filters = [
  { label: "ALL JOURNEYS", value: "all" },
  { label: "MULTI-COUNTRY", value: "multi" },
  { label: "EUROPE", value: "europe" },
  { label: "ISLANDS", value: "islands" },
  { label: "COASTAL", value: "coast" },
];

const tourStats = [
  {
    value: "08",
    label: "SIGNATURE",
    text: "Journeys",
  },
  {
    value: "28",
    label: "EUROPEAN",
    text: "Countries",
  },
  {
    value: "100%",
    label: "TAILOR",
    text: "Your journey",
  },
];

const Tours = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredTours =
    activeFilter === "all"
      ? tours
      : tours.filter((tour) => tour.type === activeFilter);

  return (
    <div className="tours-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="tours-hero">

        <div className="tours-hero-image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-iqdG1lJwKIhOrsvNuBImxybX6w3xd16ttf_3xgYx3Q&s=10"
            alt="European landscape"
          />
        </div>

        <div className="tours-hero-overlay" />

        <div className="tours-hero-grid-lines" />

        <div className="container">

          <div className="tours-hero-content">

            <div className="tours-hero-kicker">
              <span className="kicker-line" />
              <span>EUROVIA · SIGNATURE COLLECTION</span>
            </div>

            <h1>
              Journeys
              <br />
              <em>worth taking.</em>
            </h1>

            <p>
              Slow down. Look around. Take the scenic route.
              Discover Europe through beautifully planned journeys
              made for meaningful moments.
            </p>

            <div className="tours-hero-actions">

              <a
                href="#tour-collection"
                className="tour-primary-button"
              >
                <span>Explore the collection</span>
                <ArrowUpRight size={18} />
              </a>

              <Link
                to="/contact"
                className="tour-text-button"
              >
                Build a private journey
                <MoveRight size={17} />
              </Link>

            </div>

          </div>

          <div className="tours-hero-bottom">

            <div className="hero-scroll">
              <span>SCROLL TO DISCOVER</span>
              <div className="hero-scroll-line">
                <span />
              </div>
            </div>

            <div className="hero-stats">

              {tourStats.map((stat) => (
                <div className="hero-stat" key={stat.label}>

                  <strong>{stat.value}</strong>

                  <div>
                    <span>{stat.label}</span>
                    <small>{stat.text}</small>
                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

        <div className="hero-corner-mark">
          <span>EUROPE</span>
          <strong>01</strong>
        </div>

      </section>


      {/* =====================================================
          INTRO / PHILOSOPHY
      ===================================================== */}

      <section className="tour-philosophy">

        <div className="container">

          <div className="philosophy-top">

            <div className="philosophy-index">
              <span>01</span>
              <div />
              <small>OUR APPROACH</small>
            </div>

            <span className="philosophy-side-text">
              TRAVEL · FEEL · REMEMBER
            </span>

          </div>

          <div className="philosophy-grid">

            <div className="philosophy-title">

              <span className="mini-label">
                MORE THAN A TOUR
              </span>

              <h2>
                Europe is best
                <br />
                experienced
                <br />
                <em>between places.</em>
              </h2>

            </div>

            <div className="philosophy-copy">

              <p className="large-copy">
                We believe the best part of travelling is not
                always the destination. Sometimes it is the
                road between two places.
              </p>

              <p>
                A slow breakfast in Rome. A mountain train
                disappearing into the Swiss Alps. A golden
                evening beside the Mediterranean.
              </p>

              <p>
                Our itineraries leave room for these moments —
                combining essential European highlights with
                thoughtful experiences, beautiful stays and
                enough freedom to make the journey your own.
              </p>

              <Link
                to="/about"
                className="philosophy-link"
              >
                Discover the Eurovia way
                <ArrowUpRight size={17} />
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          COLLECTION
      ===================================================== */}

      <section
        className="tour-collection"
        id="tour-collection"
      >

        <div className="container">

          <div className="collection-header">

            <div className="collection-title">

              <div className="collection-label">
                <span>02</span>
                <div />
                <strong>THE JOURNEY COLLECTION</strong>
              </div>

              <h2>
                Pick a journey.
                <br />
                <em>Make it yours.</em>
              </h2>

            </div>

            <div className="collection-intro">

              <span>08 CURATED ROUTES</span>

              <p>
                Each itinerary is designed with a different
                kind of traveller in mind — from grand European
                adventures to slow coastal escapes.
              </p>

            </div>

          </div>


          {/* FILTER NAVIGATION */}

          <div className="tour-filter-wrapper">

            <span className="filter-caption">
              EXPLORE BY STYLE
            </span>

            <div className="tour-filters">

              {filters.map((filter) => (

                <button
                  key={filter.value}
                  className={
                    activeFilter === filter.value
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    setActiveFilter(filter.value)
                  }
                >
                  <span>{filter.label}</span>

                  {activeFilter === filter.value && (
                    <ArrowUpRight size={14} />
                  )}
                </button>

              ))}

            </div>

          </div>


          {/* TOUR GRID */}

          <div className="tour-results-head">

            <span>
              SHOWING{" "}
              {String(filteredTours.length).padStart(2, "0")}
              {" "}JOURNEYS
            </span>

            <span>
              EUROPE · 2026 COLLECTION
            </span>

          </div>

          <div className="tours-grid">

            {filteredTours.map((tour) => (

              <TourCard
                key={tour.number}
                number={tour.number}
                title={tour.title}
                location={tour.location}
                duration={tour.duration}
                price={tour.price}
                image={tour.image}
                category={tour.category}
              />

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          SIGNATURE JOURNEY
      ===================================================== */}

      <section className="signature-tour">

        <div className="signature-image">

          <img
            src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=2200&q=90"
            alt="Paris European journey"
          />

        </div>

        <div className="signature-overlay" />

        <div className="signature-frame" />

        <div className="container">

          <div className="signature-content">

            <div className="signature-label">

              <span>03</span>

              <div />

              <small>EUROVIA SIGNATURE</small>

            </div>

            <span className="signature-eyebrow">
              OUR MOST ICONIC ROUTE
            </span>

            <h2>
              The Grand
              <br />
              <em>European</em>
              <br />
              Journey.
            </h2>

            <p>
              Twelve unforgettable days through Paris,
              Rome and the Swiss Alps — connected by
              beautiful landscapes, elegant stays and
              experiences that turn a holiday into a story.
            </p>

            <div className="signature-meta">

              <div>
                <Clock3 size={17} />
                <span>
                  <small>DURATION</small>
                  12 DAYS
                </span>
              </div>

              <div>
                <MapPin size={17} />
                <span>
                  <small>ROUTE</small>
                  FRANCE · ITALY · SWITZERLAND
                </span>
              </div>

              <div>
                <CalendarDays size={17} />
                <span>
                  <small>SEASON</small>
                  APRIL — OCTOBER
                </span>
              </div>

            </div>

            <Link
              to="/tours/grand-european-journey"
              className="signature-button"
            >
              <span>Explore the signature journey</span>
              <ArrowUpRight size={19} />
            </Link>

          </div>

        </div>

        <div className="signature-side">

          <span>EUROPE</span>

          <div />

          <strong>03</strong>

        </div>

      </section>


      {/* =====================================================
          WHY EUROVIA
      ===================================================== */}

      <section className="tour-benefits">

        <div className="container">

          <div className="benefits-header">

            <div>

              <div className="collection-label">
                <span>04</span>
                <div />
                <strong>WHY EUROVIA</strong>
              </div>

              <h2>
                Designed around
                <br />
                <em>how you travel.</em>
              </h2>

            </div>

            <p>
              We take care of the details so you can focus
              on the feeling of being somewhere new.
            </p>

          </div>


          <div className="tour-benefits-grid">

            <div className="benefit-item">

              <div className="benefit-top">
                <span>01</span>
                <Sparkles size={21} />
              </div>

              <div className="benefit-icon">
                <span>01</span>
              </div>

              <h3>
                Curated, not crowded
              </h3>

              <p>
                Thoughtful routes with enough breathing room
                to actually experience each destination instead
                of simply checking it off a list.
              </p>

              <div className="benefit-line" />

            </div>


            <div className="benefit-item">

              <div className="benefit-top">
                <span>02</span>
                <Compass size={21} />
              </div>

              <div className="benefit-icon">
                <span>02</span>
              </div>

              <h3>
                Local, not ordinary
              </h3>

              <p>
                Food, neighbourhoods, landscapes and experiences
                that reveal the character of Europe beyond its
                famous landmarks.
              </p>

              <div className="benefit-line" />

            </div>


            <div className="benefit-item">

              <div className="benefit-top">
                <span>03</span>
                <Check size={21} />
              </div>

              <div className="benefit-icon">
                <span>03</span>
              </div>

              <h3>
                Flexible, not fixed
              </h3>

              <p>
                Change the pace, add extra nights, upgrade your
                stay or create a completely private itinerary
                around the way you want to travel.
              </p>

              <div className="benefit-line" />

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          TRAVEL MOODS
      ===================================================== */}

      <section className="travel-moods">

        <div className="container">

          <div className="moods-header">

            <div>

              <span className="moods-label">
                05 · TRAVEL BY MOOD
              </span>

              <h2>
                How do you want
                <br />
                Europe to <em>feel?</em>
              </h2>

            </div>

            <p>
              Choose the feeling. We'll help you find
              the places that create it.
            </p>

          </div>


          <div className="moods-grid">

            <Link
              to="/tours"
              className="mood-card mood-city"
            >

              <img
                src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1100&q=90"
                alt="European city"
              />

              <div className="mood-overlay" />

              <div className="mood-content">

                <span>01 · CITY LIGHTS</span>

                <h3>
                  Art.
                  <br />
                  Culture.
                  <br />
                  <em>Energy.</em>
                </h3>

                <ArrowUpRight size={23} />

              </div>

            </Link>


            <Link
              to="/tours"
              className="mood-card mood-coast"
            >

              <img
                src="https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?auto=format&fit=crop&w=1100&q=90"
                alt="Amalfi Coast"
              />

              <div className="mood-overlay" />

              <div className="mood-content">

                <span>02 · COASTAL ESCAPE</span>

                <h3>
                  Salt.
                  <br />
                  Sun.
                  <br />
                  <em>Slow days.</em>
                </h3>

                <ArrowUpRight size={23} />

              </div>

            </Link>


            <Link
              to="/tours"
              className="mood-card mood-mountain"
            >

              <img
                src="https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1100&q=90"
                alt="Swiss Alps"
              />

              <div className="mood-overlay" />

              <div className="mood-content">

                <span>03 · ALPINE ESCAPE</span>

                <h3>
                  Fresh air.
                  <br />
                  Open skies.
                  <br />
                  <em>Freedom.</em>
                </h3>

                <ArrowUpRight size={23} />

              </div>

            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          CUSTOM JOURNEY CTA
      ===================================================== */}

    

    </div>
  );
};

export default Tours;