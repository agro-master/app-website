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
      iconClass: "h-9 w-12",
   },
];

export default function Features() {
   return (
      <div
         id="features"
         className="flex min-h-[40vh] min-w-full flex-col justify-center px-8 py-24 pb-36 2xl:min-h-[70vh]"
      >
         <div className="relative">
            <div className="absolute -top-8 right-[-20rem] -z-10">
               <img src={sideImage} className="mx-10 max-w-xl 2xl:mx-5" />
               <span className="absolute left-0 top-0 -z-20 h-[35rem] w-[35rem] rounded-[100%] bg-[#89BC66] 2xl:top-0 2xl:h-[40rem] 2xl:w-[40rem]"></span>
            </div>
         </div>
         <div className="flex h-full w-[65%] flex-col gap-10 2xl:mx-32">
            <div className="flex flex-col gap-4">
               <div className="flex flex-col gap-0">
                  <span className="font-open-sans text-lg font-bold !leading-3 text-secondary">
                     System features
                  </span>
                  <h3 className="font-outfit md:text-5.5xl text-2xl font-bold !leading-[1.35]">
                     Powerful features
                  </h3>
               </div>
               <span className="font-open-sans text-lg">
                  Here are some of the main features of our system:
               </span>
            </div>
            <div className="grid w-[88%] grid-cols-2 grid-rows-2 gap-10 gap-x-5">
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
            className={props.iconClass ?? "h-9 w-9"}
         />
         <h4 className="font-outfit text-xl font-bold 2xl:text-2xl">
            {props.title}
         </h4>
         <p className="font-open-sans text-xs 2xl:text-base">
            {props.description}
         </p>
      </div>
   );
}
