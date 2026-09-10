import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Camera,
  ChevronRight,
  MapPin,
  Play,
  X,
} from "lucide-react";
import { useState } from "react";

import "./Gallery.css";

const galleryImages = [
  {
    id: "01",
    title: "Parisian Evenings",
    location: "Paris, France",
    category: "CITIES",
    size: "large",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1400&q=90",
  },
  {
    id: "02",
    title: "Amalfi Light",
    location: "Amalfi, Italy",
    category: "COAST",
    size: "small",
    image:
      "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: "03",
    title: "Alpine Silence",
    location: "Swiss Alps",
    category: "MOUNTAINS",
    size: "small",
    image:
      "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: "04",
    title: "Aegean Blue",
    location: "Santorini, Greece",
    category: "ISLANDS",
    size: "wide",
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1400&q=90",
  },
  {
    id: "05",
    title: "Lisbon Streets",
    location: "Lisbon, Portugal",
    category: "CITIES",
    size: "small",
    image:
      "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: "06",
    title: "Barcelona",
    location: "Barcelona, Spain",
    category: "CITIES",
    size: "small",
    image:
      "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: "07",
    title: "Vienna Details",
    location: "Vienna, Austria",
    category: "CULTURE",
    size: "large",
    image:
      "https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&w=1400&q=90",
  },
  {
    id: "08",
    title: "Lake Como",
    location: "Lombardy, Italy",
    category: "LAKES",
    size: "small",
    image:
      "https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: "09",
    title: "Dolomites",
    location: "Northern Italy",
    category: "MOUNTAINS",
    size: "wide",
    image:
      "https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=1400&q=90",
  },
  {
    id: "10",
    title: "Greek Sunset",
    location: "Cyclades, Greece",
    category: "ISLANDS",
    size: "small",
    image:
      "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: "11",
    title: "European Roads",
    location: "Swiss Countryside",
    category: "ROAD TRIPS",
    size: "small",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: "12",
    title: "Golden Rome",
    location: "Rome, Italy",
    category: "HISTORY",
    size: "large",
    image:
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1400&q=90",
  },
];

