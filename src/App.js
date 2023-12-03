import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import TV from'./pages/TV'; 
import Movies from'./pages/Movies'; 
import Celebirity from "./pages/Celebirity";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";
import LoginPage from "./components/LoginPage";


function App() {
    
  return (
    <div className="root-wrap">
      <BrowserRouter>
      <Header/>
      <div className="App">
        <Routes>
        <Route path="/Home" element={<Home />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="/movie/:title" element={<Detail />} />
          <Route path="/TV" element={<TV />} />
          <Route path="/Celebirity" element={<Celebirity />} />
          <Route path="/*" element={<NotFound/>} />
          <Route path="/LoginPage" element={<LoginPage/>} />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;