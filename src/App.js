import React from "react";
import Nav from "./pages/navigation.jsx";
import HeroSection from "./pages/components/herosection.jsx";
import Solutions from "./pages/components/solutions.jsx";
import Organizations from "./pages/components/organizations.jsx";
import Helpful from "./pages/components/helpful.jsx";
import Connect from "./pages/components/connect.jsx";
import Banner from "./pages/components/banner.jsx";
import Footer from "./pages/footer.jsx";

function App() {
  return (
    <>
      <Nav />
      <main>
        <HeroSection />
        <Solutions />
        <Organizations />
        <Helpful />
        <Connect />
        <Banner />
      </main>
      <Footer />
    </>
  );
}

export default App;
