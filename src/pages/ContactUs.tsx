export default function ContactUs() {
   return (
      <div
         id="contact-us"
         className="relative z-20 flex w-screen flex-col gap-8 md:gap-14 bg-base-100 py-12"
      >
         <div className="m-auto flex w-11/12 flex-col gap-5 text-center md:w-6/12 2xl:w-5/12">
            <h3 className="font-outfit text-4xl font-bold md:text-5.5xl">
               Contact Us
            </h3>
            <p className="font-open-sans text-lg leading-relaxed 2xl:text-xl">
               Join us in transforming the future of agriculture in a
               sustainable and efficient way Got questions or ready to get
               started? Reach out to us today!
            </p>
         </div>
         <div className="m-auto flex w-7/12 flex-col items-center justify-center gap-4 md:gap-10 md:w-3/4 md:flex-row">
            <button className="btn btn-secondary w-full px-12 font-outfit text-base text-white md:btn-lg hover:bg-[#1B5849] hover:text-[#89BC66] md:w-fit md:text-xl">
               Contact us
            </button>
            <button className="btn btn-outline btn-secondary w-full border-[2.5px] px-12 font-outfit text-base md:btn-lg hover:!border-[#89BC66] hover:!bg-transparent hover:!text-[#89BC66] md:w-fit md:text-xl">
               Beta Sign-Up
            </button>
         </div>
         {/* <div className="flex w-full items-center justify-center align-middle">
            <a
               href="#top"
               className="flex w-fit flex-col items-center justify-center align-middle"
            >
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="size-6"
               >
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     d="m4.5 15.75 7.5-7.5 7.5 7.5"
                  />
               </svg>
               Back to home
            </a>
         </div> */}
      </div>
   );
}
