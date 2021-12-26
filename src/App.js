import { Route, Routes } from "react-router-dom";
import AuthProvider from "./Contexts/AuthProvider/AuthProvider";
import PrivateRoute from "./logo/PrivateRoute/PrivateRoute";
import Booking from "./Pages/Booking/Booking";
import Login from "./Pages/FIrebase/login/Login";
import Register from "./Pages/FIrebase/Register/Register";
import Home from "./Pages/Home/Home/Home";
import Services from "./Pages/Home/Services/Services";
import Owners from "./Pages/Owners/Owners";
import Footer from "./Sheard/Footer/Footer";
import Navigation from "./Sheard/Navigation/Navigation";

function App() {
  return (
    <div>
      <AuthProvider>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route
            path="/booking/:serviceId"
            element={
              <PrivateRoute>
                <Booking />
              </PrivateRoute>
            }
          />
          <Route path="owner" element={<Owners />} />

          <Route path="service" element={<Services />} />
        </Routes>
        <Footer></Footer>
      </AuthProvider>
    </div>
  );
}

export default App;
