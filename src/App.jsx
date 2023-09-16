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
        <div className="max-w-[1440px] m-auto">
          <header className="lg:pt-8 w-[90%] m-auto sm:ml-auto sm:mr-0 sm:w-[95%]">
            <Navigation />
          </header>
          <main className="w-[90%] sm:w-[80%] m-auto mt-14 md:mt-20 pb-14 md:pb-20">
            <Routes>
              <Route exact path="/home" element={<Home />} />
              <Route path="/crew" element={<Crew />} />
              <Route path="/destination" element={<Destination />} />
              <Route path="/technology" element={<Technology />} />
            </Routes>
          </main>
        </div>
      </BgImage>
    </Router>
  );
};

export default App;
