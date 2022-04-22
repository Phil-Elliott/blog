import React from "react"
import "./App.scss"
import { Header, Footer } from "./Components/index"
import { Home } from "./Pages/index"

function App() {
  return (
    <main className="App">
      <Header />
      <Home />
      <Footer />
    </main>
  )
}

export default App

/*

  1) Header 
    - home 
    - articles
    - about page 
    - contact page

    not sure 
    - subscribe 
    - search 

  2) Home Page 
  3) Article 
  4) Footer
    - disclaimer (https://www.smartpassiveincome.com/)
    - privacy policy
    - terms of service

  5) 404 page



  - Need to be able to subscribe 
      - could have button on header
      - could do this later (will need to do html emails for this)



  - figure out cookies (show on bottom)

  - need to figure out social media and add links 



  design 
    - colors 
      - white 
      - black 
      - need one more color 


  name 
   - Money Spent Wisely (MSP)


  could add subtle animations to everything at the end 


  semantic html

  Can use within each other
  - section 
      - use for content that is not an article
  - article 
      - use for blog posts
      - ? user comments

  - Header 
    - nav inside (for main links)
  - Footer


  -aside 
    - could be useful in an article (quotes and side notes about content)


  -figure (good for images and captions)
  <figure>
  <img src="pic_trulli.jpg" alt="Trulli">
  <figcaption>Fig1. - Trulli, Puglia, Italy.</figcaption>
  </figure>


  - time (defines date or time)






  could make a logo (https://logomakr.com/app/)
    - use dollar instead of S


  favicon 
    - copy ted logo

*/
