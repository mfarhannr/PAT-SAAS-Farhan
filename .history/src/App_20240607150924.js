import React from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import News from "./components/news";
import Ekstrakurikuler from "./components/ekstrakurikuler";
import Testimonial from "./components/testimonials";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <News />
      <Ekstrakurikuler />
      <Testimonial />
    </div>
  );
}

export default App;
