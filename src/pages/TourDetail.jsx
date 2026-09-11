import { Link, useParams } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  Clock3,
  MapPin,
  Sparkles,
  Star,
  Users,
} from "lucide-react";

import "./TourDetail.css";

const tourDetails = {
  "grand-european-journey": {
    number: "01",
    title: "Grand European Journey",
    highlight: "Grand European",
    location: "Paris · Rome · Zurich",
    duration: "12 Days / 11 Nights",
    price: "₹1,89,000",
    category: "MULTI-COUNTRY",
    image:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=2200&q=90",

    description:
      "A beautifully paced journey through three of Europe's most iconic destinations. Begin beneath the Parisian lights, continue through the timeless streets of Rome and finish among the spectacular landscapes of the Swiss Alps.",

    intro:
      "This is Europe at its most unforgettable — art, architecture, food, mountains and slow moments connected into one seamless journey.",

    highlights: [
      "Parisian neighbourhoods and Seine evenings",
      "Ancient Rome and authentic Italian dining",
      "Scenic journey through Switzerland",
      "Swiss Alpine landscapes",
      "Handpicked hotels and experiences",
      "Flexible private travel support",
    ],

    itinerary: [
      ["01", "ARRIVE IN PARIS", "Welcome to Paris. Settle into your beautiful hotel and spend the evening exploring the neighbourhood around your stay."],
      ["02", "PARIS · THE CLASSICS", "Discover the Louvre, Champs-Élysées, Eiffel Tower and the quieter streets that reveal another side of Paris."],
      ["03", "PARIS · SLOW DAY", "Enjoy a relaxed Parisian morning, long lunch and an evening beside the Seine."],
      ["04", "PARIS TO ROME", "Travel onward to Rome and settle into the rhythm of the Eternal City."],
      ["05", "ROME · ANCIENT & TIMELESS", "Explore the Colosseum, Roman Forum and atmospheric streets of central Rome."],
      ["06", "ROME · LOCAL LIFE", "A slower day for neighbourhood discoveries, cafés, markets and Italian flavours."],
      ["07", "ROME TO ZURICH", "Continue north towards Switzerland and enjoy the changing European landscape."],
      ["08", "ZURICH", "Discover Zurich's old town, lakeside streets and elegant cafés."],
      ["09", "INTO THE ALPS", "Journey deeper into the Swiss mountains towards Interlaken."],
      ["10", "ALPINE ESCAPE", "Enjoy spectacular mountain scenery, fresh air and a beautifully slow day in the Alps."],
      ["11", "ZERMATT", "Discover the mountain village of Zermatt and views towards the Matterhorn."],
      ["12", "DEPARTURE", "Your European story comes to an end with a relaxed departure from Switzerland."],
    ],
  },

  "italian-summer": {
    number: "02",
    title: "Italian Summer",
    highlight: "Italian Summer",
    location: "Rome · Florence · Amalfi",
    duration: "09 Days / 08 Nights",
    price: "₹1,39,000",
    category: "ITALY",
    image:
      "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?auto=format&fit=crop&w=2200&q=90",

    description:
      "Nine beautiful days through Rome, Florence and the Amalfi Coast, designed around art, food, sunshine and the unmistakable rhythm of Italian summer.",

    intro:
      "From Renaissance streets to Mediterranean sunsets, this journey brings together the Italy you've imagined with the quieter moments you'll remember.",

    highlights: [
      "Historic Rome",
      "Florence art and architecture",
      "Tuscan-inspired experiences",
      "Amalfi Coast villages",
      "Mediterranean evenings",
      "Handpicked stays",
    ],

    itinerary: [
      ["01", "ARRIVE IN ROME", "Arrive in Rome and enjoy a relaxed first evening."],
      ["02", "ROME", "Explore Rome's iconic landmarks and atmospheric neighbourhoods."],
      ["03", "ROME TO FLORENCE", "Travel north to Florence and discover its Renaissance beauty."],
      ["04", "FLORENCE", "Spend the day around galleries, piazzas and Italian cafés."],
      ["05", "FLORENCE TO AMALFI", "Continue south towards the Mediterranean."],
      ["06", "AMALFI COAST", "Explore cliffside villages and spectacular coastal views."],
      ["07", "AMALFI", "A slow day for beaches, boats and long lunches."],
      ["08", "AMALFI", "Enjoy your final Italian evening overlooking the sea."],
      ["09", "DEPARTURE", "Your Italian summer comes to an end."],
    ],
  },

  "swiss-alpine-escape": {
    number: "03",
    title: "Swiss Alpine Escape",
    highlight: "Swiss Alpine",
    location: "Zurich · Interlaken · Zermatt",
    duration: "08 Days / 07 Nights",
    price: "₹1,59,000",
    category: "SWITZERLAND",
    image:
      "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=2200&q=90",

    description:
      "A refreshing eight-day escape into Switzerland's spectacular mountains, peaceful lakes and legendary alpine towns.",

    intro:
      "Leave the noise behind. This journey is about crisp mountain air, scenic trains, quiet lakes and landscapes that stay with you long after you return.",

    highlights: [
      "Zurich old town",
      "Scenic Swiss railway journey",
      "Interlaken",
      "Alpine villages",
      "Zermatt and Matterhorn views",
      "Mountain experiences",
    ],

    itinerary: [
      ["01", "ARRIVE IN ZURICH", "Settle into Zurich and enjoy a relaxed lakeside evening."],
      ["02", "ZURICH", "Explore the old town, riverfront and local cafés."],
      ["03", "ZURICH TO INTERLAKEN", "Take a scenic journey into the Swiss mountains."],
      ["04", "INTERLAKEN", "Discover lakes, valleys and spectacular alpine views."],
      ["05", "INTERLAKEN", "Enjoy a flexible day for mountain experiences."],
      ["06", "INTERLAKEN TO ZERMATT", "Continue towards the iconic mountain village."],
      ["07", "ZERMATT", "Spend the day beneath the Matterhorn."],
      ["08", "DEPARTURE", "Depart Switzerland with unforgettable alpine memories."],
    ],
  },

  "greek-island-story": {
    number: "04",
    title: "Greek Island Story",
    highlight: "Greek Island",
    location: "Athens · Santorini · Mykonos",
    duration: "08 Days / 07 Nights",
    price: "₹1,29,000",
    category: "GREECE",
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=2200&q=90",

    description:
      "An eight-day Mediterranean escape combining ancient Athens with the whitewashed beauty of Santorini and the energy of Mykonos.",

    intro:
      "Blue seas, warm evenings, island villages and ancient history — Greece is best experienced slowly.",

    highlights: [
      "Athens historical landmarks",
      "Santorini sunset",
      "Whitewashed island villages",
      "Mykonos beaches",
      "Greek cuisine",
      "Island-hopping experience",
    ],

    itinerary: [
      ["01", "ARRIVE IN ATHENS", "Begin your Greek journey in the historic capital."],
      ["02", "ATHENS", "Explore ancient landmarks and lively neighbourhoods."],
      ["03", "ATHENS TO SANTORINI", "Fly or sail towards the Aegean and settle into island life."],
      ["04", "SANTORINI", "Discover villages, caldera views and spectacular sunsets."],
      ["05", "SANTORINI", "A relaxed island day with time to explore at your own pace."],
      ["06", "SANTORINI TO MYKONOS", "Continue your island story in Mykonos."],
      ["07", "MYKONOS", "Enjoy beaches, winding streets and a beautiful final evening."],
      ["08", "DEPARTURE", "Depart Greece with the Aegean still on your mind."],
    ],
  },

  "paris-provence": {
    number: "05",
    title: "Paris & Provence",
    highlight: "Paris & Provence",
    location: "Paris · Avignon · Nice",
    duration: "07 Days / 06 Nights",
    price: "₹1,19,000",
    category: "FRANCE",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=2200&q=90",

    description:
      "A seven-day French escape moving from Parisian elegance to the warm colours and slower rhythm of Provence before ending beside the Mediterranean in Nice.",

    intro:
      "One country, three completely different moods — sophisticated Paris, sun-drenched Provence and the sparkling French Riviera.",

    highlights: [
      "Paris landmarks",
      "Seine evening",
      "Avignon",
      "Provence villages",
      "French Riviera",
      "Nice coastline",
    ],

    itinerary: [
      ["01", "ARRIVE IN PARIS", "Begin your French journey in the heart of Paris."],
      ["02", "PARIS", "Explore iconic landmarks and beautiful neighbourhoods."],
      ["03", "PARIS TO AVIGNON", "Travel south into Provence."],
      ["04", "PROVENCE", "Discover villages, markets and the slower side of France."],
      ["05", "AVIGNON TO NICE", "Continue towards the Mediterranean."],
      ["06", "NICE", "Enjoy the Riviera, old town and coastal atmosphere."],
      ["07", "DEPARTURE", "Your French escape comes to an end."],
    ],
  },

  "portugal-by-the-ocean": {
    number: "06",
    title: "Portugal by the Ocean",
    highlight: "Portugal",
    location: "Lisbon · Porto · Algarve",
    duration: "08 Days / 07 Nights",
    price: "₹1,15,000",
    category: "PORTUGAL",
    image:
      "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=2200&q=90",

    description:
      "A relaxed Portuguese journey through Lisbon's tiled streets, Porto's riverside charm and the sun-filled coastline of the Algarve.",

    intro:
      "Portugal rewards slow travellers — with ocean air, beautiful food, colourful streets and long afternoons that never feel rushed.",

    highlights: [
      "Lisbon tram experience",
      "Historic neighbourhoods",
      "Porto riverside",
      "Portuguese cuisine",
      "Algarve coastline",
      "Ocean sunset",
    ],

    itinerary: [
      ["01", "ARRIVE IN LISBON", "Begin with Lisbon's colourful streets and relaxed energy."],
      ["02", "LISBON", "Explore historic neighbourhoods, viewpoints and cafés."],
      ["03", "LISBON TO PORTO", "Travel north to Porto."],
      ["04", "PORTO", "Discover riverside streets and local flavours."],
      ["05", "PORTO TO ALGARVE", "Head south towards Portugal's sunny coast."],
      ["06", "ALGARVE", "Enjoy beaches, cliffs and ocean views."],
      ["07", "ALGARVE", "A free day for a relaxed coastal experience."],
      ["08", "DEPARTURE", "Leave Portugal with the Atlantic in your memories."],
    ],
  },

  "spanish-discovery": {
    number: "07",
    title: "Spanish Discovery",
    highlight: "Spanish Discovery",
    location: "Barcelona · Seville · Madrid",
    duration: "09 Days / 08 Nights",
    price: "₹1,25,000",
    category: "SPAIN",
    image:
      "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=2200&q=90",

    description:
      "Discover Spain through three distinct cities — Barcelona's creativity, Seville's Andalusian soul and Madrid's sophisticated energy.",

    intro:
      "Architecture, tapas, flamenco, plazas and late-night conversations — Spain is a country made for living in the moment.",

    highlights: [
      "Barcelona architecture",
      "Gothic Quarter",
      "Seville old town",
      "Flamenco evening",
      "Madrid museums",
      "Spanish cuisine",
    ],

    itinerary: [
      ["01", "ARRIVE IN BARCELONA", "Begin your Spanish journey beside the Mediterranean."],
      ["02", "BARCELONA", "Discover Gaudí, the Gothic Quarter and local food."],
      ["03", "BARCELONA", "Enjoy a slower city day."],
      ["04", "BARCELONA TO SEVILLE", "Continue south into Andalusia."],
      ["05", "SEVILLE", "Explore plazas, architecture and hidden courtyards."],
      ["06", "SEVILLE", "Experience local culture and an evening of flamenco."],
      ["07", "SEVILLE TO MADRID", "Travel towards Spain's capital."],
      ["08", "MADRID", "Explore museums, grand boulevards and neighbourhood cafés."],
      ["09", "DEPARTURE", "End your Spanish discovery."],
    ],
  },

  "vienna-prague": {
    number: "08",
    title: "Vienna & Prague",
    highlight: "Vienna & Prague",
    location: "Vienna · Prague · Budapest",
    duration: "08 Days / 07 Nights",
    price: "₹1,22,000",
    category: "CENTRAL EUROPE",
    image:
      "https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&w=2200&q=90",

    description:
      "A refined Central European journey through Vienna, Prague and Budapest, combining grand architecture, cafés, river views and old-world charm.",

    intro:
      "Three beautiful capitals, connected by an easy rhythm of culture, architecture, music and unforgettable evenings.",

    highlights: [
      "Vienna coffee houses",
      "Imperial architecture",
      "Prague old town",
      "Charles Bridge",
      "Budapest Danube",
      "Central European cuisine",
    ],

    itinerary: [
      ["01", "ARRIVE IN VIENNA", "Begin your journey among Vienna's elegant streets."],
      ["02", "VIENNA", "Discover palaces, cafés and classical architecture."],
      ["03", "VIENNA TO PRAGUE", "Travel north towards Prague."],
      ["04", "PRAGUE", "Explore the old town, Charles Bridge and historic streets."],
      ["05", "PRAGUE", "Enjoy a slower day discovering local cafés and hidden corners."],
      ["06", "PRAGUE TO BUDAPEST", "Continue towards the Danube."],
      ["07", "BUDAPEST", "Discover thermal baths, architecture and riverside views."],
      ["08", "DEPARTURE", "Your Central European journey comes to an end."],
    ],
  },
};

