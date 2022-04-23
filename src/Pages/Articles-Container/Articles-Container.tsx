import React from "react"
import "./Articles-Container.scss"
import ArticleContainer from "../Home/Popular/Article-Container/Article-Container"

const featuredArticles = [
  {
    title: "Start your day with the right cup of coffee",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image:
      "https://cdn.pixabay.com/photo/2016/11/21/12/10/tv-1844964_960_720.jpg",
  },
  {
    title: "Start your day with the right cup of coffee",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image:
      "https://cdn.pixabay.com/photo/2020/01/22/18/23/istanbul-4785964_960_720.jpg",
  },
  {
    title: "Start your day with the right cup of coffee",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image:
      "https://cdn.pixabay.com/photo/2016/04/30/08/35/aircraft-1362586_960_720.jpg",
  },
  {
    title: "Start your day with the right cup of coffee",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image:
      "https://cdn.pixabay.com/photo/2013/08/11/19/46/coffee-171653_960_720.jpg",
  },
  {
    title: "Start your day with the right cup of coffee",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image:
      "https://cdn.pixabay.com/photo/2020/01/22/18/23/istanbul-4785964_960_720.jpg",
  },
  {
    title: "Start your day with the right cup of coffee",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image:
      "https://cdn.pixabay.com/photo/2016/11/21/12/10/tv-1844964_960_720.jpg",
  },
  {
    title: "Start your day with the right cup of coffee",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image:
      "https://cdn.pixabay.com/photo/2020/01/22/18/23/istanbul-4785964_960_720.jpg",
  },
  {
    title: "Start your day with the right cup of coffee",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image:
      "https://cdn.pixabay.com/photo/2016/04/30/08/35/aircraft-1362586_960_720.jpg",
  },
  {
    title: "Start your day with the right cup of coffee",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image:
      "https://cdn.pixabay.com/photo/2013/08/11/19/46/coffee-171653_960_720.jpg",
  },
  {
    title: "Start your day with the right cup of coffee",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image:
      "https://cdn.pixabay.com/photo/2020/01/22/18/23/istanbul-4785964_960_720.jpg",
  },
]

const ArticlesContainer = () => {
  return (
    <div className="main-articles-container">
      <div className="home-popular-articles-container">
        {featuredArticles.map((article, index) => {
          return (
            <ArticleContainer
              key={index}
              index={index}
              title={article.title}
              description={article.description}
              image={article.image}
              noBorder={true}
            />
          )
        })}
      </div>
    </div>
  )
}

export default ArticlesContainer

/*  

  Can be the same as home popular section 

  later you can add lazy loading of even numbers at bottom to change results

*/
