import React from "react"
import "./Article.scss"

const article = {
  title: "Start your day with the right cup of coffee",
  date: "April 21, 2022",
  content: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud .",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. incidid exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  ],

  image:
    "https://cdn.pixabay.com/photo/2013/08/11/19/46/coffee-171653_960_720.jpg",
}

const Article = () => {
  return (
    <div className="article-container">
      <div>
        <h1>{article.title}</h1>
        <p>Last Updated: {article.date}</p>
        <img src={article.image} alt="" />
        <div className="article-content">
          {article.content.map((paragraph) => (
            <p>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Article

/*

  1) Title 
  2) lat updated (date)
  3) Picture 
  4) Content 

  styles 
    - do same width as about section 
    - could also add in articles to the right 


 comments 
   - show comments count (count and comments)
   - show comments

   * could add comments in at a later time 
   name 
   comment 
   date and time 
   reply bttn 
     each reply goes inline 

   


  



*/
