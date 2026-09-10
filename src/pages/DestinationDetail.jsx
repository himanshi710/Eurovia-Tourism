import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  MapPin,
} from "lucide-react";

import "./DestinationDetail.css";

const destinationData = {
  paris: {
    name: "Paris",
    country: "FRANCE",
    region: "WESTERN EUROPE",
    description:
      "Elegant boulevards, intimate cafés, timeless art and unforgettable evenings along the Seine.",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=2200&q=90",
  },
  "amalfi-coast": {
    name: "Amalfi Coast",
    country: "ITALY",
    region: "SOUTHERN EUROPE",
    description:
      "Cliffside villages, turquoise waters, lemon-scented streets and unforgettable Italian sunsets.",
    image:
      "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?auto=format&fit=crop&w=2200&q=90",
  },
  "swiss-alps": {
    name: "Swiss Alps",
    country: "SWITZERLAND",
    region: "CENTRAL EUROPE",
    description:
      "Snow-covered peaks, peaceful villages and spectacular journeys through the heart of the Alps.",
    image:
      "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=2200&q=90",
  },
  santorini: {
    name: "Santorini",
    country: "GREECE",
    region: "EUROPEAN ISLANDS",
    description:
      "Whitewashed villages, volcanic landscapes and magical sunsets above the Aegean Sea.",
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=2200&q=90",
  },
  lisbon: {
    name: "Lisbon",
    country: "PORTUGAL",
    region: "WESTERN EUROPE",
    description:
      "Golden light, tiled streets, colourful neighbourhoods and a relaxed Atlantic rhythm.",
    image:
      "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=2200&q=90",
  },
  barcelona: {
    name: "Barcelona",
    country: "SPAIN",
    region: "WESTERN EUROPE",
    description:
      "Gaudí architecture, Mediterranean beaches and vibrant neighbourhood life.",
    image:
      "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=2200&q=90",
  },
  prague: {
    name: "Prague",
    country: "CZECHIA",
    region: "CENTRAL EUROPE",
    description:
      "Historic squares, atmospheric streets and beautiful evenings beside the Vltava.",
    image:
      "https://images.unsplash.com/photo-1519671282424-0f8c7c4f8c1c?auto=format&fit=crop&w=2200&q=90",
  },
  vienna: {
    name: "Vienna",
    country: "AUSTRIA",
    region: "CENTRAL EUROPE",
    description:
      "Imperial architecture, classical music, elegant cafés and refined European culture.",
    image:
      "https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&w=2200&q=90",
  },
};

const DestinationDetail = () => {
  const { id } = useParams();

  const destination = destinationData[id] || destinationData.paris;

  return (
    <div className="destination-detail-page">

      {/* HERO */}

      <section className="destination-detail-hero">

        <div className="destination-detail-image">
          <img
            src={destination.image}
            alt={destination.name}
          />
        </div>

        <div className="destination-detail-overlay" />

        <div className="container">

          <div className="destination-detail-content">

            <Link
              to="/destinations"
              className="destination-back"
            >
              <ArrowLeft size={16} />
              All destinations
            </Link>

            <span className="destination-detail-country">
              {destination.country}
            </span>

            <h1>{destination.name}</h1>

            <p>{destination.description}</p>

            <div className="destination-detail-meta">

              <span>
                <MapPin size={15} />
                {destination.region}
              </span>

              <span>
                <CalendarDays size={15} />
                Best explored year-round
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* INTRO */}

      <section className="destination-detail-intro">

        <div className="container">

          <div className="destination-detail-intro-grid">

            <div className="detail-number">
              01
            </div>

            <div>

              <span className="detail-label">
                YOUR EUROPE STORY
              </span>

              <h2>
                Discover the
                <br />
                <span>character of {destination.name}.</span>
              </h2>

              <p>
                Every destination has its own rhythm.
                The best way to experience it is to slow
                down, explore beyond the obvious and leave
                space for unexpected moments.
              </p>

              <p>
                EUROVIA creates thoughtful journeys that
                combine beautiful places with authentic
                experiences, comfortable stays and enough
                freedom to make the trip your own.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* HIGHLIGHTS */}

      <section className="destination-highlights">

        <div className="container">

          <div className="destination-highlights-heading">

            <span className="detail-label">
              WHY GO
            </span>

            <h2>
              Moments you'll
              <br />
              <span>remember.</span>
            </h2>

          </div>


          <div className="destination-highlights-grid">

            <div>
              <span>01</span>
              <h3>Local life</h3>
              <p>
                Wander through neighbourhoods and discover
                the everyday rhythm of your destination.
              </p>
            </div>

            <div>
              <span>02</span>
              <h3>Beautiful places</h3>
              <p>
                From iconic landmarks to hidden corners,
                experience the places that define the region.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>Unhurried days</h3>
              <p>
                Build your journey around your own pace,
                interests and moments of discovery.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="destination-detail-cta">

        <div className="container">

          <div className="destination-detail-cta-inner">

            <div>

              <span>
                READY TO DISCOVER {destination.name.toUpperCase()}?
              </span>

              <h2>
                Let's plan your
                <br />
                <strong>European story.</strong>
              </h2>

            </div>

            <Link to="/contact">
              Plan my journey
              <ArrowUpRight size={18} />
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
};

export default DestinationDetail;