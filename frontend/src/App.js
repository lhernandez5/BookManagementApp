import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar.js";
import SavedBookList from "./components/SavedBookList/SavedBooksList.js";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/saved-books" element={<SavedBookList />} />
      </Routes>
    </Router>
  );
}

export default App;
