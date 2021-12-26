import { Route, Routes } from "react-router-dom";
import Login from "./Pages/FIrebase/login/Login";
import Register from "./Pages/FIrebase/Register/Register";
import Home from "./Pages/Home/Home/Home";
import Services from "./Pages/Home/Services/Services";
import Footer from "./Sheard/Footer/Footer";
import Navigation from "./Sheard/Navigation/Navigation";

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="service" element={<Services />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
