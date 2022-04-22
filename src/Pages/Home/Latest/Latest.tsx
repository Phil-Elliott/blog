import React, { useState } from "react"
import "./Latest.scss"
import SliderArticle from "./Slider-Article/Slider-Article"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

const featuredArticles = [
  {
    title: "Start your day with the right cup of coffee",
    image:
      "https://cdn.pixabay.com/photo/2020/01/22/18/23/istanbul-4785964_960_720.jpg",
  },
  {
    title: "Start your day with the right cup of coffee",
    image:
      "https://cdn.pixabay.com/photo/2016/11/21/12/10/tv-1844964_960_720.jpg",
  },
  {
    title: "Start your day with the right cup of coffee",
    image:
      "https://cdn.pixabay.com/photo/2016/04/30/08/35/aircraft-1362586_960_720.jpg",
  },
]

export const Latest = () => {
  // const [currentArticle, setCurrentArticle] = useState(0)

  // const slideLeft = () => {
  //   if (currentArticle > 0) {
  //     setCurrentArticle((prevArticle) => prevArticle - 1)
  //   }
  // }

  // const slideRight = () => {
  //   if (currentArticle < 2) {
  //     setCurrentArticle((prevArticle) => prevArticle + 1)
  //   }
  // }

  return (
    <section className="home-latest-container">
      <h1 className="home-section-header">Latest</h1>
      <div className="home-latest-slider-container">
        {/* <FaChevronLeft
          className={
            currentArticle > 0
              ? "slider-chevron"
              : "slider-chevron slider-chevron-hide"
          }
          onClick={() => slideLeft()}
        /> */}

        <div className="home-latest-slider-articles">
          {featuredArticles.map((article, index) => {
            // let min = currentArticle * 3
            // let max = min + 3
            // if (index >= min && index < max) {
            return (
              <SliderArticle
                key={index}
                title={article.title}
                image={article.image}
              />
            )
            // }
          })}
        </div>

        {/* <FaChevronRight
          className={
            currentArticle < 2
              ? "slider-chevron"
              : "slider-chevron slider-chevron-hide"
          }
          onClick={() => slideRight()}
        /> */}
      </div>
    </section>
  )
}

/*

  Make the image containers in viewports and display each one 
  MAybe have a max width for the articles container 
  When you click 
    - 

  could change file structre 
  use two maps
  use npm for slider
*/
