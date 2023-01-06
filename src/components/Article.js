import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { useContext } from "react";
import AuthContext from "../context/AuthContextProvider";
import { Link } from "react-router-dom";

export const articles = {
  "context-reducers": {
    title: "2.6 useContext and useReducer",
    body: `useState, useEffect and useContext are the basic hooks whch you'll use the most often.  
    There are 7 other hooks that are classified as additional hooks in [React's official documentation](https://reactjs.org/docs/hooks-reference.html).  
    These other hooks you may only use them occasionally or even never have to use them.
    \n ### Reducers  
      const [ state, setState ] = useState(null); 
      const [ state, dispatchFn ] = useReducer(reducerFn, initialValue);  
    \n useState vs useReducer    
    - useReducer is a more powerful alternative to useState.  
    - Used for complex state updates, especially when new state depends on previous state and we have mutiple related states.  
    - more work to setup
      \n ### Context      
      \n In React, we usually have to manage different type of state  
      - local states (within a component)  
      - cross-component states (shared between related components)  
      - app-wide or global state (shared throughout entire app)  
      For local state, we use useState.  But with some components, we might have to do a few levels of props forwarding and then lifting the state back up.  Some components in between have no use for the props but are just responsible for forwarding them.
      `,
    author: "Daniel",
  },
  "conditional-rendering": {
    title: "2.7 Conditional Rendering and Lists",
    body: `### What is conditional rendering? 
    \n To render JSX elements or components based on specific conditions.
    \n ### Ways to do Conditional Rendering
    \n 1. Ternary
    \n 2. Short-Circuiting
    \n 3. Handle Conditional Logic in Component
    `,
    author: "Daniel",
  },
  "react-router": {
    title: "2.8 React Router v6",
    body: `### What is Client Side Routing 
    \n There are different layers of routing, network, server, etc.
    \n In front end development, we usually use client-side routing to display content using javascript based on the url.
    \n Earlier web apps rendered content by serving HTML pages depending on the URL.
    \n Each time a client enters a URL, the server responds by checking for the page and sending the corresponding images, js and html files. This resulted in an experience that was not smooth and also required many server calls.
    \n Modern JS apps use client-side routing so that we can deploy what are known as SPA (Single Page Application).
    \n React Router is one such library that does this routing process.  
    \n ### How To  
      import { BrowserRouter } from "react-router-dom";   
    \n Wrap the root component  
    
      <BrowserRouter>
        <App />
      </BrowserRouter>
    \n Define routes using Routes and Route component provided by React Router
    
    <BrowserRouter>
      <Routes>
        // Each route takes a prop of path and element
        // path: url path
        // element: component to load when hitting this route
        <Route path="/" element={<Header />} />
        <Route path="/view" element={<View />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </BrowserRouter>
    `,
    author: "Daniel",
  },
};

export default function Article() {
  const authCtx = useContext(AuthContext);
  const { title } = useParams();
  const article = articles[title];

  if (!authCtx.isLoggedIn) {
    return (
      <div style={{fontSize: 20}}>
        <h1>Unauthorized!</h1>
        Please login first!
        <p />
        <Link to="/number-game/login">
          Click here to login
        </Link>
      </div>
    );
  }

  return article ? (
    <div className="article-container">
      <h1 className="article-title">{article.title}</h1>
      <p>By {article.author}</p>
      <ReactMarkdown>{article.body}</ReactMarkdown>
    </div>
  ) : (
    <p> No article found with that title... </p>
  );
}
