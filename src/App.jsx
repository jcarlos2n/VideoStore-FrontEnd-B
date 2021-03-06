
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import Header from "./components/Header/Header"
import Footer from './components/Footer/Footer'
import AboutUs from './containers/AboutUs/AboutUs'
import Home from "./containers/Home/Home";
import Films from "./containers/Films/Films";
import Login from "./containers/User/Login/Login";
import Signup from "./containers/User/Signup/Signup";
import Profile from "./containers/User/Profile/Profile";
import './App.scss'



function App() {


  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>          
          <Route path="/aboutus" element={<AboutUs />}/>
          <Route path="/films" element={<Films />}/> 
          <Route path="/signup" element={<Signup />}/>     
          <Route path="/login" element={<Login />}/>     
          <Route path="/profile" element={<Profile />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
