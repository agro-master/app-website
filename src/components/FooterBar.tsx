import imagotipoWhite from "../assets/imagotipo-white.svg";

export default function FooterBar() {
   return (
      <footer className="max-w-[100vw] bg-secondary py-7">
         <div className="m-auto flex w-10/12 justify-between">
            <img src={imagotipoWhite} />
            <span className="font-open-sans font-semibold text-white">
               @ 2024 AgroMaster. All rights reserved.
            </span>
         </div>
      </footer>
   );
}
