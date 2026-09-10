import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import "./DestinationCard.css";

const DestinationCard = ({
  id,
  number,
  name,
  country,
  image,
  description,
}) => {
  return (
    <article className="destination-card">

      <div className="destination-image">
        <img
          src={image}
          alt={name}
        />

        <span className="destination-number">
          {number}
        </span>

        <div className="destination-overlay" />
      </div>

      <div className="destination-content">

        <div>
          <span className="destination-country">
            {country}
          </span>

          <h3>{name}</h3>

          {description && (
            <p>{description}</p>
          )}
        </div>

        <Link
          to={`/destinations/${id}`}
          className="destination-arrow"
        >
          <ArrowUpRight size={20} />
        </Link>

      </div>

    </article>
  );
};

export default DestinationCard;