import React from "react"
import "./Article-Container.scss"

const ArticleContainer = ({
  title,
  description,
  image,
  index,
}: {
  title: string
  description: string
  image: string
  index: number
}) => {
  return (
    <div className="home-popular-article-container">
      <div
        style={index % 2 !== 0 ? { order: "1" } : { order: "0" }}
        className="home-popular-article-container-left"
      >
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="home-popular-article-container-right">
        <img className="home-featured-image" src={image} alt="Coffee" />
      </div>
    </div>
  )
}

export default ArticleContainer
