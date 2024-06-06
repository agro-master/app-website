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
      <div
         id="our-solution"
         className="relative z-30 flex flex-col gap-20 bg-base-100 py-4 md:gap-16 md:py-10"
      >
         <div className="m-auto flex w-10/12 flex-col gap-7 md:gap-5 text-center md:w-8/12">
            <h3 className="font-outfit text-4xl font-bold">About AgroMaster</h3>
            <div className="font-open-sans text-base font-normal md:text-xl">
               Our app provides a complete and efficient automation of the
               agricultural cycle, allowing users to obtain valuable insights
               about their crops through a single application. You can monitor
               and manage every aspect of your farm from anywhere, improving
               productivity and sustainability.
            </div>
         </div>
         <div className="m-auto grid w-11/12 grid-cols-1 grid-rows-4 gap-10 gap-x-20 gap-y-20 md:w-[88%] md:grid-cols-2 md:grid-rows-2 md:gap-y-0 2xl:w-[80%]">
            {ABOUT_CARDS.map((card, i) => (
               <AboutCard key={i} {...card} />
            ))}
         </div>

         <span className="invisible absolute -right-36 top-28 z-20 h-[18rem] w-[18rem] rounded-[100%] bg-primary md:visible 2xl:-right-[20rem] 2xl:top-0 2xl:h-[23rem] 2xl:w-[23rem]"></span>
         <span className="invisible absolute -left-52 top-80 z-20 h-[23rem] w-[23rem] rounded-[100%] bg-secondary md:visible 2xl:-left-[24rem] 2xl:top-72 2xl:h-[27rem] 2xl:w-[27rem]"></span>
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
      <div className="relative z-30 flex w-full rounded-2xl bg-white px-8 py-5 pt-9 shadow-outline hover:shadow-outline-lg md:pl-12 md:pr-3 md:pt-8">
         <div className="absolute -left-[-38%] top-[-25%] w-fit rounded-full bg-primary p-4 md:-left-9 md:top-1/4">
            <img
               src={props.icon}
               alt="icon"
               className={props.iconClass ?? "h-9 w-9"}
            />
         </div>
         <div className="flex flex-col justify-center gap-2 md:gap-3">
            <h4 className="text-center font-outfit text-lg font-bold uppercase md:text-left md:text-xl">
               {props.title}
            </h4>
            <p className="text-center font-open-sans text-xs md:text-left md:text-sm 2xl:text-base">
               {props.description}
            </p>
         </div>
      </div>
   );
}
