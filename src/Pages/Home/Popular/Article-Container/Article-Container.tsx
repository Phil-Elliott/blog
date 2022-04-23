import React from "react"
import "./Article-Container.scss"
import { Link } from "react-router-dom"

const ArticleContainer = ({
  title,
  description,
  image,
  index,
  noBorder,
}: {
  title: string
  description: string
  image: string
  index: number
  noBorder?: boolean
}) => {
  return (
    <Link to="/article" className="link">
      <div className="home-popular-article-container">
        <div
          style={index % 2 !== 0 ? { order: "1" } : { order: "0" }}
          className={
            noBorder && index === 0
              ? "home-popular-article-container-left no-top-border"
              : "home-popular-article-container-left "
          }
        >
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div className="home-popular-article-container-right">
          <img className="home-featured-image" src={image} alt="Coffee" />
        </div>
      </div>
    </Link>
  )
}

export default ArticleContainer
