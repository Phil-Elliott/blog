import React from "react"
import "./Featured.scss"
import { Link } from "react-router-dom"

const featuredArticle = {
  title: "Start your day with the right cup of coffee",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  image:
    "https://cdn.pixabay.com/photo/2013/08/11/19/46/coffee-171653_960_720.jpg",
}

const Featured = () => {
  return (
    <section className="home-featured-container">
      <h1 className="home-section-header featured-header">Featured</h1>
      <Link to="/article" className="link">
        <div className="home-featured-article-container">
          <div className="home-featured-left-container">
            <h2>{featuredArticle.title}</h2>
            <p>{featuredArticle.description}</p>
            <div>
              <button type="button" name="Read Article Button">
                Read Now
              </button>
            </div>
          </div>
          <img
            className="home-featured-image"
            src={featuredArticle.image}
            alt="Coffee"
          />
        </div>
      </Link>
    </section>
  )
}

export default Featured
