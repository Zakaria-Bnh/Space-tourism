import Navigation from "./components/Navigation";
import Home from "./components/pages/Home";
import Crew from "./components/pages/Crew";
import Destination from "./components/pages/Destination";
import Technology from "./components/pages/Technology";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BgImage from "./components/BgImage";

const App = () => {
  return (
    <Router>
      <BgImage>
        <div className="max-w-[1440px] m-auto pt-8">
          <Navigation />
          <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route path="/crew" element={<Crew />} />
            <Route path="/destination" element={<Destination />} />
            <Route path="/technology" element={<Technology />} />
          </Routes>
        </div>
      </BgImage>
    </Router>
  );
};

export default App;
