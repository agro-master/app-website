import heroImage from "../assets/hero-phone.png";

export default function HeroBanner() {
   return (
      <div className="hero max-h-screen min-w-full bg-base-100">
         <div className="hero-content min-w-full flex-col justify-between gap-10 px-10 py-0 lg:flex-row-reverse">
            <div className="relative w-full max-w-[45%] flex-grow">
               <img src={heroImage} className="mx-5 max-w-lg" />
               <span className="absolute left-0 top-10 -z-20 h-[35rem] w-[35rem] rounded-[100%] bg-[#89BC66] 2xl:top-0 2xl:h-[40rem] 2xl:w-[40rem]"></span>
            </div>
            <div className="flex w-[45%] flex-grow-0 flex-col gap-2 2xl:mx-32">
               <h1 className="font-outfit md:text-5.5xl text-2xl font-bold !leading-[1.35]">
                  Monitor all your crops with just one app
               </h1>
               <p className="py-6 text-justify text-xl">
                  AgroMaster: Your all-in-one agricultural assistant. From
                  real-time monitoring to advanced analytics, ensure healthier
                  crops and maximize yields.
               </p>
               <button className="btn btn-secondary btn-lg max-w-fit px-12 text-xl text-white hover:bg-[#1B5849] hover:text-[#89BC66]">
                  Beta Sign-Up
               </button>
            </div>
         </div>
      </div>
   );
}
