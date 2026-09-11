import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Compass,
  Globe2,
  MapPin,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";

import DestinationCard from "../components/DestinationCard";
import TourCard from "../components/TourCard";

import "./Home.css";


/* =========================================
   HERO CAROUSEL DATA
========================================= */

const heroSlides = [
  {
    id: 1,
    number: "01",
    location: "PARIS · FRANCE",
    title: "Paris",
    subtitle: "The city of timeless moments.",
    description:
      "Walk beside the Seine, discover hidden cafés and experience the effortless elegance of the French capital.",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=2200&q=90",
    accent: "CITY ESCAPE",
  },
  {
    id: 2,
    number: "02",
    location: "AMALFI · ITALY",
    title: "Amalfi",
    subtitle: "Where the coast becomes a story.",
    description:
      "Clifftop villages, Mediterranean blue and slow Italian afternoons create an escape unlike anywhere else.",
    image:
      "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?auto=format&fit=crop&w=2200&q=90",
    accent: "COASTAL ESCAPE",
  },
  {
    id: 3,
    number: "03",
    location: "SWITZERLAND · ALPS",
    title: "Switzerland",
    subtitle: "Go higher. Feel everything.",
    description:
      "Ride scenic mountain trains, wake up beside alpine lakes and discover Europe's most dramatic landscapes.",
    image:
      "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=2200&q=90",
    accent: "ALPINE ESCAPE",
  },
  {
    id: 4,
    number: "04",
    location: "SANTORINI · GREECE",
    title: "Santorini",
    subtitle: "Blue horizons. Golden evenings.",
    description:
      "Lose yourself among whitewashed villages, volcanic cliffs and unforgettable Aegean sunsets.",
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=2200&q=90",
    accent: "ISLAND ESCAPE",
  },
  {
    id: 5,
    number: "05",
    location: "LISBON · PORTUGAL",
    title: "Lisbon",
    subtitle: "Colour, culture & endless sunshine.",
    description:
      "Explore tiled streets, hilltop viewpoints and local neighbourhoods where every corner feels alive.",
    image:
      "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=2200&q=90",
    accent: "CULTURAL ESCAPE",
  },
];


const destinations = [
  {
    id: "paris",
    number: "01",
    name: "Paris",
    country: "France",
    description: "Art, romance & timeless elegance",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "amalfi",
    number: "02",
    name: "Amalfi Coast",
    country: "Italy",
    description: "Clifftop villages & blue horizons",
    image:
      "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "switzerland",
    number: "03",
    name: "Switzerland",
    country: "Swiss Alps",
    description: "Mountains, lakes & alpine escapes",
    image:
      "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "santorini",
    number: "04",
    name: "Santorini",
    country: "Greece",
    description: "White villages & Aegean sunsets",
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1000&q=85",
  },
];


const tours = [
  {
    id: "grand-europe",
    image:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=900&q=85",
    category: "SIGNATURE",
    title: "Grand European Journey",
    location: "Paris · Rome · Venice",
    duration: "12 Days",
    price: "2,490",
  },
  {
    id: "amalfi-escape",
    image:
      "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?auto=format&fit=crop&w=900&q=85",
    category: "COASTAL",
    title: "Amalfi Coast Escape",
    location: "Southern Italy",
    duration: "7 Days",
    price: "1,390",
  },
  {
    id: "swiss-alps",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdx6qHxy6phR4BRBb0iIjnEHh6ug3C4uTyTSzgqqHW2A&s=10",
    category: "ADVENTURE",
    title: "Swiss Alpine Escape",
    location: "Interlaken · Zermatt",
    duration: "8 Days",
    price: "1,790",
  },
];


const stats = [
  {
    number: "28",
    label: "EUROPEAN COUNTRIES",
  },
  {
    number: "120+",
    label: "CURATED EXPERIENCES",
  },
  {
    number: "15K+",
    label: "HAPPY TRAVELLERS",
  },
  {
    number: "4.9",
    label: "AVERAGE RATING",
  },
];


