// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";

import FooterBar from "./components/FooterBar";
import TopBar from "./components/TopBar";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Features from "./pages/Features";
import HeroBanner from "./pages/HeroBanner";
import WhoAreWe from "./pages/WhoAreWe";

function App() {
   return (
      <div className="h-screen w-screen overflow-x-hidden">
         <TopBar />
         <main className="m-auto w-11/12">
            <HeroBanner />
            <About />
            <Features />
         </main>
         <WhoAreWe />
         <ContactUs />
         <FooterBar />
      </div>
   );
}

export default App;
