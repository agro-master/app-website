import sideImage from "../assets/phone-side.png";
import automation from "../assets/automation.svg";
import report from "../assets/reports.svg";
import analysis from "../assets/analysis.svg";
import interfaceIcon from "../assets/interface.svg";

const FEATURE_PANELS: AboutCardProps[] = [
   {
      title: "Automation",
      description:
         "Efficiently manage agricultural processes with automated workflows.",
      icon: automation,
   },
   {
      title: "Pre-made Reports",
      description:
         "Access comprehensive reports, including pest and disease analysis.",
      icon: report,
   },
   {
      title: "Plant Data Analysis",
      description:
         "Analyze plant data to make informed decisions and optimize crop health.",
      icon: analysis,
   },
   {
      title: "Intuitive Interface",
      description:
         "Navigate seamlessly through our user-friendly mobile application.",
      icon: interfaceIcon,
      iconClass: "h-9 w-12 mx-auto md:m-0",
   },
];

export default function Features() {
   return (
      <div
         id="features"
         className="relative z-20 flex h-fit min-h-[40vh] min-w-full flex-col-reverse justify-center bg-base-100 px-3 py-16 pb-36 md:flex-col md:py-24 xl:px-14 xl:py-44 2xl:min-h-[70vh] 2xl:px-10 2xl:py-36"
      >
         <div className="relative h-[21rem] md:h-0">
            <div className="absolute right-[-8rem] top-8 z-10 md:-top-8 md:right-[-20rem] 2xl:right-[-20rem]">
               <img
                  src={sideImage}
                  className="mx-16 max-w-sm md:mx-10 md:max-w-xl 2xl:mx-5"
               />
               <span className="absolute left-12 top-0 -z-20 size-[26rem] rounded-[100%] bg-[#89BC66] md:left-0 md:top-0 md:size-[35rem] 2xl:-left-10 2xl:top-0 2xl:size-[40rem]"></span>
            </div>
         </div>
         <div className="flex h-full w-full flex-col gap-10 md:w-[65%] 2xl:mx-32">
            <div className="flex flex-col gap-4">
               <div className="flex flex-col gap-3 md:gap-0">
                  <span className="text-center font-open-sans text-base font-bold !leading-3 text-secondary md:text-left md:text-lg 2xl:text-xl">
                     System features
                  </span>
                  <h3 className="text-center font-outfit text-4xl font-bold !leading-[1.35] md:text-left md:text-5.5xl 2xl:text-6xl">
                     Powerful features
                  </h3>
               </div>
               <span className="text-center font-open-sans text-base md:text-left md:text-lg">
                  Here are some of the main features of our system:
               </span>
            </div>
            <div className="grid w-full grid-cols-2 grid-rows-2 gap-10 gap-x-5 md:w-[88%]">
               {FEATURE_PANELS.map((feature, i) => (
                  <FeaturePanel key={i} {...feature} />
               ))}
            </div>
         </div>
      </div>
   );
}

interface AboutCardProps {
   title: string;
   description: string;
   icon: string;
   iconClass?: string;
}

function FeaturePanel(props: AboutCardProps) {
   return (
      <div className="flex w-full flex-col gap-3">
         <img
            src={props.icon}
            alt="icon"
            className={props.iconClass ?? "mx-auto h-9 w-9 md:m-0"}
         />
         <h4 className="text-center font-outfit text-base font-bold md:text-left md:text-xl 2xl:text-3xl">
            {props.title}
         </h4>
         <p className="text-center font-open-sans text-xs md:text-left 2xl:text-base">
            {props.description}
         </p>
      </div>
   );
}
