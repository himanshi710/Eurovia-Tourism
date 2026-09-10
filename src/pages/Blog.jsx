
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  CalendarDays,
  Clock3,
  MapPin,
  Search,
  Sparkles,
} from "lucide-react";

import SectionTitle from "../components/SectionTitle";

import "./Blog.css";

const featuredPost = {
  date: "12 SEP 2026",
  category: "FRANCE",
  readTime: "6 MIN READ",
  title: "A slower way to discover Paris",
  excerpt:
    "Forget the checklist. Discover Paris through quiet neighbourhoods, hidden courtyards, long lunches and evenings beside the Seine.",
  image:
    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1800&q=90",
};

const posts = [
  {
    number: "01",
    date: "08 SEP 2026",
    category: "ITALY",
    readTime: "5 MIN READ",
    title: "The art of an Italian summer",
    excerpt:
      "From Amalfi's cliffside villages to slow afternoons overlooking the Mediterranean.",
    image:
      "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?auto=format&fit=crop&w=1200&q=90",
  },
  {
    number: "02",
    date: "02 SEP 2026",
    category: "SWITZERLAND",
    readTime: "7 MIN READ",
    title: "Why Switzerland belongs on your list",
    excerpt:
      "A journey through alpine railways, quiet lakes and some of Europe's most beautiful landscapes.",
    image:
      "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=90",
  },
  {
    number: "03",
    date: "28 AUG 2026",
    category: "GREECE",
    readTime: "4 MIN READ",
    title: "Beyond the blue domes of Santorini",
    excerpt:
      "There is another side of Santorini waiting beyond its famous views and postcard streets.",
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=90",
  },
  {
    number: "04",
    date: "21 AUG 2026",
    category: "SPAIN",
    readTime: "6 MIN READ",
    title: "Barcelona after golden hour",
    excerpt:
      "Explore the city when the streets become quieter and Barcelona starts to feel entirely different.",
    image:
      "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1200&q=90",
  },
  {
    number: "05",
    date: "15 AUG 2026",
    category: "PORTUGAL",
    readTime: "5 MIN READ",
    title: "A weekend in Lisbon",
    excerpt:
      "Tram rides, tiled streets, ocean air and the perfect Portuguese afternoon.",
    image:
      "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1200&q=90",
  },
  {
    number: "06",
    date: "09 AUG 2026",
    category: "AUSTRIA",
    readTime: "5 MIN READ",
    title: "Vienna for the curious traveller",
    excerpt:
      "Coffee houses, classical architecture and a city that rewards those who slow down.",
    image:
      "https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&w=1200&q=90",
  },
];

