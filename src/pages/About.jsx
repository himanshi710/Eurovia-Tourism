import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Compass,
  Heart,
  MapPin,
  Sparkles,
  Users,
  TrainFront,
  Coffee,
  Camera,
  Landmark,
} from "lucide-react";

import "./About.css";

const values = [
  {
    icon: Compass,
    number: "01",
    title: "Travel With Purpose",
    text: "We create journeys that connect you with places, people and stories instead of simply taking you from one attraction to another.",
  },
  {
    icon: Sparkles,
    number: "02",
    title: "Beautifully Curated",
    text: "Every hotel, experience and destination is carefully selected to make your European journey feel effortless and memorable.",
  },
  {
    icon: Heart,
    number: "03",
    title: "Made For You",
    text: "Your interests, pace and personality shape the journey. No two Eurovia trips have to look the same.",
  },
];

const countries = [
  "France",
  "Italy",
  "Switzerland",
  "Greece",
  "Spain",
  "Portugal",
  "Austria",
  "Croatia",
];

const travelMoments = [
  {
    number: "01",
    title: "Slow Mornings",
    place: "PARIS · FRANCE",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1000&q=90",
    icon: Coffee,
  },
  {
    number: "02",
    title: "Scenic Railways",
    place: "SWITZERLAND",
    image:
      "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1000&q=90",
    icon: TrainFront,
  },
  {
    number: "03",
    title: "Island Evenings",
    place: "SANTORINI · GREECE",
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1000&q=90",
    icon: Camera,
  },
];

