import { useEffect, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, MapPin } from "lucide-react";

const destinationSlides = [
  {
    number: "01",
    name: "Paris",
    country: "FRANCE",
    title: "The City of Light",
    description:
      "Elegant boulevards, hidden cafés, timeless art and unforgettable evenings beside the Seine.",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1800&q=90",
    tag: "ROMANCE",
  },
  {
    number: "02",
    name: "Amalfi Coast",
    country: "ITALY",
    title: "Where the Coast Meets the Sky",
    description:
      "Clifftop villages, turquoise water and slow Italian afternoons overlooking the Mediterranean.",
    image:
      "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?auto=format&fit=crop&w=1800&q=90",
    tag: "COASTAL",
  },
  {
    number: "03",
    name: "Swiss Alps",
    country: "SWITZERLAND",
    title: "Into the Mountains",
    description:
      "Alpine villages, dramatic peaks, scenic railways and landscapes made for slowing down.",
    image:
      "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1800&q=90",
    tag: "ADVENTURE",
  },
  {
    number: "04",
    name: "Santorini",
    country: "GREECE",
    title: "Blue Beyond the Horizon",
    description:
      "Whitewashed villages, volcanic cliffs and golden sunsets above the Aegean Sea.",
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1800&q=90",
    tag: "ISLAND",
  },
  {
    number: "05",
    name: "Lisbon",
    country: "PORTUGAL",
    title: "Golden Atlantic Days",
    description:
      "Sunlit streets, colourful tiles, historic trams and an effortlessly relaxed coastal rhythm.",
    image:
      "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1800&q=90",
    tag: "CITY LIFE",
  },
];

const DestinationCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % destinationSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setActiveSlide(
      (prev) => (prev + 1) % destinationSlides.length
    );
  };

  const prevSlide = () => {
    setActiveSlide(
      (prev) =>
        (prev - 1 + destinationSlides.length) %
        destinationSlides.length
    );
  };

  const slide = destinationSlides[activeSlide];

  return (
    <section className="destination-hero-carousel">

      {/* BACKGROUND IMAGE */}

      <div className="destination-carousel-image">
        {destinationSlides.map((item, index) => (
          <img
            key={item.number}
            src={item.image}
            alt={item.name}
            className={index === activeSlide ? "active" : ""}
          />
        ))}
      </div>

      {/* DARK OVERLAY */}

      <div className="destination-carousel-overlay" />

      {/* TOP LABEL */}

      <div className="destination-carousel-top">

        <div className="carousel-brand">
          <span>EUROVIA</span>
          <small>DESTINATIONS</small>
        </div>

        <div className="carousel-counter">
          <strong>
            {slide.number}
          </strong>

          <span>
            / {String(destinationSlides.length).padStart(2, "0")}
          </span>
        </div>

      </div>

      {/* CONTENT */}

      <div className="container">

        <div className="destination-carousel-content">

          <div className="carousel-kicker">
            <span />
            EUROPE · PLACES WORTH DISCOVERING
          </div>

          <span className="carousel-tag">
            {slide.tag}
          </span>

          <h1 key={slide.number}>
            {slide.name}
            <br />
            <em>{slide.title}</em>
          </h1>

          <div className="carousel-info">

            <div className="carousel-location">
              <MapPin size={17} />
              <span>{slide.country}</span>
            </div>

            <p>
              {slide.description}
            </p>

          </div>

          <div className="carousel-actions">

            <a
              href="#destination-collection"
              className="carousel-primary-btn"
            >
              Explore Destination
              <ArrowUpRight size={18} />
            </a>

            <span className="carousel-note">
              CURATED BY EUROVIA
            </span>

          </div>

        </div>

      </div>

      {/* CONTROLS */}

      <div className="destination-carousel-controls">

        <button
          onClick={prevSlide}
          aria-label="Previous destination"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="carousel-dots">

          {destinationSlides.map((item, index) => (
            <button
              key={item.number}
              className={index === activeSlide ? "active" : ""}
              onClick={() => setActiveSlide(index)}
              aria-label={`Go to ${item.name}`}
            >
              <span />
            </button>
          ))}

        </div>

        <button
          onClick={nextSlide}
          aria-label="Next destination"
        >
          <ChevronRight size={20} />
        </button>

      </div>

      {/* BOTTOM DESTINATION STRIP */}

      <div className="destination-carousel-bottom">

        <div className="carousel-bottom-inner">

          <div className="carousel-bottom-label">
            <span>DISCOVER</span>
            <strong>EUROPE</strong>
          </div>

          <div className="carousel-mini-list">

            {destinationSlides.map((item, index) => (
              <button
                key={item.number}
                className={
                  index === activeSlide ? "active" : ""
                }
                onClick={() => setActiveSlide(index)}
              >
                <span>{item.number}</span>
                {item.name}
              </button>
            ))}

          </div>

          <div className="carousel-scroll">
            <span>SCROLL TO EXPLORE</span>
            <div />
          </div>

        </div>

      </div>

    </section>
  );
};

export default DestinationCarousel;