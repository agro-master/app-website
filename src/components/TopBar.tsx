import imagotipo from "../assets/imagotipo.svg";

export default function TopBar() {
   return (
      <div className="m-auto w-11/12">
         <div className="navbar w-full bg-base-100 py-5">
            <div className="navbar-start">
               <div className="dropdown">
                  <div
                     tabIndex={0}
                     role="button"
                     className="btn btn-ghost lg:hidden"
                  >
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth="2"
                           d="M4 6h16M4 12h8m-8 6h16"
                        />
                     </svg>
                  </div>
                  <ul className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow">
                     <li>
                        <a className="link-hover link link-primary">Home</a>
                     </li>
                     <li>
                        <a className="link-hover link link-primary">
                           Our solution
                        </a>
                     </li>
                     <li>
                        <a className="link-hover link link-primary">Features</a>
                     </li>
                     <li>
                        <a className="link-hover link link-primary">Our team</a>
                     </li>
                     <li>
                        <a className="link-hover link link-primary">
                           Contact us
                        </a>
                     </li>
                  </ul>
               </div>
               <a className="btn btn-ghost btn-lg text-xl">
                  <img src={imagotipo} alt="Imagotipo" />
               </a>
               <ul className="menu menu-horizontal invisible min-w-full md:visible">
                  <li>
                     <a className="link-hover link link-primary">Home</a>
                  </li>
                  <li>
                     <a className="link-hover link link-primary">
                        Our solution
                     </a>
                  </li>
                  <li>
                     <a className="link-hover link link-primary">Features</a>
                  </li>
                  <li>
                     <a className="link-hover link link-primary">Our team</a>
                  </li>
                  <li>
                     <a className="link-hover link link-primary">Contact us</a>
                  </li>
               </ul>
            </div>
            <div className="navbar-end">
               <a className="btn btn-outline btn-secondary border-[2.5px] px-9 text-base hover:!border-[#89BC66] hover:!bg-transparent hover:!text-[#89BC66]">
                  Contact us
               </a>
            </div>
         </div>
      </div>
   );
}
