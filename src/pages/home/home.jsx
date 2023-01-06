import React from "react";
import Nav from "../navigation/navigation.jsx";
import HeroSection from "./components/herosection.jsx";
import Solutions from "./components/solutions.jsx";
import Organizations from "./components/organizations.jsx";
import Helpful from "./components/helpful.jsx";
import Connect from "./components/connect.jsx";
import Banner from "./components/banner.jsx";
import Footer from "./components/footer.jsx";

function Home() {
  return (
    <>
      <Nav />
      <main className="lg:px-0">
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

export default Home;
