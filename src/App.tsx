import FooterBar from "./components/FooterBar";
import TopBar from "./components/TopBar";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Features from "./pages/Features";
import HeroBanner from "./pages/HeroBanner";
import WhoAreWe from "./pages/WhoAreWe";

function App() {
   return (
      <div className="h-screen w-screen select-none overflow-x-hidden scroll-smooth">
         <TopBar />
         <main className="m-auto w-11/12 2xl:w-9/12">
            <HeroBanner />
            <About />
            <Features />
         </main>
         <WhoAreWe />
         <ContactUs />
         <FooterBar />
         <a
            href="#top"
            className="shadow-outline-lg btn btn-circle btn-secondary fixed bottom-10 right-10 z-20 h-20 w-20"
         >
            <svg
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               strokeWidth={1.5}
               stroke="currentColor"
               className="size-12"
            >
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
               />
            </svg>
         </a>
      </div>
   );
}

export default App;
