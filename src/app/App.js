// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "../components/Welcome";
import Login from "../components/Login";
import ProverbsGame from "../components/ProverbsGame";
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
          <Route path="/number-game" element={<Welcome />} />
          <Route path="/number-game/about" element={<About />} />
          <Route path="/number-game/articles" element={<Articles />}>
            <Route path=":title" element={<Article />} />
          </Route>
          <Route path="/number-game/login" element={<Login />} />
          <Route path="/number-game/proverbs-game" element={<ProverbsGame />} />
          <Route path="/number-game/game" element={<Game />} />
          <Route path="/number-game/sign-up" element={<SignUp />} />
          <Route path="/number-game/profile" element={<Profile />}>
            <Route path="edit" element={<EditProfileForm />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
