import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Nav from "./Components/Nav/Nav"
import Login from "./Components/User/Login"
import Signup from "./Components/User/Signup"
import Home from "./Pages/Home/Home"
import Footer from './Components/Footer';
import Otp from './Pages/Otp/Otp';
import UserProfile from './Pages/Profile/UserProfile';
import Error from './Pages/Error';
import Career from './Pages/Career/Career';

// https://stackoverflow.com/questions/42014751/secure-authentication-between-reactjs-and-django

function App() {

  const location = useLocation();
  
  const hideFooterRoutes = ['/login', '/signup'];

  return (
    <>
      <Nav title="ALUMNET" />
      <Routes>
        <Route path="/" index element={<Home title="Rain or shine, it's a fine time to dine" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/career" element={<Career />} />
        <Route path="*" element={<Error />} />
        
      </Routes>
      {!hideFooterRoutes.includes(location.pathname) && (
        <Footer title="ALUMNET" img="./images/logo.png" />
      )}
    </>
  );
}

export default function Root() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
