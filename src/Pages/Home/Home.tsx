import React from "react"
import "./Home.scss"
import { Featured, Latest, Popular } from "./index"

const Home = () => {
  return (
    <div className="home-container">
      <Featured />
      <Latest />
      <Popular />
    </div>
  )
}

export default Home

/*
  1) Featured Article (just the new article)
  2) Most viewd articles slider 
  3) Popular articles full view - left to right
  4) Add a footer


  - might need to add in some border after



  - could sort articles page by most viewed 
  - add in a search bar



  need to figure out how everything will work 
  - user opens home page
      - user sees latest article
      - user sees latest articles (slider)
      - user sees most popular articles  (scroll through)


  - scrolling up should show the header 


  - could add hot sales on home page


  - we are not aiming for the best deal, but the best value 
*/
