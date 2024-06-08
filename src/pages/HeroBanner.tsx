import heroImage from "../assets/hero-phone.png";

export default function HeroBanner() {
   return (
      <div
         id="home"
         className="hero z-50 max-h-screen min-w-full bg-base-100 px-4 py-7 md:px-0 md:py-3 xl:h-[70vh] 2xl:py-10 5xl:h-[80vh] 5xl:py-0"
      >
         <div className="hero-content h-full min-w-full flex-col-reverse justify-between gap-10 px-3 py-0 md:px-10 lg:flex-row-reverse">
            <div className="relative flex w-full max-w-full flex-grow justify-end md:max-w-[45%] 2xl:max-w-[42%] 5xl:h-4/5">
               <img
                  src={heroImage}
                  className="mx-0 w-full object-cover md:mx-5 md:max-w-lg 2xl:max-w-xl 5xl:mx-0 5xl:max-h-full 5xl:min-w-full 5xl:object-contain"
               />
               <span className="absolute left-0 top-5 -z-20 h-[85%] w-full rounded-[100%] bg-[#89BC66] md:-left-10 md:top-2 md:size-[35rem] 2xl:left-auto 2xl:right-0 2xl:top-0 2xl:size-[40rem] 5xl:-top-5 5xl:left-10 5xl:size-[55rem]"></span>
            </div>
            <div className="mx-0 flex w-full flex-grow-0 flex-col gap-2 md:w-[80%] xl:w-[45%] 2xl:w-[43%] 5xl:w-[40%]">
               <h1 className="text-center font-outfit text-4xl font-bold !leading-[1.35] md:text-left md:text-5.5xl xl:text-6xl 2xl:text-7xl 5xl:text-8xl">
                  Monitor all your crops with just one app
               </h1>
               <p className="py-6 text-center text-base md:text-justify md:text-xl 2xl:text-2xl">
                  AgroMaster: Your all-in-one agricultural assistant. From
                  real-time monitoring to advanced analytics, ensure healthier
                  crops and maximize yields.
               </p>
               <button className="btn btn-secondary m-auto max-w-fit px-10 text-base text-white !outline-0 md:btn-lg hover:bg-[#1B5849] hover:text-[#89BC66] md:m-0 md:px-10 md:text-xl 2xl:px-14 2xl:text-2xl">
                  Beta Sign-Up
               </button>
            </div>
         </div>
      </div>
   );
}
