import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import History from "./pages/History";
import Cart from "./pages/Cart";
import Appbar from "./components/Appbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Appbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
