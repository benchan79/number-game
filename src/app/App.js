// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "../components/Welcome";
import Login from "../components/Login";
import Game from "../components/Game";
import DefaultPage from "../components/DefaultPage";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";
import Articles from "../components/Articles";
import Article from "../components/Article";
import SignUp from "../components/SignUp";
import Profile from "../components/Profile";
import EditProfileForm from "../components/EditProfileForm";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="*" element={<DefaultPage />} />
          <Route path="/" element={<Welcome />} />
          <Route path="/about" element={<About />} />
          <Route path="/articles" element={<Articles />}>
            <Route path=":title" element={<Article />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/game" element={<Game />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/profile" element={<Profile />}>
            <Route path="edit" element={<EditProfileForm />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
