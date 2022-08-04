import logo from './logo.svg';
import './App.css';
import { Blog, Features, Footer,Header, Possibility,WhatGP3 } from "./pages"
import { Article,Brand,CTA, Feature,Navbar}
from "./components"



function App() {
  return (
  <div className="gradient__bg">  
    <div>
      <Navbar />
    </div>
      <Header />
      <Blog />
      <Features />
      <Footer />
      <Possibility />
      <WhatGP3 />
   
  </div> 
  );
}

export default App;
