import React from "react"
import "./Slider-Article.scss"
import { Link } from "react-router-dom"

const SliderArticle = ({ title, image }: { title: string; image: string }) => {
  return (
    <Link to="/article" className="link">
      <div className="home-latest-article">
        <img src={image} alt="Need to put something good here" />
        <h2>{title}</h2>
      </div>
    </Link>
  )
}

export default SliderArticle

/*
  Important 
    - Put in Alt for each image and pass through


*/
