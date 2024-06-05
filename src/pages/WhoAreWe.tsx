export default function WhoAreWe() {
   return (
      <div
         id="our-team"
         className="flex w-screen flex-col gap-14 bg-primary py-10 text-neutral"
      >
         <div className="m-auto w-5/12 text-center">
            <h3 className="text-5.5xl font-outfit font-bold">Who Are We?</h3>
            <p className="text-base font-semibold 2xl:text-xl">
               We are a team with extensive experience in developing
               technological solutions for the agricultural sector, and we are
               excited to present an innovative product.
            </p>
         </div>
         <div className="m-auto flex w-3/4 justify-evenly gap-10">
            <div className="gap-5/12 flex w-3/12 flex-col items-center justify-between">
               <h4 className="font-outfit text-5xl font-bold 2xl:text-6xl">
                  +4 years
               </h4>
               <p className="text-center text-base font-semibold 2xl:text-xl">
                  Of experience in agricultural systems development
               </p>
            </div>
            <div className="flex w-5/12 flex-col items-center justify-between gap-5">
               <h4 className="font-outfit text-5xl font-bold 2xl:text-6xl">
                  +80 projects
               </h4>
               <p className="text-center text-base font-semibold 2xl:text-xl">
                  Executed related to the collection, analysis and presentation
                  of agricultural data
               </p>
            </div>
         </div>
      </div>
   );
}