const categories = [
  "ALL",
  "CITIES",
  "COAST",
  "MOUNTAINS",
  "ISLANDS",
  "CULTURE",
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages =
    activeCategory === "ALL"
      ? galleryImages
      : galleryImages.filter(
          (image) => image.category === activeCategory
        );

  return (
    <div className="gallery-page">

      {/* =========================================
          HERO
      ========================================= */}

      <section className="gallery-hero">

        <div className="gallery-hero-image">
          <img
            src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=2200&q=90"
            alt="Europe travel"
          />
        </div>

        <div className="gallery-hero-overlay" />

        <div className="container">

          <div className="gallery-hero-content">

            <div className="gallery-eyebrow">
              <Camera size={15} />
              EUROVIA VISUAL JOURNAL
            </div>

            <h1>
              Europe,
              <br />
              <span>through our eyes.</span>
            </h1>

            <p>
              A visual collection of places, people,
              colours and moments that make Europe
              impossible to forget.
            </p>

            <div className="gallery-hero-actions">

              <a
                href="#gallery-grid"
                className="gallery-hero-btn"
              >
                Explore Gallery
                <ArrowUpRight size={17} />
              </a>

              <span className="gallery-count">
                12 <small>STORIES</small>
              </span>

            </div>

          </div>

        </div>

        <div className="gallery-hero-side">
          <span>SCROLL</span>
          <div />
          <span>01 — 12</span>
        </div>

      </section>


      {/* =========================================
          INTRO STRIP
      ========================================= */}

      <section className="gallery-intro">

        <div className="container">

          <div className="gallery-intro-grid">

            <div className="gallery-intro-number">
              <span>EUROVIA</span>
              <strong>VISUAL<br />STORIES</strong>
            </div>

            <div className="gallery-intro-text">
              <span>
                MOMENTS OVER MILESTONES
              </span>

              <p>
                Every photograph has a destination behind
                it. Every destination has a story. This is our
                collection of the little moments that make
                travelling through Europe unforgettable.
              </p>
            </div>

            <div className="gallery-intro-mark">
              <Camera size={25} />
              <span>
                CAPTURED
                <br />
                IN EUROPE
              </span>
            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          GALLERY
      ========================================= */}

      <section
        className="gallery-section"
        id="gallery-grid"
      >

        <div className="container">

          <div className="gallery-heading">

            <div>
              <span className="gallery-section-label">
                THE COLLECTION
              </span>

              <h2>
                Places worth
                <br />
                <span>remembering.</span>
              </h2>
            </div>

            <p>
              From Mediterranean coastlines to Alpine
              villages, explore Europe one frame at a time.
            </p>

          </div>


          {/* =====================================
              FILTERS
          ===================================== */}

          <div className="gallery-filters">

            {categories.map((category) => (
              <button
                key={category}
                className={
                  activeCategory === category
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setActiveCategory(category)
                }
              >
                {category}
              </button>
            ))}

          </div>


          {/* =====================================
              MASONRY STYLE GRID
          ===================================== */}

          <div className="gallery-grid">

            {filteredImages.map((item) => (

              <article
                key={item.id}
                className={`gallery-item gallery-item-${item.size}`}
                onClick={() => setSelectedImage(item)}
              >

                <img
                  src={item.image}
                  alt={item.title}
                />

                <div className="gallery-item-overlay" />

                <span className="gallery-item-number">
                  {item.id}
                </span>

                <div className="gallery-item-content">

                  <span>
                    {item.category}
                  </span>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    <MapPin size={12} />
                    {item.location}
                  </p>

                </div>

                <button
                  className="gallery-open"
                  aria-label={`Open ${item.title}`}
                  onClick={(event) => {
                    event.stopPropagation();
                    setSelectedImage(item);
                  }}
                >
                  <ArrowUpRight size={19} />
                </button>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================
          VIDEO / EXPERIENCE
      ========================================= */}

      <section className="gallery-video-section">

        <div className="gallery-video-image">

          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2200&q=90"
            alt="European journey"
          />

        </div>

        <div className="gallery-video-overlay" />

        <div className="container">

          <div className="gallery-video-content">

            <span>
              ONE JOURNEY · MANY STORIES
            </span>

            <h2>
              See Europe
              <br />
              <strong>in motion.</strong>
            </h2>

            <button className="video-play">
              <Play size={21} fill="currentColor" />
            </button>

            <p>
              Every road, every train window and every
              sunset becomes part of your story.
            </p>

          </div>

        </div>

      </section>


      {/* =========================================
          DESTINATION STRIP
      ========================================= */}

      <section className="gallery-destination-strip">

        <div className="container">

          <div className="gallery-strip-heading">

            <span>
              WHERE WILL YOU GO NEXT?
            </span>

            <h2>
              Your next frame
              <br />
              could be <em>here.</em>
            </h2>

          </div>

          <div className="gallery-destination-links">

            <Link to="/destinations">
              Paris
              <ArrowUpRight size={16} />
            </Link>

            <Link to="/destinations">
              Amalfi
              <ArrowUpRight size={16} />
            </Link>

            <Link to="/destinations">
              Switzerland
              <ArrowUpRight size={16} />
            </Link>

            <Link to="/destinations">
              Santorini
              <ArrowUpRight size={16} />
            </Link>

          </div>

        </div>

      </section>


      {/* =========================================
          LIGHTBOX
      ========================================= */}

      {selectedImage && (

        <div
          className="gallery-lightbox"
          onClick={() => setSelectedImage(null)}
        >

          <button
            className="lightbox-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image"
          >
            <X size={25} />
          </button>

          <div
            className="lightbox-content"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
            />

            <div className="lightbox-info">

              <span>
                {selectedImage.category}
              </span>

              <h3>
                {selectedImage.title}
              </h3>

              <p>
                <MapPin size={14} />
                {selectedImage.location}
              </p>

            </div>

          </div>

        </div>

      )}

    </div>
  );
};

export default Gallery;