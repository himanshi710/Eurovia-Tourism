import { Link } from "react-router-dom";

import {
  ArrowRight,
  ArrowUpRight,
  BedDouble,
  Camera,
  Coffee,
  Heart,
  MapPin,
  Mountain,
  Music,
  Sparkles,
  Users,
  Utensils,
  Waves,
} from "lucide-react";

import "./Experiences.css";


/* =========================================================
   EXPERIENCE DATA
========================================================= */

const experiences = [
  {
    number: "01",
    category: "FOOD & WINE",
    title: "Taste Europe",
    description:
      "From hidden trattorias in Rome to slow lunches beside the Mediterranean, discover Europe through its most memorable flavours.",
    location: "ITALY · FRANCE · SPAIN",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=90",
    duration: "8 DAYS TOUR",
  
    icon: Utensils,
  },

  {
    number: "02",
    category: "MOUNTAINS",
    title: "Into the Alps",
    description:
      "Trade busy cities for quiet mountain villages, panoramic rail journeys and unforgettable Alpine landscapes.",
    location: "SWITZERLAND · AUSTRIA",
    image:
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1400&q=90",
    duration: "10 DAYS TOUR",
    
    icon: Mountain,
  },

  {
    number: "03",
    category: "COASTAL LIFE",
    title: "Mediterranean Days",
    description:
      "Sun-drenched coastlines, turquoise water and long evenings define the slower side of European travel.",
    location: "GREECE · ITALY · PORTUGAL",
    image:
      "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?auto=format&fit=crop&w=1400&q=90",
    duration: "7 DAYS TOUR",
    
    icon: Waves,
  },

  {
    number: "04",
    category: "LOCAL CULTURE",
    title: "Live Like a Local",
    description:
      "Walk beyond the guidebooks and experience neighbourhoods, traditions, markets and everyday European life.",
    location: "EUROPE",
    image:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1400&q=90",
    duration: "6 DAYS TOUR",
   
    icon: Heart,
  },

  {
    number: "05",
    category: "SLOW TRAVEL",
    title: "European Mornings",
    description:
      "Coffee in a quiet square, a morning train through the countryside and nowhere you absolutely need to be.",
    location: "FRANCE · ITALY · SPAIN",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1400&q=90",
    duration: "5 DAYS TOUR",
    
    icon: Coffee,
  },

  {
    number: "06",
    category: "NIGHTLIFE",
    title: "After Dark",
    description:
      "Experience Europe's cities after sunset — rooftop dinners, intimate jazz bars and streets that come alive at night.",
    location: "PARIS · BARCELONA · LISBON",
    image:
      "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=1400&q=90",
    duration: "9 DAYS TOUR",
  
    icon: Music,
  },
];


/* =========================================================
   STATS
========================================================= */

const experienceStats = [
  {
    number: "06",
    label: "SIGNATURE",
    text: "EXPERIENCES",
  },
  {
    number: "28",
    label: "EUROPEAN",
    text: "COUNTRIES",
  },
  {
    number: "∞",
    label: "WAYS",
    text: "TO EXPERIENCE",
  },
];


/* =========================================================
   EXPERIENCES PAGE
========================================================= */

