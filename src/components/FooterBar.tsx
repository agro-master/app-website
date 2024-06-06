import imagotipoWhite from "../assets/imagotipo-white.svg";

export default function FooterBar() {
   return (
      <footer className="max-w-[100vw] bg-secondary py-5 md:py-7">
         <div className="m-auto flex flex-col items-center justify-between gap-4 md:w-10/12 md:flex-row md:items-start md:gap-0">
            <a href="#top">
               <img src={imagotipoWhite} />
            </a>
            <span className="font-open-sans text-sm font-semibold text-white md:text-base 2xl:text-xl">
               @ 2024 AgroMaster. All rights reserved.
            </span>
         </div>
      </footer>
   );
}
