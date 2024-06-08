import FooterBar from "./components/FooterBar";
import TopBar from "./components/TopBar";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Features from "./pages/Features";
import HeroBanner from "./pages/HeroBanner";
import WhoAreWe from "./pages/WhoAreWe";

function App() {
   return (
      <div className="h-screen w-screen select-none overflow-x-hidden scroll-smooth bg-base-100">
         <TopBar />
         <main className="m-auto w-full bg-base-100 md:w-11/12 2xl:w-10/12 5xl:w-11/12">
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
