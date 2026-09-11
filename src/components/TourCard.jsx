import {
  ArrowRight,
  BedDouble,
  CalendarDays,
  MapPin,
  MessageCircle,
} from "lucide-react";

import { Link } from "react-router-dom";

import "./TourCard.css";

const TourCard = ({
  number,
  title,
  location,
  duration,
  price,
  image,
  category,
}) => {
  return (
    <article className="tour-card">

      {/* =========================
          IMAGE
      ========================= */}
      <div className="tour-card-image">

        <img
          src={image}
          alt={title}
        />

        <div className="tour-card-image-overlay" />

        {/* Duration Badge */}
        <span className="tour-duration-badge">
          {duration.toUpperCase()}
        </span>

        {/* Location */}
        <div className="tour-image-location">
          <MapPin size={13} />
          <span>{location.split("·")[0].trim()}</span>
        </div>

        {/* Card Number */}
        <span className="tour-card-number">
          {number}
        </span>

      </div>


      {/* =========================
          CARD BODY
      ========================= */}
      <div className="tour-card-body">

        {/* Title */}
        <h3>
          {title}
        </h3>


        {/* Description */}
        <p className="tour-card-description">
          Experience the best of Europe with carefully
          planned stays, scenic routes and unforgettable
          moments along the way.
        </p>


        {/* =========================
            TAGS
        ========================= */}
        <div className="tour-card-tags">

          <span>
            {category}
          </span>

          <span>
            FAMILY
          </span>

          <span>
            CURATED
          </span>

        </div>


        {/* =========================
            DETAILS
        ========================= */}
        <div className="tour-card-details">

          <div className="tour-detail">

            <BedDouble size={16} />

            <span>
              <strong>3 Star Hotels</strong>
            </span>

          </div>


          <div className="tour-detail">

            <CalendarDays size={16} />

            <span>
              <strong>
                April to October
              </strong>
            </span>

          </div>

        </div>


        {/* =========================
            PRICE
        ========================= */}
        <div className="tour-card-price">

          <span>
            STARTING FROM
          </span>

          <strong>
            {price}
          </strong>

          <small>
            per person on twin sharing
          </small>

        </div>


        {/* =========================
            ACTION BUTTONS
        ========================= */}
        <div className="tour-card-actions">

          <Link
            to={`/tours/${title
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/^-|-$/g, "")}`}
            className="tour-view-btn"
          >
            <span>
              View Details
            </span>

            <ArrowRight size={16} />
          </Link>


          <Link
            to="/contact"
            className="tour-enquire-btn"
          >
            <MessageCircle size={15} />

            <span>
              Enquire Now
            </span>

          </Link>

        </div>

      </div>

    </article>
  );
};

export default TourCard;