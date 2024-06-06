import heroImage from "../assets/hero-phone.png";

export default function HeroBanner() {
   return (
      <div
         id="home"
         className="hero max-h-screen min-w-full bg-base-100 px-4 py-7 md:px-0 md:py-0"
      >
         <div className="hero-content min-w-full flex-col-reverse justify-between gap-10 px-3 py-0 md:px-10 lg:flex-row-reverse">
            <div className="relative w-full max-w-full flex-grow md:max-w-[45%]">
               <img
                  src={heroImage}
                  className="mx-0 md:mx-5 md:max-w-lg 2xl:max-w-xl"
               />
               <span className="absolute left-0 top-5 -z-20 h-[85%] w-full rounded-[100%] bg-[#89BC66] md:left-0 md:top-10 md:size-[35rem] 2xl:top-0 2xl:size-[40rem]"></span>
            </div>
            <div className="mx-0 flex w-full flex-grow-0 flex-col gap-2 md:w-[45%] 2xl:w-[40%]">
               <h1 className="text-center font-outfit text-4xl font-bold !leading-[1.35] md:text-left md:text-5.5xl">
                  Monitor all your crops with just one app
               </h1>
               <p className="py-6 text-center text-base md:text-justify md:text-xl">
                  AgroMaster: Your all-in-one agricultural assistant. From
                  real-time monitoring to advanced analytics, ensure healthier
                  crops and maximize yields.
               </p>
               <button className="btn btn-secondary m-auto max-w-fit px-10 text-base text-white md:btn-lg hover:bg-[#1B5849] hover:text-[#89BC66] md:m-0 md:text-xl">
                  Beta Sign-Up
               </button>
            </div>
         </div>
      </div>
   );
}
