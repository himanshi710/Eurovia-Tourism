import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Clock3,
  MapPin,
} from "lucide-react";

import "./TourCard.css";

const TourCard = ({
  id,
  image,
  category,
  title,
  location,
  duration,
  price,
}) => {
  return (
    <article className="tour-card">

      <div className="tour-image">
        <img
          src={image}
          alt={title}
        />

        <span className="tour-category">
          {category}
        </span>

        <span className="tour-price">
          From €{price}
        </span>
      </div>

      <div className="tour-content">

        <div className="tour-meta">
          <span>
            <MapPin size={14} />
            {location}
          </span>

          <span>
            <Clock3 size={14} />
            {duration}
          </span>
        </div>

        <h3>{title}</h3>

        <Link
          to={`/tours/${id}`}
          className="tour-link"
        >
          Explore Tour
          <ArrowUpRight size={17} />
        </Link>

      </div>

    </article>
  );
};

export default TourCard;