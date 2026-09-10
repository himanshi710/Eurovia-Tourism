import { useState } from "react";
import { Link } from "react-router-dom";

import {
    ArrowRight,
    ArrowUpRight,
    BedDouble,
    CalendarDays,
    Compass,
    Globe2,
    MapPin,
    Sparkles,
    Star,
    Users,
    Waves,
} from "lucide-react";

import "./Destinations.css";


// =========================================================
// DESTINATIONS DATA
// =========================================================

const destinations = [
    {
        number: "01",
        name: "Paris",
        country: "France",
        region: "western",
        description:
            "Elegant boulevards, intimate cafés, timeless art and evenings along the Seine.",
        image:
            "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1400&q=90",
        tag: "ROMANCE",
        price: "$1,290",
        duration: "6 DAYS",
        guests: "2",
        stay: "4",
        type: "CITY ESCAPE",
    },
    {
        number: "02",
        name: "Amalfi Coast",
        country: "Italy",
        region: "southern",
        description:
            "Cliffside villages, blue Mediterranean waters and long Italian lunches.",
        image:
            "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?auto=format&fit=crop&w=1400&q=90",
        tag: "COASTAL",
        price: "$1,690",
        duration: "7 DAYS",
        guests: "2",
        stay: "5",
        type: "COASTAL ESCAPE",
    },
    {
        number: "03",
        name: "Swiss Alps",
        country: "Switzerland",
        region: "central",
        description:
            "Snow-capped peaks, mountain railways and villages surrounded by silence.",
        image:
            "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1400&q=90",
        tag: "ADVENTURE",
        price: "$1,890",
        duration: "8 DAYS",
        guests: "2",
        stay: "6",
        type: "ALPINE ESCAPE",
    },
    {
        number: "04",
        name: "Santorini",
        country: "Greece",
        region: "islands",
        description:
            "Whitewashed villages, volcanic landscapes and sunsets over the Aegean.",
        image:
            "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1400&q=90",
        tag: "ISLAND",
        price: "$1,490",
        duration: "6 DAYS",
        guests: "2",
        stay: "4",
        type: "ISLAND ESCAPE",
    },
    {
        number: "05",
        name: "Lisbon",
        country: "Portugal",
        region: "western",
        description:
            "Golden light, tiled streets, hilltop views and a relaxed Atlantic rhythm.",
        image:
            "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1400&q=90",
        tag: "CITY LIFE",
        price: "$1,190",
        duration: "5 DAYS",
        guests: "2",
        stay: "4",
        type: "CITY ESCAPE",
    },
    {
        number: "06",
        name: "Barcelona",
        country: "Spain",
        region: "western",
        description:
            "Gaudí architecture, Mediterranean beaches and vibrant neighbourhood life.",
        image:
            "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1400&q=90",
        tag: "CULTURE",
        price: "$1,350",
        duration: "6 DAYS",
        guests: "2",
        stay: "4",
        type: "CULTURAL ESCAPE",
    },
    {
        number: "07",
        name: "Prague",
        country: "Czechia",
        region: "central",
        description:
            "Storybook streets, historic squares and atmospheric evenings beside the Vltava.",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdx6qHxy6phR4BRBb0iIjnEHh6ug3C4uTyTSzgqqHW2A&s=10",
        tag: "HISTORY",
        price: "$1,090",
        duration: "5 DAYS",
        guests: "2",
        stay: "3",
        type: "HERITAGE ESCAPE",
    },
    {
        number: "08",
        name: "Vienna",
        country: "Austria",
        region: "central",
        description:
            "Imperial architecture, classical music, coffee houses and refined city life.",
        image:
            "https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&w=1400&q=90",
        tag: "ELEGANCE",
        price: "$1,290",
        duration: "6 DAYS",
        guests: "2",
        stay: "4",
        type: "LUXURY CITY",
    },
];


// =========================================================
// FILTERS
// =========================================================

const filters = [
    {
        label: "ALL EUROPE",
        value: "all",
    },
    {
        label: "WESTERN",
        value: "western",
    },
    {
        label: "CENTRAL",
        value: "central",
    },
    {
        label: "SOUTHERN",
        value: "southern",
    },
    {
        label: "ISLANDS",
        value: "islands",
    },
];


// =========================================================
// MOODS
// =========================================================

const moods = [
    {
        number: "01",
        title: "Romance",
        text:
            "Slow evenings, beautiful hotels, candlelit dinners and cities made for two.",
        image:
            "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1000&q=90",
        icon: Star,
    },
    {
        number: "02",
        title: "Adventure",
        text:
            "Mountain roads, scenic trains, alpine trails and landscapes that feel unreal.",
        image:
            "https://images.unsplash.com/photo-1521292270410-a8c4d716d518?auto=format&fit=crop&w=1000&q=90",
        icon: Compass,
    },
    {
        number: "03",
        title: "Coastal",
        text:
            "Blue water, hidden beaches, island villages and long Mediterranean afternoons.",
        image:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=90",
        icon: Waves,
    },
    {
        number: "04",
        title: "Culture",
        text:
            "Historic streets, galleries, architecture, local food and stories around every corner.",
        image:
            "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1000&q=90",
        icon: Globe2,
    },
];