const categories = [
  "All Stories",
  "Europe",
  "Italy",
  "France",
  "Switzerland",
  "Greece",
  "Spain",
  "Portugal",
  "Austria",
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All Stories");
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredPosts = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();

    return posts.filter((post) => {
      const categoryMatch =
        activeCategory === "All Stories" ||
        activeCategory === "Europe" ||
        post.category === activeCategory.toUpperCase();

      const searchMatch =
        !search ||
        post.title.toLowerCase().includes(search) ||
        post.excerpt.toLowerCase().includes(search) ||
        post.category.toLowerCase().includes(search);

      return categoryMatch && searchMatch;
    });
  }, [activeCategory, searchTerm]);

  const visiblePosts = filteredPosts.slice(0, visibleCount);

  const handleCategory = (category) => {
    setActiveCategory(category);
    setVisibleCount(6);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setVisibleCount(6);
  };

  const handleLoadMore = () => {
    setVisibleCount((current) => current + 3);
  };

  return (
    <div className="blog-page">

      {/* =========================================
          HERO
      ========================================= */}

      <section className="blog-hero">

        <div className="blog-hero-image">
          <img
            src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=2200&q=90"
            alt="European travel"
          />
        </div>

        <div className="blog-hero-overlay" />

        <div className="blog-hero-grid-lines" />

        <div className="container">

          <div className="blog-hero-inner">

            <div className="blog-hero-content">

              <span className="blog-eyebrow">
                <span />
                THE EUROVIA JOURNAL
              </span>

              <h1>
                Stories
                <br />
                from <em>Europe.</em>
              </h1>

              <p>
                Travel notes, hidden places, local flavours
                and stories from across the continent.
              </p>

              <div className="blog-hero-meta">
                <span>ISSUE 06</span>
                <i />
                <span>SEPTEMBER 2026</span>
              </div>

            </div>

            <div className="blog-hero-side">

              <div className="blog-vertical-text">
                EUROPE · TRAVEL · STORIES
              </div>

              <div className="blog-hero-index">
                <small>JOURNAL</small>
                <strong>06</strong>
              </div>

              <div className="blog-scroll">
                <span>SCROLL</span>
                <div />
              </div>

            </div>

          </div>

        </div>

        <div className="blog-hero-bottom">
          <span>CURATED BY EUROVIA</span>
          <span>PARIS · AMALFI · ZURICH · SANTORINI</span>
        </div>

      </section>


      {/* =========================================
          FEATURED STORY
      ========================================= */}

      <section className="featured-blog-section">

        <div className="container">

          <div className="featured-topline">
            <span>01</span>
            <span>EDITOR'S CHOICE</span>
            <span>THE STORY WE'RE READING</span>
          </div>

          <div className="featured-blog">

            <div className="featured-blog-image">

              <img
                src={featuredPost.image}
                alt={featuredPost.title}
              />

              <div className="featured-image-overlay" />

              <div className="featured-stamp">
                <span>EUROVIA</span>
                <strong>FEATURED</strong>
                <small>STORY</small>
              </div>

              <span className="featured-image-location">
                PARIS · FRANCE
              </span>

            </div>

            <div className="featured-blog-content">

              <div className="featured-number">
                01
              </div>

              <span className="featured-label">
                EDITOR'S PICK
              </span>

              <h2>
                {featuredPost.title}
              </h2>

              <p>
                {featuredPost.excerpt}
              </p>

              <div className="featured-meta">

                <span>
                  <CalendarDays size={14} />
                  {featuredPost.date}
                </span>

                <span>
                  <MapPin size={14} />
                  {featuredPost.category}
                </span>

                <span>
                  <Clock3 size={14} />
                  {featuredPost.readTime}
                </span>

              </div>

              <Link
                to="/blog"
                className="blog-read-btn"
              >
                <span>Read the story</span>
                <ArrowUpRight size={18} />
              </Link>

              <div className="featured-caption">
                <span>PARIS, FRANCE</span>
                <span>48°51′N · 2°21′E</span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          STORIES
      ========================================= */}

      <section className="blog-stories-section">

        <div className="container">

          <div className="blog-section-header">

            <div className="blog-heading-wrap">

              <span className="blog-mini-label">
                <b>02</b>
                LATEST FROM THE JOURNAL
              </span>

              <SectionTitle
                label="TRAVEL NOTES"
                title="Stories worth"
                highlight="travelling for."
                description="A collection of places, people and moments that make Europe feel unforgettable."
              />

            </div>

            <div className="blog-search">

              <Search size={17} />

              <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search stories..."
                aria-label="Search stories"
              />

              {searchTerm && (
                <button
                  type="button"
                  className="search-clear"
                  onClick={() => setSearchTerm("")}
                >
                  ×
                </button>
              )}

            </div>

          </div>


          {/* =====================================
              FILTERS
          ===================================== */}

          <div className="blog-filter-area">

            <div className="filter-caption">
              <span>FILTER BY</span>
              <i />
            </div>

            <div className="blog-categories">

              {categories.map((category) => (
                <button
                  type="button"
                  key={category}
                  className={
                    activeCategory === category
                      ? "active"
                      : ""
                  }
                  onClick={() => handleCategory(category)}
                >
                  {category}
                </button>
              ))}

            </div>

          </div>


          {/* =====================================
              RESULT INFO
          ===================================== */}

          <div className="blog-result-line">

            <span>
              SHOWING <strong>{visiblePosts.length}</strong> STORIES
            </span>

            {searchTerm && (
              <span>
                SEARCH: <strong>"{searchTerm}"</strong>
              </span>
            )}

            {activeCategory !== "All Stories" && (
              <span>
                CATEGORY: <strong>{activeCategory}</strong>
              </span>
            )}

          </div>


          {/* =====================================
              BLOG GRID
          ===================================== */}

          {visiblePosts.length > 0 ? (
            <div className="blog-posts-grid">

              {visiblePosts.map((post, index) => (
                <article
                  className={`journal-card ${
                    index === 0 ? "journal-card-featured" : ""
                  }`}
                  key={post.number}
                >

                  <div className="journal-image">

                    <img
                      src={post.image}
                      alt={post.title}
                    />

                    <div className="journal-image-overlay" />

                    <span className="journal-number">
                      {post.number}
                    </span>

                    <span className="journal-category">
                      {post.category}
                    </span>

                    <Link
                      to="/blog"
                      className="journal-arrow"
                      aria-label={`Read ${post.title}`}
                    >
                      <ArrowUpRight size={19} />
                    </Link>

                    <span className="journal-read-time">
                      {post.readTime}
                    </span>

                  </div>

                  <div className="journal-content">

                    <div className="journal-meta">
                      <span>{post.date}</span>
                      <span>EUROVIA JOURNAL</span>
                    </div>

                    <h3>
                      {post.title}
                    </h3>

                    <p>
                      {post.excerpt}
                    </p>

                    <Link
                      to="/blog"
                      className="journal-read"
                    >
                      Continue reading
                      <ArrowRight size={15} />
                    </Link>

                  </div>

                </article>
              ))}

            </div>
          ) : (
            <div className="blog-empty">

              <div className="blog-empty-icon">
                <Search size={25} />
              </div>

              <span>NO STORIES FOUND</span>

              <h3>
                Nothing matched your search.
              </h3>

              <p>
                Try another destination or choose All Stories.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearchTerm("");
                  setActiveCategory("All Stories");
                }}
              >
                Reset journal
                <ArrowUpRight size={16} />
              </button>

            </div>
          )}


          {/* =====================================
              LOAD MORE
          ===================================== */}

          {visibleCount < filteredPosts.length && (
            <div className="blog-load-more">

              <button
                type="button"
                onClick={handleLoadMore}
              >
                <span>Load more stories</span>

                <span className="load-more-icon">
                  <ArrowRight size={17} />
                </span>
              </button>

            </div>
          )}

        </div>

      </section>


      {/* =========================================
          JOURNAL PHILOSOPHY
      ========================================= */}

      <section className="blog-quote-section">

        <div className="blog-quote-image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfYbIXmk8FioGepho21HCip_sG6KSGW4i8XldohYbLIA&s=10"
            alt="European landscape"
          />
        </div>

        <div className="blog-quote-overlay" />

        <div className="container">

          <div className="blog-quote">

            <div className="quote-index">
              03
            </div>

            <span className="quote-small">
              THE EUROVIA PHILOSOPHY
            </span>

            <div className="quote-symbol">
              “
            </div>

            <h2>
              The best stories
              <br />
              are <em>lived,</em> not read.
            </h2>

            <p>
              Close the journal. Pack your bag.
              Go make one of your own.
            </p>

            <Link
              to="/destinations"
              className="quote-btn"
            >
              <span>Find your next story</span>
              <ArrowUpRight size={17} />
            </Link>

          </div>

        </div>

        <div className="quote-bottom">
          <span>EUROPE · TRAVEL · STORIES</span>
          <span>EST. 2026</span>
        </div>

      </section>


      {/* =========================================
          NEWSLETTER
      ========================================= */}

      <section className="blog-newsletter">

        <div className="container">

          <div className="blog-newsletter-box">

            <div className="newsletter-side-number">
              04
            </div>

            <div className="newsletter-icon">
              <Sparkles size={27} />
            </div>

            <div className="newsletter-text">

              <span>
                THE WEEKLY EDIT
              </span>

              <h2>
                Europe,
                <br />
                <em>delivered.</em>
              </h2>

              <p>
                One beautiful destination, one useful
                travel tip and one reason to pack your bags.
              </p>

            </div>

            <form
              className="blog-subscribe"
              onSubmit={(event) => event.preventDefault()}
            >

              <label>
                YOUR EMAIL ADDRESS
              </label>

              <div className="subscribe-input">

                <input
                  type="email"
                  placeholder="hello@example.com"
                  required
                />

                <button type="submit">
                  <ArrowUpRight size={19} />
                </button>

              </div>

              <small>
                Join 8,000+ curious travellers.
              </small>

            </form>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Blog;

