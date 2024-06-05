export default function ContactUs() {
   return (
      <div
         id="contact-us"
         className="flex w-screen flex-col gap-14 bg-base-100 py-12"
      >
         <div className="m-auto flex w-6/12 flex-col gap-5 text-center 2xl:w-5/12">
            <h3 className="text-5.5xl font-outfit font-bold">Contact Us</h3>
            <p className="text-lg leading-relaxed 2xl:text-xl">
               Join us in transforming the future of agriculture in a
               sustainable and efficient way Got questions or ready to get
               started? Reach out to us today!
            </p>
         </div>
         <div className="m-auto flex w-3/4 justify-center gap-10">
            <button className="btn btn-secondary btn-lg max-w-fit px-12 text-xl text-white hover:bg-[#1B5849] hover:text-[#89BC66]">
               Contact us
            </button>
            <button className="btn btn-outline btn-secondary btn-lg border-[2.5px] px-12 text-base hover:!border-[#89BC66] hover:!bg-transparent hover:!text-[#89BC66]">
               Beta Sign-Up
            </button>
         </div>
      </div>
   );
}