const testimonials = [
  {
    text: "Eurovia turned our Europe trip into something we will talk about for years. Every hotel, transfer and experience felt beautifully considered.",
    name: "Sophia & Daniel",
    trip: "ITALY · SWITZERLAND",
  },
  {
    text: "It never felt like a standard tour. We discovered quiet places, incredible food and experiences we would never have found ourselves.",
    name: "Emma Wilson",
    trip: "FRANCE · SPAIN",
  },
  {
    text: "From the first conversation to the final day, everything was seamless. The attention to detail was exceptional.",
    name: "Arjun Mehta",
    trip: "GREECE · ITALY",
  },
];


const Home = () => {

  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);


  /* =========================================
     AUTO CAROUSEL
  ========================================= */

  useEffect(() => {

    if (isPaused) return;

    const interval = setInterval(() => {

      setActiveSlide((current) =>
        current === heroSlides.length - 1
          ? 0
          : current + 1
      );

    }, 5500);

    return () => clearInterval(interval);

  }, [isPaused]);


  const nextSlide = () => {
    setActiveSlide((current) =>
      current === heroSlides.length - 1
        ? 0
        : current + 1
    );
  };


  const previousSlide = () => {
    setActiveSlide((current) =>
      current === 0
        ? heroSlides.length - 1
        : current - 1
    );
  };


  const goToSlide = (index) => {
    setActiveSlide(index);
  };


  const active = heroSlides[activeSlide];


  return (
    <div className="home-page">


      {/* =========================================
          HERO LUXURY CAROUSEL
      ========================================= */}

      <section
        className="home-hero hero-carousel"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >

        {/* Background Slides */}

        <div className="hero-slides">

          {heroSlides.map((slide, index) => (

            <div
              className={`hero-slide ${index === activeSlide ? "active" : ""
                }`}
              key={slide.id}
            >

              <img
                src={slide.image}
                alt={slide.title}
              />

              <div className="hero-slide-overlay" />

            </div>

          ))}

        </div>


        {/* Decorative Frame */}

        <div className="hero-frame" />


        {/* Main Content */}

        <div className="container hero-container">

          <div className="hero-content">


            <div className="hero-slide-meta">

              <span className="hero-slide-number">
                {active.number}
              </span>

              <span className="hero-meta-line" />

              <span>
                {active.location}
              </span>

            </div>


            <div className="hero-eyebrow">

              <span />

              {active.accent}

            </div>


            <h1 key={active.id} className="hero-title-animated">

              Discover

              <br />

              <em>{active.title}</em>

              <br />

              Your Way.

            </h1>


            <p
              key={`description-${active.id}`}
              className="hero-description-animated"
            >
              {active.description}
            </p>


            <div className="hero-actions">

              <Link
                to="/destinations"
                className="hero-primary-btn"
              >
                Explore {active.title}

                <ArrowUpRight size={18} />

              </Link>


              <Link
                to="/tours"
                className="hero-secondary-btn"
              >
                View Tours

                <ArrowRight size={17} />

              </Link>

            </div>

          </div>


          {/* Right Editorial Information */}

          <div className="hero-editorial">

            <div className="hero-editorial-top">

              <span>EUROVIA</span>

              <small>
                EUROPE · TRAVEL · STORIES
              </small>

            </div>


            <div className="hero-editorial-middle">

              <span>01</span>

              <div className="editorial-vertical-line" />

              <span>
                CURATED
                <br />
                JOURNEYS
              </span>

            </div>


            <div className="hero-side">

              <div className="hero-side-line" />

              <span>
                SCROLL TO EXPLORE
              </span>

              <div className="hero-scroll">

                <ChevronDown size={17} />

              </div>

            </div>

          </div>

        </div>


        {/* =========================================
            CAROUSEL CONTROLS
        ========================================= */}

        <div className="hero-carousel-controls">

          <button
            className="hero-control-arrow btn-rounded-5"
            onClick={previousSlide}
            aria-label="Previous destination"
          >
            <ChevronLeft size={19} />
          </button>


          <div className="hero-dots">

            {heroSlides.map((slide, index) => (

              <button
                key={slide.id}
                className={`hero-dot ${index === activeSlide ? "active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to ${slide.title}`}
              >

                <span>
                  {slide.number}
                </span>

              </button>

            ))}

          </div>


          <button
            className="hero-control-arrow"
            onClick={nextSlide}
            aria-label="Next destination"
          >
            <ChevronRight size={19} />
          </button>

        </div>


        {/* =========================================
            HERO BOTTOM BAR
        ========================================= */}

        <div className="hero-bottom">

          <div className="container">

            <div className="hero-bottom-inner">

              <span>
                <Globe2 size={16} />
                28 COUNTRIES
              </span>

              <span>
                <Sparkles size={16} />
                120+ EXPERIENCES
              </span>

              <span>
                <ShieldCheck size={16} />
                HANDPICKED JOURNEYS
              </span>

              <span className="hero-current-destination">
                NOW EXPLORING · {active.title.toUpperCase()}
              </span>

            </div>

          </div>

        </div>


      </section>


      {/* =========================================
          SEARCH
      ========================================= */}

      <section className="travel-search-section">

        <div className="container">

          <div className="travel-search">

            <div className="search-heading">

              <span>PLAN YOUR ESCAPE</span>

              <h3>
                Where will Europe
                <br />
                take you?
              </h3>

            </div>


            <div className="search-field">

              <MapPin size={19} />

              <div>

                <small>DESTINATION</small>

                <select defaultValue="">

                  <option value="" disabled>
                    Choose a destination
                  </option>

                  <option>France</option>
                  <option>Italy</option>
                  <option>Switzerland</option>
                  <option>Greece</option>
                  <option>Spain</option>
                  <option>Portugal</option>

                </select>

              </div>

            </div>


            <div className="search-field">

              <CalendarDays size={19} />

              <div>

                <small>TRAVEL DATE</small>

                <input
                  type="date"
                  placeholder="Choose a date"
                />

              </div>

            </div>


            <div className="search-field">

              <Compass size={19} />

              <div>

                <small>TRAVEL STYLE</small>

                <select defaultValue="">

                  <option value="" disabled>
                    Select style
                  </option>

                  <option>
                    Luxury Escape
                  </option>

                  <option>
                    Romantic Getaway
                  </option>

                  <option>
                    Family Holiday
                  </option>

                  <option>
                    Adventure
                  </option>

                  <option>
                    Slow Travel
                  </option>

                </select>

              </div>

            </div>


            <button className="search-btn">

              <Search size={19} />

              Search

            </button>

          </div>

        </div>

      </section>


      {/* =========================================
          INTRO
      ========================================= */}

      <section className="home-intro section-padding">

        <div className="container">

          <div className="intro-grid">

            <div className="intro-image-wrap">

              <div className="intro-image">

                <img
                  src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1000&q=85"
                  alt="European travel"
                />

              </div>


              <div className="intro-stamp">

                <span>EST.</span>

                <strong>2016</strong>

                <small>EUROVIA</small>

              </div>

            </div>


            <div className="intro-content">

              <span className="section-label">
                THE EUROVIA WAY
              </span>

              <h2 className="section-title">

                Europe isn't just

                <br />

                a destination.

                <br />

                <span>It's a feeling.</span>

              </h2>


              <p>
                We believe the best journeys are not measured
                in miles, but in moments. A hidden café in
                Paris. A sunset over Santorini. A train winding
                through the Swiss Alps.
              </p>


              <p>
                Eurovia creates carefully crafted journeys that
                blend iconic places with unexpected discoveries,
                giving you the freedom to experience Europe
                beyond the guidebook.
              </p>


              <Link
                to="/about"
                className="text-link"
              >
                Discover Our Story
                <ArrowUpRight size={17} />
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          STATS
      ========================================= */}

      <section className="stats-section">

        <div className="container">

          <div className="stats-grid">

            {stats.map((stat) => (

              <div
                className="stat-item"
                key={stat.label}
              >

                <strong>{stat.number}</strong>

                <span>{stat.label}</span>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================
          DESTINATIONS
      ========================================= */}

      <section className="destinations-preview section-padding">

        <div className="container">

          <div className="section-top-row">

            <div>

              <span className="section-label">
                PLACES TO GO
              </span>

              <h2 className="section-title">

                Europe,

                <br />

                <span>your way.</span>

              </h2>

            </div>


            <div className="section-top-right">

              <p>
                From legendary cities to quiet coastlines,
                discover places chosen for the way they make
                you feel.
              </p>


              <Link
                to="/destinations"
                className="circle-link"
              >

                <ArrowUpRight size={21} />

              </Link>

            </div>

          </div>


          <div className="destination-grid">

            {destinations.map((destination) => (

              <DestinationCard
                key={destination.id}
                {...destination}
              />

            ))}

          </div>

        </div>

      </section>


      {/* =========================================
          TOURS
      ========================================= */}

      <section className="tours-preview section-padding">

        <div className="container">

          <div className="tour-heading">

            <div>

              <span className="section-label">
                CURATED JOURNEYS
              </span>

              <h2 className="section-title">

                Trips worth

                <br />

                <span>remembering.</span>

              </h2>

            </div>


            <Link
              to="/tours"
              className="black-link"
            >
              View All Tours
              <ArrowUpRight size={17} />
            </Link>

          </div>


          <div className="tour-grid">

            {tours.map((tour) => (

              <TourCard
                key={tour.id}
                {...tour}
              />

            ))}

          </div>

        </div>

      </section>


      {/* =========================================
          EXPERIENCE FEATURE
      ========================================= */}

      <section className="experience-feature">

        <div className="experience-image">

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu09-49an9w-9bAjn8Mk7jgaR1CbyTPPirwqvtY8G1mw&s=10"
            alt="European experience"
          />

          <div className="experience-image-overlay" />

        </div>


        <div className="container experience-container">

          <div className="experience-card">

            <span className="section-label">
              BEYOND THE ITINERARY
            </span>

            <h2 className="text-light">

              Travel is

              <br />

              <span >about living.</span>

            </h2>


            <p className="text-light">
              Meet local makers. Taste family recipes.
              Wander without a map. Wake up somewhere
              extraordinary.
            </p>


            <Link
              to="/experiences"
              className="experience-btn"
            >
              Explore Experiences
              <ArrowUpRight size={18} />
            </Link>

          </div>

        </div>

      </section>


      {/* =========================================
          WHY EUROVIA
      ========================================= */}

      <section className="why-section section-padding">

        <div className="container">

        

          <div className="why-grid">

            <div className="why-item">

              <div className="why-icon">
                <Compass size={25} />
              </div>

              <span>01</span>

              <h3>
                Curated, not crowded
              </h3>

              <p>
                We focus on meaningful experiences,
                not ticking every tourist attraction
                off a list.
              </p>

            </div>


            <div className="why-item">

              <div className="why-icon">
                <Sparkles size={25} />
              </div>

              <span>02</span>

              <h3>
                Designed around you
              </h3>

              <p>
                Every journey can be shaped around your
                interests, pace and personal travel style.
              </p>

            </div>


            <div className="why-item">

              <div className="why-icon">
                <ShieldCheck size={25} />
              </div>

              <span>03</span>

              <h3>
                Care from start to finish
              </h3>

              <p>
                From planning to your final transfer,
                our team is there whenever you need us.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          TESTIMONIALS
      ========================================= */}

      <section className="testimonial-section">

        <div className="container">

          <div className="testimonial-header">

            <span className="section-label">
              TRAVELLER STORIES
            </span>

            <h2 className="section-title">

              Loved by those

              <br />

              who <span>travel with us.</span>

            </h2>

          </div>


          <div className="testimonial-grid">

            {testimonials.map((testimonial, index) => (

              <article
                className={`testimonial-card ${index === 1 ? "featured" : ""
                  }`}
                key={testimonial.name}
              >

                <div className="quote-mark">
                  “
                </div>


                <div className="stars">

                  {[1, 2, 3, 4, 5].map((star) => (

                    <Star
                      key={star}
                      size={14}
                      fill="currentColor"
                    />

                  ))}

                </div>


                <p>
                  {testimonial.text}
                </p>


                <div className="testimonial-author">

                  <div className="author-avatar">
                    {testimonial.name.charAt(0)}
                  </div>


                  <div>

                    <strong>
                      {testimonial.name}
                    </strong>

                    <span>
                      {testimonial.trip}
                    </span>

                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================
          NEWSLETTER
      ========================================= */}

    

    </div>
  );
};

export default Home;