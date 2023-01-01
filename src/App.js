import React from "react";
import Nav from "./pages/navigation.jsx";
import HeroSection from "./pages/components/herosection.jsx"
import CustomerLogos from "./pages/components/customerlogos.jsx"

function App() {
  return (
    <>
        <Nav />
        <main>
          <HeroSection/>
          <CustomerLogos/>
        </main>
    </>
  );
}

export default App;