const TourDetail = () => {
  const { slug } = useParams();

  const tour = tourDetails[slug];

  if (!tour) {
    return (
      <div className="tour-not-found">
        <span>EUROVIA</span>
        <h1>Journey not found.</h1>
        <Link to="/tours">
          Back to all journeys
          <ArrowRight size={17} />
        </Link>
      </div>
    );
  }

  return (
    <div className="tour-detail-page">

      {/* HERO */}
      <section className="tour-detail-hero">

        <img src={tour.image} alt={tour.title} />

        <div className="tour-detail-overlay" />

        <div className="container">

          <div className="tour-detail-hero-content">

            <div className="tour-detail-kicker">
              <span>{tour.number}</span>
              <i />
              <strong>{tour.category}</strong>
            </div>

            <span className="tour-detail-eyebrow">
              EUROVIA · SIGNATURE JOURNEY
            </span>

            <h1>
              {tour.title}
            </h1>

            <p>
              {tour.description}
            </p>

            <div className="tour-detail-location">
              <MapPin size={17} />
              {tour.location}
            </div>

          </div>

        </div>

        <div className="tour-detail-hero-bottom">
          <span>EUROPE · 2026 COLLECTION</span>
          <span>{tour.number} / 08</span>
        </div>

      </section>


      {/* OVERVIEW */}
      <section className="tour-overview">

        <div className="container">

          <div className="tour-overview-grid">

            <div className="tour-overview-main">

              <span className="tour-section-label">
                THE JOURNEY
              </span>

              <h2>
                Travel slowly.
                <br />
                <em>Remember everything.</em>
              </h2>

              <p className="tour-large-copy">
                {tour.intro}
              </p>

              <p>
                Every Eurovia journey is designed around the idea
                that travelling should feel effortless. We connect
                the essential sights with beautiful stays, thoughtful
                experiences and enough free time to discover each
                destination in your own way.
              </p>

            </div>

            <div className="tour-booking-card">

              <div className="booking-card-top">
                <span>EUROVIA</span>
                <Sparkles size={20} />
              </div>

              <div className="booking-price">
                <small>FROM</small>
                <strong>{tour.price}</strong>
                <span>PER PERSON</span>
              </div>

              <div className="booking-details">

                <div>
                  <Clock3 size={17} />
                  <span>
                    <small>DURATION</small>
                    {tour.duration}
                  </span>
                </div>

                <div>
                  <MapPin size={17} />
                  <span>
                    <small>ROUTE</small>
                    {tour.location}
                  </span>
                </div>

                <div>
                  <CalendarDays size={17} />
                  <span>
                    <small>BEST SEASON</small>
                    APRIL — OCTOBER
                  </span>
                </div>

              </div>

              <Link
                to="/contact"
                className="tour-book-button"
              >
                Plan this journey
                <ArrowUpRight size={18} />
              </Link>

              <small className="booking-note">
                Fully customisable · Private travel support
              </small>

            </div>

          </div>

        </div>

      </section>


      {/* HIGHLIGHTS */}
      <section className="tour-highlights">

        <div className="container">

          <div className="tour-section-heading">

            <div>
              <span>01 · WHY THIS JOURNEY</span>

              <h2>
                The details
                <br />
                <em>you'll remember.</em>
              </h2>
            </div>

            <p>
              Carefully selected moments that make this
              journey feel different from an ordinary tour.
            </p>

          </div>

          <div className="tour-highlights-grid">

            {tour.highlights.map((highlight, index) => (

              <div
                className="tour-highlight-card"
                key={highlight}
              >

                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <Check size={18} />

                <h3>
                  {highlight}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ITINERARY */}
      <section className="tour-itinerary">

        <div className="container">

          <div className="tour-itinerary-header">

            <div>
              <span>02 · DAY BY DAY</span>

              <h2>
                Your journey,
                <br />
                <em>beautifully paced.</em>
              </h2>
            </div>

            <p>
              A sample itinerary designed to give you
              structure without taking away your freedom.
            </p>

          </div>

          <div className="tour-itinerary-list">

            {tour.itinerary.map((day) => (

              <div className="tour-day" key={day[0]}>

                <div className="tour-day-number">
                  {day[0]}
                </div>

                <div className="tour-day-content">

                  <span>{day[1]}</span>

                  <p>{day[2]}</p>

                </div>

                <ArrowRight size={19} />

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* EXPERIENCE CTA */}
      <section className="tour-detail-cta">

        <img
          src={tour.image}
          alt=""
        />

        <div className="tour-detail-cta-overlay" />

        <div className="container">

          <div className="tour-detail-cta-content">

            <span>
              EUROVIA · {tour.number}
            </span>

            <h2>
              Ready to make
              <br />
              this journey <em>yours?</em>
            </h2>

            <p>
              Tell us your dates, travel style and what
              you'd love to experience. We'll shape the
              journey around you.
            </p>

            <Link
              to="/contact"
              className="tour-cta-button"
            >
              Start planning
              <ArrowUpRight size={18} />
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
};

export default TourDetail;