// =========================================================
// SLUG
// =========================================================

const slugify = (text) =>
    text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");


// =========================================================
// PAGE
// =========================================================

const Destinations = () => {
    const [activeFilter, setActiveFilter] = useState("all");

    const filteredDestinations =
        activeFilter === "all"
            ? destinations
            : destinations.filter(
                (destination) =>
                    destination.region === activeFilter
            );

    return (
        <div className="destinations-page">

            {/* =====================================================
                HERO
            ===================================================== */}

            <section className="destinations-hero">

                <div className="destinations-hero-image">
                    <img
                        src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=2200&q=90"
                        alt="European landscape"
                    />
                </div>

                <div className="destinations-hero-overlay" />

                <div className="destinations-hero-grid" />

                <div className="container destinations-hero-container">

                    <div className="destinations-hero-content">

                        <div className="destinations-hero-topline">
                            <span />
                            <small>
                                EUROVIA · DESTINATIONS
                            </small>
                        </div>

                        <span className="destinations-eyebrow">
                            PLACES WORTH GETTING LOST IN
                        </span>

                        <h1>
                            Find your
                            <br />
                            <em>Europe.</em>
                        </h1>

                        <p>
                            From iconic capitals to quiet coastal
                            villages, discover the places that give
                            Europe its unforgettable character.
                        </p>

                        <div className="destinations-hero-actions">

                            <a
                                href="#destination-collection"
                                className="destinations-hero-btn"
                            >
                                Explore destinations
                                <ArrowUpRight size={18} />
                            </a>

                            <span className="destinations-hero-note">
                                <Sparkles size={15} />
                                28 COUNTRIES TO DISCOVER
                            </span>

                        </div>

                    </div>


                    <div className="destinations-hero-side">

                        <span>SCROLL</span>

                        <div className="hero-side-line" />

                        <span>01 — 08</span>

                    </div>

                </div>


                <div className="destinations-hero-bottom">

                    <div className="container">

                        <div>
                            <span>EUROVIA</span>
                            <strong>DESTINATIONS</strong>
                        </div>

                        <div>
                            <span>DISCOVER</span>
                            <strong>EUROPE</strong>
                        </div>

                        <div>
                            <span>CURATED</span>
                            <strong>JOURNEYS</strong>
                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                INTRO
            ===================================================== */}

            <section className="destinations-intro">

                <div className="container">

                    <div className="destinations-intro-grid">

                        <div className="destinations-intro-index">

                            <span>01</span>

                            <div className="intro-index-icon">
                                <Compass size={23} />
                            </div>

                            <small>
                                THE
                                <br />
                                EUROVIA
                                <br />
                                MAP
                            </small>

                        </div>


                        <div className="destinations-intro-main">

                            <span className="destination-label">
                                THE EUROVIA MAP
                            </span>

                            <h2>
                                Europe is not
                                <br />
                                one destination.
                                <br />
                                <em>It's a thousand stories.</em>
                            </h2>

                            <p>
                                Every country has its own rhythm,
                                flavour, landscape and way of life.
                                We help you find the corners that
                                feel right for the way you want
                                to travel.
                            </p>

                        </div>


                        <div className="destinations-intro-note">

                            <div className="intro-note-icon">
                                <Globe2 size={20} />
                            </div>

                            <span>OUR APPROACH</span>

                            <strong>
                                LESS
                                <br />
                                CHECKLIST.
                                <br />
                                MORE
                                <br />
                                CONNECTION.
                            </strong>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                DESTINATION COLLECTION
            ===================================================== */}

            <section
                className="destination-collection"
                id="destination-collection"
            >

                <div className="container">

                    <div className="destination-collection-heading">

                        <div>

                            <span className="destination-label">
                                02 · THE COLLECTION
                            </span>

                            <h2>
                                Where will
                                <br />
                                you <em>go?</em>
                            </h2>

                        </div>


                        <div className="collection-heading-right">

                            <p>
                                Handpicked European destinations
                                designed around the way you want
                                to travel.
                            </p>

                            <div className="collection-count">

                                <strong>
                                    {String(
                                        filteredDestinations.length
                                    ).padStart(2, "0")}
                                </strong>

                                <span>
                                    DESTINATIONS
                                    <br />
                                    AVAILABLE
                                </span>

                            </div>

                        </div>

                    </div>


                    {/* =================================================
                        FILTERS
                    ================================================= */}

                    <div className="destination-filters">

                        <span className="filter-title">
                            FILTER BY
                        </span>

                        <div className="filter-buttons">

                            {filters.map((filter) => (

                                <button
                                    type="button"
                                    key={filter.value}
                                    className={
                                        activeFilter === filter.value
                                            ? "active"
                                            : ""
                                    }
                                    onClick={() =>
                                        setActiveFilter(
                                            filter.value
                                        )
                                    }
                                >
                                    {filter.label}
                                </button>

                            ))}

                        </div>

                    </div>


                    {/* =================================================
                        LUXURY PACKAGE CARDS
                    ================================================= */}

                    <div className="destinations-grid">

                        {filteredDestinations.map(
                            (destination) => (

                                <Link
                                    to={`/destinations/${slugify(
                                        destination.name
                                    )}`}
                                    className="eurovia-destination-card"
                                    key={destination.number}
                                >

                                    {/* IMAGE */}

                                    <div className="eurovia-card-image">

                                        <img
                                            src={destination.image}
                                            alt={destination.name}
                                        />

                                        <div className="eurovia-card-image-overlay" />


                                        {/* NUMBER */}

                                        <span className="eurovia-card-number">
                                            {destination.number}
                                        </span>


                                        {/* TAG */}

                                        <span className="eurovia-card-tag">
                                            {destination.tag}
                                        </span>


                                        {/* PRICE RIBBON */}

                                        <div className="eurovia-card-price">

                                            <small>
                                                FROM
                                            </small>

                                            <strong>
                                                {destination.price}
                                            </strong>

                                            <span>
                                                / PERSON
                                            </span>

                                        </div>

                                    </div>


                                    {/* WHITE CONTENT */}

                                    <div className="eurovia-card-content">

                                        <div className="eurovia-card-top">

                                            <span className="eurovia-card-duration">
                                                {destination.duration} TOUR
                                            </span>

                                            <span className="eurovia-card-arrow">
                                                <ArrowUpRight
                                                    size={18}
                                                />
                                            </span>

                                        </div>


                                        <h3>
                                            {destination.name}
                                        </h3>


                                        <div className="eurovia-card-location">

                                            <MapPin size={16} />

                                            <span>
                                                {destination.name},{" "}
                                                {destination.country}
                                            </span>

                                        </div>


                                        <p>
                                            {destination.description}
                                        </p>


                                        {/* FEATURES */}

                                        <div className="eurovia-card-features">

                                            <div className="eurovia-feature">

                                                <BedDouble size={19} />

                                                <span>
                                                    <strong>
                                                        {destination.stay}
                                                    </strong>

                                                    <small>
                                                        NIGHTS
                                                    </small>
                                                </span>

                                            </div>


                                            <div className="eurovia-feature">

                                                <Users size={19} />

                                                <span>
                                                    <strong>
                                                        {destination.guests}
                                                    </strong>

                                                    <small>
                                                        GUESTS
                                                    </small>
                                                </span>

                                            </div>


                                            <div className="eurovia-feature">

                                                <Waves size={19} />

                                                <span>
                                                    <strong>
                                                        {destination.type}
                                                    </strong>

                                                    <small>
                                                        EXPERIENCE
                                                    </small>
                                                </span>

                                            </div>

                                        </div>


                                        {/* CARD FOOTER */}

                                        <div className="eurovia-card-bottom">

                                            <span>
                                                <Sparkles size={14} />
                                                EUROVIA CURATED
                                            </span>

                                            <strong>
                                                EXPLORE
                                                <ArrowRight size={15} />
                                            </strong>

                                        </div>

                                    </div>

                                </Link>

                            )
                        )}

                    </div>

                </div>

            </section>


            {/* =====================================================
                FEATURED DESTINATION
            ===================================================== */}

            <section className="destination-feature">

                <div className="destination-feature-image">

                    <img
                        src="https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=2200&q=90"
                        alt="Swiss Alps"
                    />

                </div>

                <div className="destination-feature-overlay" />


                <div className="destination-feature-number">
                    03
                </div>


                <div className="container">

                    <div className="destination-feature-content">

                        <span className="feature-kicker">
                            EUROVIA · FEATURED DESTINATION
                        </span>

                        <div className="feature-star">
                            <Star size={17} />
                        </div>

                        <h2>
                            The Swiss
                            <br />
                            <em>Alps.</em>
                        </h2>

                        <p>
                            Wake up surrounded by mountains,
                            travel through spectacular valleys
                            and slow down in villages where time
                            feels beautifully irrelevant.
                        </p>


                        <div className="destination-feature-meta">

                            <div>
                                <small>REGION</small>
                                <strong>SWITZERLAND</strong>
                            </div>

                            <div>
                                <small>BEST FOR</small>
                                <strong>
                                    NATURE · TRAINS · ESCAPES
                                </strong>
                            </div>

                            <div>
                                <small>IDEAL STAY</small>
                                <strong>
                                    5 — 8 DAYS
                                </strong>
                            </div>

                        </div>


                        <Link
                            to="/destinations/swiss-alps"
                            className="destination-feature-btn"
                        >
                            Explore Switzerland
                            <ArrowUpRight size={18} />
                        </Link>

                    </div>

                </div>

            </section>


            {/* =====================================================
                TRAVEL BY MOOD
            ===================================================== */}

            <section className="destination-moods">

                <div className="container">

                    <div className="destination-moods-heading">

                        <div>

                            <span className="destination-label">
                                04 · CHOOSE BY MOOD
                            </span>

                            <h2>
                                Travel for the
                                <br />
                                <em>feeling.</em>
                            </h2>

                        </div>

                        <p>
                            Sometimes you don't know where
                            you want to go. You only know how
                            you want the journey to feel.
                        </p>

                    </div>


                    <div className="destination-moods-grid">

                        {moods.map((mood) => {

                            const Icon = mood.icon;

                            return (

                                <article
                                    className="destination-mood-card"
                                    key={mood.number}
                                >

                                    <div className="mood-image">

                                        <img
                                            src={mood.image}
                                            alt={mood.title}
                                        />

                                        <div className="mood-overlay" />

                                        <span className="mood-number">
                                            {mood.number}
                                        </span>

                                        <div className="mood-icon">
                                            <Icon size={21} />
                                        </div>

                                    </div>


                                    <div className="mood-content">

                                        <span>
                                            TRAVEL MOOD
                                        </span>

                                        <h3>
                                            {mood.title}
                                        </h3>

                                        <p>
                                            {mood.text}
                                        </p>

                                        <Link to="/tours">
                                            DISCOVER JOURNEYS
                                            <ArrowRight size={15} />
                                        </Link>

                                    </div>

                                </article>

                            );

                        })}

                    </div>

                </div>

            </section>


            {/* =====================================================
                EUROPE HIGHLIGHTS
            ===================================================== */}

            <section className="europe-highlights">

                <div className="container">

                    <div className="highlights-header">

                        <div className="highlights-label">

                            <span>05</span>

                            <div />

                            <strong>
                                WHY EUROPE
                            </strong>

                        </div>

                        <p>
                            A continent where every border
                            changes the landscape, language
                            and story.
                        </p>

                    </div>


                    <div className="highlights-grid">


                        <div className="highlight-intro">

                            <span className="destination-label">
                                THE EUROVIA DIFFERENCE
                            </span>

                            <h2>
                                One continent.
                                <br />
                                <em>Infinite ways</em>
                                <br />
                                to explore.
                            </h2>

                            <div className="highlight-line">
                                <span />
                                <small>
                                    DISCOVER MORE · TRAVEL DEEPER
                                </small>
                            </div>

                        </div>


                        <div className="highlight-item">

                            <div className="highlight-number">
                                01
                            </div>

                            <strong>
                                28
                            </strong>

                            <div className="highlight-item-content">

                                <span>
                                    COUNTRIES
                                </span>

                                <p>
                                    From Atlantic coastlines
                                    and Mediterranean islands
                                    to alpine peaks and
                                    historic capitals.
                                </p>

                            </div>

                        </div>


                        <div className="highlight-item">

                            <div className="highlight-number">
                                02
                            </div>

                            <strong>
                                ∞
                            </strong>

                            <div className="highlight-item-content">

                                <span>
                                    STORIES
                                </span>

                                <p>
                                    Every street, café, village
                                    and coastline carries a story
                                    waiting to become yours.
                                </p>

                            </div>

                        </div>


                        <div className="highlight-item">

                            <div className="highlight-number">
                                03
                            </div>

                            <strong>
                                01
                            </strong>

                            <div className="highlight-item-content">

                                <span>
                                    YOUR JOURNEY
                                </span>

                                <p>
                                    Designed around your pace,
                                    interests, mood and the
                                    moments you want to remember.
                                </p>

                            </div>

                        </div>

                    </div>


                    <div className="highlights-marquee">

                        <div>
                            PARIS
                            <span>✦</span>
                            ROME
                            <span>✦</span>
                            AMALFI
                            <span>✦</span>
                            ZURICH
                            <span>✦</span>
                            SANTORINI
                            <span>✦</span>
                            LISBON
                            <span>✦</span>
                            VIENNA
                            <span>✦</span>
                            BARCELONA
                            <span>✦</span>
                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                FINAL CTA
            ===================================================== */}

          
        </div>
    );
};

export default Destinations;