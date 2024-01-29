import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import StylesPage from "./pages/StylesPage/StylesPage";
import CommitteePage from "./pages/CommitteePage/CommitteePage";
import CoachesPage from "./pages/CoachesPage/CoachesPage";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/styles" element={<StylesPage />} />
          <Route path="/committee" element={<CommitteePage />} />
          <Route path="/coaches" element={<CoachesPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