const About = () => {
  return (
    <div className="about-page">

      {/* =================================================
          HERO
      ================================================= */}

      <section className="about-hero">

        <div className="about-hero-image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu09-49an9w-9bAjn8Mk7jgaR1CbyTPPirwqvtY8G1mw&s=10"
            alt="Beautiful European city"
          />
        </div>

        <div className="about-hero-overlay" />

        <div className="container about-hero-content">

          <span className="about-breadcrumb">
            HOME <span>/</span> ABOUT EUROVIA
          </span>

          <div className="hero-kicker">
            EUROPE · TRAVEL · STORIES
          </div>

          <h1>
            We don't just
            <br />
            plan <em>trips.</em>
          </h1>

          <p>
            We create stories you'll carry home.
          </p>

          <div className="hero-scroll">
            <span>SCROLL TO EXPLORE</span>
            <span className="hero-scroll-line" />
          </div>

        </div>

        <div className="about-hero-bottom">
          <div className="container">
            <span>EUROVIA · ABOUT</span>
            <span>EST. 2016</span>
          </div>
        </div>

      </section>


      {/* =================================================
          STORY INTRO
      ================================================= */}

      <section className="about-story section-padding">

        <div className="container">

          <div className="about-story-grid">

            <div className="story-label-column">

              <span className="section-label">
                THE EUROVIA STORY
              </span>

              <div className="story-number">
                01
              </div>

              <div className="story-mini">
                <span>DISCOVER</span>
                <span>FEEL</span>
                <span>REMEMBER</span>
              </div>

            </div>

            <div className="story-main">

              <h2>
                Europe has a way
                <br />
                of making you
                <br />
                <span>feel alive.</span>
              </h2>

              <p className="story-lead">
                Maybe it is the first espresso in a tiny Roman café.
                Maybe it is a train disappearing into the Swiss
                mountains or the sound of waves meeting a Greek island.
              </p>

              <p>
                Eurovia was created for travellers who want more than a
                checklist. We design journeys around those little moments
                that make a place unforgettable.
              </p>

              <p>
                Our team combines local knowledge, thoughtful planning
                and a love for beautiful places to create European
                adventures that feel personal, effortless and completely
                yours.
              </p>

              <Link
                to="/destinations"
                className="story-link"
              >
                Explore Our Destinations
                <ArrowUpRight size={18} />
              </Link>

            </div>

          </div>

        </div>

      </section>


      


      {/* =================================================
          TRAVEL MOMENTS
      ================================================= */}

      <section className="moments-section section-padding">

        <div className="container">

          <div className="moments-heading">

            <div>
              <span className="section-label">
                THE LITTLE THINGS
              </span>

              <h2 className="section-title">
                It's the moments
                <br />
                <span>you remember.</span>
              </h2>
            </div>

            <p>
              A Eurovia journey is made from more than destinations.
              It is the coffee, the conversations, the unexpected views
              and the moments between the plans.
            </p>

          </div>

          <div className="moments-grid">

            {travelMoments.map((item) => {

              const Icon = item.icon;

              return (
                <article
                  className="moment-card"
                  key={item.number}
                >

                  <div className="moment-image">
                    <img
                      src={item.image}
                      alt={item.title}
                    />

                    <span className="moment-number">
                      {item.number}
                    </span>

                    <div className="moment-icon">
                      <Icon size={19} />
                    </div>
                  </div>

                  <div className="moment-content">

                    <span>{item.place}</span>

                    <h3>{item.title}</h3>

                    <ArrowUpRight size={20} />

                  </div>

                </article>
              );
            })}

          </div>

        </div>

      </section>


      {/* =================================================
          MISSION
      ================================================= */}

      <section className="mission-section section-padding">

        <div className="container">

          <div className="mission-grid">

            <div className="mission-content">

              <span className="section-label">
                WHAT WE BELIEVE
              </span>

              <h2 className="section-title">
                Travel should
                <br />
                feel <span>personal.</span>
              </h2>

              <p>
                The best trips aren't necessarily the ones with the
                longest itineraries. They're the ones where everything
                feels right.
              </p>

              <p>
                A hotel with character. A local guide who knows the
                hidden corners. Enough time to stop for another coffee.
                A perfect sunset you didn't plan for.
              </p>

              <div className="mission-checks">

                <div>
                  <Check size={16} />
                  Handpicked stays
                </div>

                <div>
                  <Check size={16} />
                  Local experiences
                </div>

                <div>
                  <Check size={16} />
                  Flexible itineraries
                </div>

                <div>
                  <Check size={16} />
                  Personal travel support
                </div>

              </div>

              <Link
                to="/contact"
                className="mission-link"
              >
                Plan A Personal Journey
                <ArrowUpRight size={17} />
              </Link>

            </div>

            <div className="mission-visual">

              <div className="mission-image main">
                <img
                  src="https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?auto=format&fit=crop&w=1100&q=90"
                  alt="Amalfi Coast"
                />

                <div className="mission-image-tag">
                  <MapPin size={14} />
                  AMALFI COAST · ITALY
                </div>
              </div>

              <div className="mission-small-image">
                <img
                  src="https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=700&q=90"
                  alt="Lisbon Portugal"
                />
              </div>

              <div className="mission-stamp">
                <span>EUROVIA</span>
                <strong>TRAVEL</strong>
                <small>EST. 2016</small>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          VALUES
      ================================================= */}

      <section className="values-section section-padding">

        <div className="container">

          <div className="values-heading">

            <span className="section-label">
              OUR VALUES
            </span>

            <h2 className="section-title">
              The way we
              <br />
              <span>travel.</span>
            </h2>

          </div>

          <div className="values-grid">

            {values.map((value) => {

              const Icon = value.icon;

              return (
                <article
                  className="value-card"
                  key={value.number}
                >

                  <div className="value-top">

                    <div className="value-icon">
                      <Icon size={23} />
                    </div>

                    <span>
                      {value.number}
                    </span>

                  </div>

                  <h3>
                    {value.title}
                  </h3>

                  <p>
                    {value.text}
                  </p>

                  <div className="value-line" />

                </article>
              );
            })}

          </div>

        </div>

      </section>


      {/* =================================================
          EUROPE DESTINATIONS
      ================================================= */}

      <section className="countries-section">

        <div className="countries-image">

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu09-49an9w-9bAjn8Mk7jgaR1CbyTPPirwqvtY8G1mw&s=10"
            alt="European mountain landscape"
          />

        </div>

        <div className="countries-overlay" />

        <div className="container countries-container">

          <div className="countries-content">

            <span className="section-label">
              OUR EUROPE
            </span>

            <h2>
              One continent.
              <br />
              <span>Endless stories.</span>
            </h2>

            <p>
              From Mediterranean coastlines and romantic capitals to
              alpine villages and ancient cities, our journeys span
              the places that make Europe extraordinary.
            </p>

            <div className="country-list">

              {countries.map((country) => (
                <span key={country}>
                  {country}
                </span>
              ))}

            </div>

            <Link
              to="/destinations"
              className="countries-btn"
            >
              Discover Destinations
              <ArrowRight size={17} />
            </Link>

          </div>

        </div>

      </section>


      {/* =================================================
          EUROPE NUMBERS
      ================================================= */}

      <section className="about-stats section-padding">

        <div className="container">

          <div className="stats-intro">

            <span className="section-label">
              BY THE NUMBERS
            </span>

            <h2 className="section-title">
              More places.
              <br />
              More <span>stories.</span>
            </h2>

          </div>

          <div className="stats-grid">

            <div className="about-stat">
              <strong>28</strong>
              <span>EUROPEAN COUNTRIES</span>
              <p>
                From iconic capitals to places beyond the usual route.
              </p>
            </div>

            <div className="about-stat">
              <strong>15K+</strong>
              <span>TRAVELLERS</span>
              <p>
                People who chose to experience Europe differently.
              </p>
            </div>

            <div className="about-stat">
              <strong>10+</strong>
              <span>YEARS EXPLORING</span>
              <p>
                A decade of discovering better ways to travel.
              </p>
            </div>

            <div className="about-stat">
              <strong>∞</strong>
              <span>WAYS TO EXPLORE</span>
              <p>
                Because your Europe story should never feel standard.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          PEOPLE
      ================================================= */}

      <section className="people-section section-padding">

        <div className="container">

          <div className="people-grid">

            <div className="people-image">

              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1300&q=90"
                alt="Eurovia travel team"
              />

              <div className="people-image-label">
                <span>THE PEOPLE</span>
                <strong>BEHIND EUROVIA</strong>
              </div>

              <div className="people-badge">
                <Users size={20} />
                <span>
                  TRAVEL
                  <br />
                  PEOPLE
                </span>
              </div>

            </div>

            <div className="people-content">

              <span className="section-label">
                BEHIND EUROVIA
              </span>

              <h2 className="section-title">
                A team that
                <br />
                <span>loves to go.</span>
              </h2>

              <p>
                We're a team of travellers, planners, storytellers and
                curious humans who believe that discovering somewhere
                new can change the way you see the world.
              </p>

              <p>
                We've explored Europe by train, road, ferry, foot and
                far too many early-morning flights. That experience
                helps us turn your ideas into journeys that actually work.
              </p>

              <div className="people-highlight">
                <Landmark size={22} />

                <div>
                  <strong>LOCAL KNOWLEDGE</strong>
                  <span>
                    Personal recommendations from people who know Europe.
                  </span>
                </div>
              </div>

              <div className="people-stats">

                <div>
                  <strong>10+</strong>
                  <span>YEARS EXPLORING</span>
                </div>

                <div>
                  <strong>28</strong>
                  <span>COUNTRIES</span>
                </div>

                <div>
                  <strong>15K+</strong>
                  <span>TRAVELLERS</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          FINAL IMAGE STRIP
      ================================================= */}

      <section className="about-photo-strip">

        <div className="photo-strip-item">
          <img
            src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=90"
            alt="Paris"
          />
          <span>PARIS</span>
        </div>

        <div className="photo-strip-item">
          <img
            src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=900&q=90"
            alt="Venice"
          />
          <span>VENICE</span>
        </div>

        <div className="photo-strip-item">
          <img
            src="https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=900&q=90"
            alt="Swiss Alps"
          />
          <span>SWISS ALPS</span>
        </div>

        <div className="photo-strip-item">
          <img
            src="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=900&q=90"
            alt="Santorini"
          />
          <span>SANTORINI</span>
        </div>

        <div className="photo-strip-item">
          <img
            src="https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=900&q=90"
            alt="Lisbon"
          />
          <span>LISBON</span>
        </div>

      </section>


      {/* =================================================
          CTA
      ================================================= */}

      <section className="about-cta">

        <div className="about-cta-watermark">
          EUROPE
        </div>

        <div className="container">

          <div className="about-cta-inner">

            <div>

              <span>
                READY TO START?
              </span>

              <h2>
                Your Europe
                <br />
                story starts <em>here.</em>
              </h2>

              <p>
                Tell us where you want to go.
                We'll help you decide how you want to feel.
              </p>

            </div>

            <Link
              to="/contact"
              className="about-cta-button"
            >
              Start Planning
              <ArrowUpRight size={20} />
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
};

export default About;