export default function WhoAreWe() {
   return (
      <div
         id="our-team"
         className="relative z-10 flex w-screen flex-col gap-14 bg-primary py-16 text-neutral md:py-12"
      >
         <div className="z-10 m-auto flex w-11/12 flex-col gap-5 text-center md:w-5/12">
            <h3 className="font-outfit text-4xl font-bold md:text-5.5xl">
               Who Are We?
            </h3>
            <p className="text-base font-semibold 2xl:text-xl">
               We are a team with extensive experience in developing
               technological solutions for the agricultural sector, and we are
               excited to present an innovative product.
            </p>
         </div>
         <div className="z-10 m-auto flex w-full flex-col items-center justify-evenly gap-10 md:w-3/4 md:flex-row">
            <div className="flex w-11/12 flex-col items-center justify-between gap-5 md:w-3/12">
               <h4 className="font-outfit text-5xl font-bold 2xl:text-6xl">
                  +4 years
               </h4>
               <p className="text-center text-base font-semibold 2xl:text-xl">
                  Of experience in agricultural systems development
               </p>
            </div>
            <div className="flex w-10/12 flex-col items-center justify-between gap-5 md:w-5/12">
               <h4 className="font-outfit text-5xl font-bold 2xl:text-6xl">
                  +80 projects
               </h4>
               <p className="text-center text-base font-semibold 2xl:text-xl">
                  Executed related to the collection, analysis and presentation
                  of agricultural data
               </p>
            </div>
         </div>
         <div className="absolute left-0 top-0 size-full overflow-hidden">
            <span className="absolute -bottom-20 -left-20 size-[10rem] rounded-[100%] border-[12px] border-[#0B9E7F] md:-bottom-28 md:-left-28 md:size-[18rem] md:border-[9px] 2xl:-bottom-36 2xl:size-[20rem]"></span>
            <span className="absolute -right-20 -top-16 size-[10rem] rounded-[100%] border-[12px] border-[#0B9E7F] md:-right-28 md:-top-28 md:size-[18rem] md:border-[9px] 2xl:-top-36 2xl:size-[20rem]"></span>
         </div>
      </div>
   );
}
