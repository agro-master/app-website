import { HiBars3, HiOutlineXCircle } from "react-icons/hi2";
import imagotipo from "../assets/imagotipo.svg";
import { useState } from "react";

export default function TopBar() {
   const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

   return (
      <div className="drawer m-auto w-full md:w-11/12 2xl:w-9/12">
         <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
         <div className="drawer-content flex flex-col">
            <div className="navbar w-full flex-row-reverse justify-between bg-base-100 px-1 py-2 lg:flex-row lg:px-4 lg:py-4">
               <div className="dropdown dropdown-end">
                  <div
                     tabIndex={0}
                     role="button"
                     className="btn btn-ghost lg:hidden"
                     onClick={() => setDrawerOpen(true)}
                     onBlur={() => setDrawerOpen(false)}
                  >
                     {/* <HiBars3 className="size-7" /> */}
                     {!drawerOpen && <HiBars3 className="size-7" />}
                     {drawerOpen && <HiOutlineXCircle className="size-7" />}
                  </div>
                  <ul className="menu dropdown-content menu-sm z-[1] mt-3 w-64 gap-3 rounded-box bg-base-100 p-2 shadow-outline-lg">
                     <li>
                        <a
                           className="link-hover link link-primary text-center text-lg"
                           href="#home"
                        >
                           Home
                        </a>
                     </li>
                     <li>
                        <a
                           className="link-hover link link-primary text-center text-lg"
                           href="#our-solution"
                        >
                           Our solution
                        </a>
                     </li>
                     <li>
                        <a
                           className="link-hover link link-primary text-center text-lg"
                           href="#features"
                        >
                           Features
                        </a>
                     </li>
                     <li>
                        <a
                           className="link-hover link link-primary text-center text-lg"
                           href="#our-team"
                        >
                           Our team
                        </a>
                     </li>
                     <li>
                        <a
                           className="link-hover link link-primary text-center text-lg"
                           href="#contact-us"
                        >
                           Contact us
                        </a>
                     </li>
                  </ul>
               </div>
               <div className="lg:navbar-start">
                  <a className="btn btn-ghost btn-lg text-xl" href="#">
                     <img src={imagotipo} alt="Imagotipo" />
                  </a>
                  <div className="hidden flex-none lg:block">
                     <ul className="menu menu-horizontal invisible min-w-full gap-2 md:visible">
                        <li>
                           <a
                              className="link-hover link link-primary 2xl:text-lg"
                              href="#home"
                           >
                              Home
                           </a>
                        </li>
                        <li>
                           <a
                              className="link-hover link link-primary 2xl:text-lg"
                              href="#our-solution"
                           >
                              Our solution
                           </a>
                        </li>
                        <li>
                           <a
                              className="link-hover link link-primary 2xl:text-lg"
                              href="#features"
                           >
                              Features
                           </a>
                        </li>
                        <li>
                           <a
                              className="link-hover link link-primary 2xl:text-lg"
                              href="#our-team"
                           >
                              Our team
                           </a>
                        </li>
                        <li>
                           <a
                              className="link-hover link link-primary 2xl:text-lg"
                              href="#contact-us"
                           >
                              Contact us
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
               <div className="navbar-end hidden lg:inline-flex">
                  <a className="btn btn-outline btn-secondary border-[2.5px] px-9 text-base hover:!border-[#89BC66] hover:!bg-transparent hover:!text-[#89BC66]">
                     Contact us
                  </a>
               </div>
            </div>
         </div>
         <div className="drawer-side z-50">
            <label
               htmlFor="my-drawer-3"
               aria-label="close sidebar"
               className="drawer-overlay"
            ></label>
            <ul className="menu min-h-full w-80 bg-base-200 p-4">
               <li>
                  <a className="link-hover link link-primary">Home</a>
               </li>
               <li>
                  <a className="link-hover link link-primary">Our solution</a>
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
      </div>
   );
}