const Experiences = () => {
  return (
    <div className="experiences-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="experiences-hero">

        <div className="experiences-hero-image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu09-49an9w-9bAjn8Mk7jgaR1CbyTPPirwqvtY8G1mw&s=10"
            alt="European travel experience"
          />
        </div>

        <div className="experiences-hero-overlay" />

        <div className="experiences-hero-pattern" />


        <div className="container">

          <div className="experiences-hero-content">

            <div className="experiences-kicker">
              <span />
              EUROVIA · BEYOND THE DESTINATION
            </div>


            <h1>
              Don't just
              <br />
              <em>visit Europe.</em>
              <br />
              <strong>Feel it.</strong>
            </h1>


            <p>
              Food. Culture. Landscapes. Music. Slow mornings.
              Discover the experiences that turn a European
              holiday into a story worth remembering.
            </p>


            <div className="experiences-hero-actions">

              <a
                href="#experience-collection"
                className="experiences-main-btn"
              >
                <span>Explore experiences</span>
                <ArrowUpRight size={18} />
              </a>


              <Link
                to="/contact"
                className="experiences-secondary-btn"
              >
                Create something personal
                <ArrowRight size={17} />
              </Link>

            </div>

          </div>


          {/* HERO STATS */}

          <div className="experiences-hero-stats">

            {experienceStats.map((stat) => (
              <div
                className="experience-hero-stat"
                key={stat.label}
              >

                <strong>
                  {stat.number}
                </strong>

                <div>
                  <span>
                    {stat.label}
                  </span>

                  <small>
                    {stat.text}
                  </small>
                </div>

              </div>
            ))}

          </div>

        </div>


        {/* SIDE TEXT */}

        <div className="experiences-hero-side">

          <span>
            EUROVIA
          </span>

          <div />

          <span>
            EXPERIENCES · 2026
          </span>

        </div>


        {/* CORNER */}

        <div className="experiences-hero-corner">

          <span>
            01
          </span>

          <small>
            EXPERIENCE
            <br />
            THE DIFFERENCE
          </small>

        </div>

      </section>



      {/* =====================================================
          PHILOSOPHY
      ===================================================== */}

      <section className="experience-intro">

        <div className="container">

          <div className="experience-intro-top">

            <div className="intro-index">

              <span>
                01
              </span>

              <div />

              <small>
                THE EUROVIA PHILOSOPHY
              </small>

            </div>


            <span className="intro-top-note">
              TRAVEL · FEEL · REMEMBER
            </span>

          </div>


          <div className="experience-intro-grid">

            <div className="experience-intro-title">

              <span className="intro-mini-label">
                BEYOND THE ITINERARY
              </span>

              <h2>
                The places
                <br />
                are only
                <br />
                <em>the beginning.</em>
              </h2>

            </div>


            <div className="experience-intro-copy">

              <p className="intro-lead">
                The best memories rarely happen when you're
                rushing between landmarks.
              </p>

              <p>
                They happen around a table with people you
                just met. On a quiet train through the Alps.
                In a tiny neighbourhood café. At sunset,
                when the day's plans disappear and you simply
                stay a little longer.
              </p>

              <p>
                That's why Eurovia designs journeys around
                experiences — not just destinations.
              </p>


              <Link
                to="/about"
                className="intro-discover"
              >
                Discover our philosophy
                <ArrowUpRight size={17} />
              </Link>

            </div>


            <div className="experience-intro-mark">

              <div className="intro-mark-circle">

                <Sparkles size={19} />

              </div>


              <strong>
                TRAVEL
                <br />
                DEEPER
              </strong>


              <span>
                Curated moments.
                <br />
                Real connections.
              </span>

            </div>

          </div>

        </div>

      </section>



      {/* =====================================================
          EXPERIENCE COLLECTION
      ===================================================== */}

      <section
        className="experience-collection"
        id="experience-collection"
      >

        <div className="container">


          {/* COLLECTION HEADER */}

          <div className="experience-collection-header">

            <div>

              <div className="experience-section-number">

                <span>
                  02
                </span>

                <div />

                <strong>
                  THE COLLECTION
                </strong>

              </div>


              <h2>
                Moments worth
                <br />
                <em>travelling for.</em>
              </h2>

            </div>


            <div className="collection-description">

              <span>
                CURATED ACROSS EUROPE
              </span>

              <p>
                Choose a feeling, a flavour or a way of
                travelling. We'll help you discover the
                experiences that bring Europe to life.
              </p>

            </div>

          </div>



          {/* =================================================
              PACKAGE CARDS
          ================================================= */}

          <div className="experience-grid">

            {experiences.map((experience) => {

              const Icon = experience.icon;

              return (

                <article
                  className="experience-card"
                  key={experience.number}
                >


                  {/* ===============================
                      IMAGE
                  =============================== */}

                  <div className="experience-card-image">

                    <img
                      src={experience.image}
                      alt={experience.title}
                    />


                    {/* PRICE */}

                    <div className="experience-price">
                      $550/person
                    </div>


                    {/* IMAGE OVERLAY */}

                    <div className="experience-card-overlay" />


                    {/* NUMBER */}

                    <div className="experience-card-number">
                      {experience.number}
                    </div>


                    {/* ICON */}

                    <div className="experience-card-image-icon">
                      <Icon size={18} />
                    </div>


                    {/* ARROW */}

                    <Link
                      to="/contact"
                      className="experience-card-arrow"
                      aria-label={`Explore ${experience.title}`}
                    >
                      <ArrowUpRight size={19} />
                    </Link>

                  </div>



                  {/* ===============================
                      WHITE INFORMATION BOX
                  =============================== */}

                  <div className="experience-card-content">


                    {/* DURATION */}

                    <span className="experience-card-duration">
                      {experience.duration}
                    </span>


                    {/* TITLE */}

                    <h3>
                      {experience.title}
                    </h3>


                    {/* LOCATION */}

                    <div className="experience-card-place">

                      <MapPin size={16} />

                      <span>
                        {experience.location}
                      </span>

                    </div>


                    {/* DETAILS */}

                    <div className="experience-card-details">


                      {/* BED */}

                      <div className="experience-detail">

                        <BedDouble size={19} />

                        <span>
                          2
                        </span>

                      </div>


                      {/* PEOPLE */}

                      <div className="experience-detail">

                        <Users size={19} />

                        <span>
                          3
                        </span>

                      </div>


                      {/* LOCATION TYPE */}

                      <div className="experience-detail">

                        <Waves size={20} />

                        <span>
                          {experience.nearby}
                        </span>

                      </div>

                    </div>

                  </div>

                </article>

              );

            })}

          </div>

        </div>

      </section>



      {/* =====================================================
          SIGNATURE EXPERIENCE
      ===================================================== */}

      <section className="experience-feature">

        <div className="experience-feature-image">

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVv2z2zwHgEKuTBGX7MpxnlLPs24RsH9ZnKlMceRxH2A&s=10"
            alt="Slow European travel"
          />

        </div>


        <div className="experience-feature-overlay" />

        <div className="experience-feature-frame" />


        <div className="container">

          <div className="experience-feature-content">

            <div className="feature-number">

              <span>
                03
              </span>

              <div />

              <small>
                EUROVIA SIGNATURE
              </small>

            </div>


            <span className="feature-kicker">
              A DIFFERENT KIND OF DAY
            </span>


            <h2>
              A day with
              <br />
              <em>no itinerary.</em>
            </h2>


            <p>
              Wake up somewhere beautiful. Find a small
              café. Take a train to a village you've never
              heard of. Stop when you want. Stay longer
              when you love it.
            </p>


            {/* FEATURE POINTS */}

            <div className="feature-points">

              <div>

                <span>
                  01
                </span>

                <strong>
                  Slow mornings
                </strong>

                <small>
                  START WITHOUT A PLAN
                </small>

              </div>


              <div>

                <span>
                  02
                </span>

                <strong>
                  Local discoveries
                </strong>

                <small>
                  FOLLOW YOUR CURIOSITY
                </small>

              </div>


              <div>

                <span>
                  03
                </span>

                <strong>
                  Unplanned moments
                </strong>

                <small>
                  MAKE ROOM FOR MAGIC
                </small>

              </div>

            </div>


            <Link
              to="/contact"
              className="feature-btn"
            >

              <span>
                Create my experience
              </span>

              <ArrowUpRight size={18} />

            </Link>

          </div>

        </div>


        {/* FEATURE SIDE */}

        <div className="feature-side-mark">

          <span>
            EUROPE
          </span>

          <div />

          <strong>
            03
          </strong>

        </div>

      </section>



      {/* =====================================================
          EXPERIENCE TYPES
      ===================================================== */}

      <section className="experience-types">

        <div className="container">


          {/* HEADER */}

          <div className="types-header">

            <div>

              <div className="experience-section-number">

                <span>
                  04
                </span>

                <div />

                <strong>
                  FIND YOUR STYLE
                </strong>

              </div>


              <h2>
                Your Europe.
                <br />
                <em>Your way.</em>
              </h2>

            </div>


            <p>
              There is no single right way to travel.
              Choose the feeling that sounds most like you.
            </p>

          </div>



          {/* TYPES */}

          <div className="experience-types-grid">


            {/* TYPE 01 */}

            <div className="experience-type">

              <div className="type-header">

                <span>
                  01
                </span>

                <Camera size={21} />

              </div>


              <div className="type-icon">

                <Camera size={28} />

              </div>


              <h3>
                For the curious
              </h3>


              <p>
                Hidden streets, local stories, independent
                galleries and places that don't always make
                the guidebook.
              </p>


              <div className="type-footer">

                <span>
                  DISCOVER
                </span>

                <ArrowUpRight size={18} />

              </div>

            </div>



            {/* TYPE 02 */}

            <div className="experience-type">

              <div className="type-header">

                <span>
                  02
                </span>

                <Utensils size={21} />

              </div>


              <div className="type-icon">

                <Utensils size={28} />

              </div>


              <h3>
                For the food lover
              </h3>


              <p>
                Markets, family kitchens, wine regions and
                tables worth crossing Europe for.
              </p>


              <div className="type-footer">

                <span>
                  TASTE
                </span>

                <ArrowUpRight size={18} />

              </div>

            </div>



            {/* TYPE 03 */}

            <div className="experience-type">

              <div className="type-header">

                <span>
                  03
                </span>

                <Mountain size={21} />

              </div>


              <div className="type-icon">

                <Mountain size={28} />

              </div>


              <h3>
                For the adventurer
              </h3>


              <p>
                Alpine trails, coastal roads, mountain
                villages and landscapes that make you
                want to keep going.
              </p>


              <div className="type-footer">

                <span>
                  EXPLORE
                </span>

                <ArrowUpRight size={18} />

              </div>

            </div>



            {/* TYPE 04 */}

            <div className="experience-type">

              <div className="type-header">

                <span>
                  04
                </span>

                <Heart size={21} />

              </div>


              <div className="type-icon">

                <Heart size={28} />

              </div>


              <h3>
                For the slow traveller
              </h3>


              <p>
                Fewer plans, longer stays and more time
                to actually experience where you are.
              </p>


              <div className="type-footer">

                <span>
                  UNWIND
                </span>

                <ArrowUpRight size={18} />

              </div>

            </div>

          </div>

        </div>

      </section>



      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="experience-cta">

        <div className="experience-cta-pattern" />


        <div className="container">

          <div className="experience-cta-inner">


            {/* CTA NUMBER */}

            <div className="cta-index">

              <span>
                05
              </span>

              <small>
                YOUR NEXT
                <br />
                EXPERIENCE
              </small>

            </div>


            {/* CTA CONTENT */}

            <div className="experience-cta-content">

              <span>
                READY TO GO BEYOND THE ORDINARY?
              </span>


              <h2>
                Tell us what
                <br />
                you want to
                <br />
                <strong>feel.</strong>
              </h2>


              <p>
                Tell us what makes you excited about travel.
                We'll turn that feeling into a European
                experience designed around you.
              </p>


              <Link to="/contact">

                <span>
                  Plan my experience
                </span>

                <ArrowRight size={19} />

              </Link>

            </div>


            {/* CTA CIRCLE */}

            <div className="experience-cta-circle">

              <div className="cta-circle-inner">

                <Sparkles size={17} />

                <span>
                  EUROVIA
                </span>

                <strong>
                  FEEL
                  <br />
                  MORE
                </strong>

                <small>
                  TRAVEL DEEPER
                </small>

              </div>

            </div>

          </div>

        </div>


        {/* CTA BOTTOM */}

        <div className="experience-cta-bottom">

          <span>
            EUROPE · TRAVEL · STORIES
          </span>

          <span>
            EST. 2026
          </span>

        </div>

      </section>

    </div>
  );
};


export default Experiences;