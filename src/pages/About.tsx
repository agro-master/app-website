import monitoring from "../assets/monitoring.svg";
import costEfficiency from "../assets/cost.svg";
import easyToUse from "../assets/easy.svg";
import scalableSolutions from "../assets/scalable.svg";

const ABOUT_CARDS: AboutCardProps[] = [
   {
      title: "Comprehensive Monitoring",
      description:
         "Keep an eye on all aspects of your crops' health and growth with real-time data and insights.",
      icon: monitoring,
   },
   {
      title: "Cost Efficiency",
      description:
         "Reduce waste and optimize resource usage, saving you time and money.",
      icon: costEfficiency,
   },
   {
      title: "easy to use",
      description:
         "Our user-friendly interface makes it simple for farmers of all tech levels to navigate and utilize the app.",
      icon: easyToUse,
   },
   {
      title: "Scalable Solutions",
      description:
         "Whether you're managing a small farm or a large agricultural enterprise, AgroMaster scales with your needs.",
      icon: scalableSolutions,
   },
];

export default function About() {
   return (
      <div id="our-solution" className="relative flex flex-col gap-16 py-10">
         <div className="m-auto flex w-8/12 flex-col gap-5 text-center">
            <h3 className="font-outfit text-5.5xl font-bold">
               About AgroMaster
            </h3>
            <div className="font-open-sans text-xl font-normal">
               Our app provides a complete and efficient automation of the
               agricultural cycle, allowing users to obtain valuable insights
               about their crops through a single application. You can monitor
               and manage every aspect of your farm from anywhere, improving
               productivity and sustainability.
            </div>
         </div>
         <div className="m-auto grid w-[88%] grid-cols-2 grid-rows-2 gap-10 gap-x-20 2xl:w-[80%]">
            {ABOUT_CARDS.map((card, i) => (
               <AboutCard key={i} {...card} />
            ))}
         </div>

         <span className="absolute -right-36 top-28 -z-20 h-[18rem] w-[18rem] rounded-[100%] bg-primary 2xl:-right-[20rem] 2xl:top-0 2xl:h-[23rem] 2xl:w-[23rem]"></span>
         <span className="absolute -left-52 top-80 -z-20 h-[23rem] w-[23rem] rounded-[100%] bg-secondary 2xl:-left-[24rem] 2xl:top-72 2xl:h-[27rem] 2xl:w-[27rem]"></span>
      </div>
   );
}

interface AboutCardProps {
   title: string;
   description: string;
   icon: string;
   iconClass?: string;
}

function AboutCard(props: AboutCardProps) {
   return (
      <div className="shadow-outline hover:shadow-outline-lg relative flex w-full rounded-2xl bg-white py-5 pl-12 pr-3">
         <div className="absolute -left-9 top-1/4 w-fit rounded-full bg-primary p-4">
            <img
               src={props.icon}
               alt="icon"
               className={props.iconClass ?? "h-9 w-9"}
            />
         </div>
         <div className="flex flex-col justify-center gap-3">
            <h4 className="font-outfit text-xl font-bold uppercase">
               {props.title}
            </h4>
            <p className="font-open-sans text-xs md:text-sm 2xl:text-base">
               {props.description}
            </p>
         </div>
      </div>
   );
}