{
   /* <div id="top" className="m-auto w-full md:w-11/12 2xl:w-9/12">
<div className="navbar w-full bg-base-100 py-5">
   <div className="navbar-start">
      <div className="dropdown">
         <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
         >
            <HiBars3 className="size-7" />
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
      <a className="btn btn-ghost btn-lg text-xl" href="#">
         <img src={imagotipo} alt="Imagotipo" />
      </a>
      <ul className="menu menu-horizontal invisible min-w-full gap-2 md:visible">
         <li>
            <a
               className="link-hover link link-primary 2xl:text-lg"
               href="#home"
            >
               Home
            </a>
         </li>
         <li>
            <a
               className="link-hover link link-primary 2xl:text-lg"
               href="#our-solution"
            >
               Our solution
            </a>
         </li>
         <li>
            <a
               className="link-hover link link-primary 2xl:text-lg"
               href="#features"
            >
               Features
            </a>
         </li>
         <li>
            <a
               className="link-hover link link-primary 2xl:text-lg"
               href="#our-team"
            >
               Our team
            </a>
         </li>
         <li>
            <a
               className="link-hover link link-primary 2xl:text-lg"
               href="#contact-us"
            >
               Contact us
            </a>
         </li>
      </ul>
   </div>
   <div className="navbar-end">
      <a className="btn btn-outline btn-secondary border-[2.5px] px-9 text-base hover:!border-[#89BC66] hover:!bg-transparent hover:!text-[#89BC66]">
         Contact us
      </a>
   </div>
</div>
</div> */
}

// <div className="drawer m-auto w-full md:w-11/12 2xl:w-9/12">
//          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
//          <div className="drawer-content flex flex-col">
//             <div className="navbar px-1 lg:px-4 w-full flex-row-reverse justify-between border-2 bg-base-100 py-2 lg:py-4 lg:flex-row">
//                <div className="flex-none lg:hidden pr-3">
//                   <label
//                      htmlFor="my-drawer-3"
//                      aria-label="open sidebar"
//                      className="btn btn-square btn-ghost"
//                   >
//                      <HiBars3 className="size-7" />
//                   </label>
//                </div>
//                <div className="lg:navbar-start">
//                   <a className="btn btn-ghost btn-lg text-xl" href="#">
//                      <img src={imagotipo} alt="Imagotipo" />
//                   </a>
//                   <div className="hidden flex-none lg:block">
//                      <ul className="menu menu-horizontal invisible min-w-full gap-2 md:visible">
//                         <li>
//                            <a
//                               className="link-hover link link-primary 2xl:text-lg"
//                               href="#home"
//                            >
//                               Home
//                            </a>
//                         </li>
//                         <li>
//                            <a
//                               className="link-hover link link-primary 2xl:text-lg"
//                               href="#our-solution"
//                            >
//                               Our solution
//                            </a>
//                         </li>
//                         <li>
//                            <a
//                               className="link-hover link link-primary 2xl:text-lg"
//                               href="#features"
//                            >
//                               Features
//                            </a>
//                         </li>
//                         <li>
//                            <a
//                               className="link-hover link link-primary 2xl:text-lg"
//                               href="#our-team"
//                            >
//                               Our team
//                            </a>
//                         </li>
//                         <li>
//                            <a
//                               className="link-hover link link-primary 2xl:text-lg"
//                               href="#contact-us"
//                            >
//                               Contact us
//                            </a>
//                         </li>
//                      </ul>
//                   </div>
//                </div>
//                <div className="navbar-end hidden md:visible">
//                   <a className="btn btn-outline btn-secondary border-[2.5px] px-9 text-base hover:!border-[#89BC66] hover:!bg-transparent hover:!text-[#89BC66]">
//                      Contact us
//                   </a>
//                </div>
//             </div>
//          </div>
//          <div className="drawer-side z-50">
//             <label
//                htmlFor="my-drawer-3"
//                aria-label="close sidebar"
//                className="drawer-overlay"
//             ></label>
//             <ul className="menu min-h-full w-80 bg-base-200 p-4">
//                <li>
//                   <a className="link-hover link link-primary">Home</a>
//                </li>
//                <li>
//                   <a className="link-hover link link-primary">Our solution</a>
//                </li>
//                <li>
//                   <a className="link-hover link link-primary">Features</a>
//                </li>
//                <li>
//                   <a className="link-hover link link-primary">Our team</a>
//                </li>
//                <li>
//                   <a className="link-hover link link-primary">Contact us</a>
//                </li>
//             </ul>
//          </div>
//       </div>
