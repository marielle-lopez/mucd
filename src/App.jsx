import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import StylesPage from "./pages/StylesPage/StylesPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/styles" element={<StylesPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
