import React from "react";
import { Link, Outlet } from 'react-router-dom';

const articles = [
  {
    title: "2.6 useContext and useReducer",
    slug: "context-reducers"
  },
  {
    title: "2.7 Conditional Rendering and Lists",
    slug: "conditional-rendering"
  },
  {
    title: "2.8 React Router v6",
    slug: "react-router"
  },
  {
    title: "2.9 Axios, Async and useEffect",
    slug: "axios-async-useeffect"
  },
]

export default function Articles () {
  return (
    <main>
      <h1>Articles</h1>
      <ul>
        { 
          articles.map(article => {
            return (
              <li key={article.slug}>
                <Link to={article.slug}>
                  {article.title}
                </Link>
              </li>
            )
          })
        }
      </ul>
      <hr/>
      <Outlet />
    </main>
  )
}