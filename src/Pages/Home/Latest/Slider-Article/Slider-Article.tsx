import React from "react"
import "./Slider-Article.scss"

const SliderArticle = ({ title, image }: { title: string; image: string }) => {
  return (
    <div className="home-latest-article">
      <img src={image} alt="Need to put something good here" />
      <h2>{title}</h2>
    </div>
  )
}

export default SliderArticle

/*
  Important 
    - Put in Alt for each image and pass through


*/
