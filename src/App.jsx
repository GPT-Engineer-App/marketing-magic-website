import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Routes>
        <Navbar />
        <Route exact path="/" element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;
