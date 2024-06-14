import Navbar from "./Navbar";
import leaveCalender from "../assets/leaveCalender.svg";
import parentalLeave from "../assets/parentalLeave.svg";
import sickLeave from "../assets/sickLeave.svg";
import { PublicNavigation } from "../constants/constant";
export default function LandingPage() {
  return (
    <>  
    <Navbar navigation={PublicNavigation}/>
   <div className=" w-full h-auto mt-20 pl-5 pr-5">
    <div className=" max-w-6xl m-auto flex  flex-col items-center">
    <h1 className="sm:text-6xl text-3xl font-thin tracking-tight text-primary font-serif text-center sm:leading-relaxed leading-normal" > Discover the new age of streamlined employee leave processes</h1>
    <div className=" relative max-w-xl mt-14">
        <img src={leaveCalender}/>
        <img className=" w-1/5 absolute top-0 -left-36 sm:visible invisible" src={parentalLeave}/>
        <img className=" w-1/5 absolute bottom-0 right-0 sm:visible invisible" src={sickLeave}/>
        
    </div>
    </div>
   </div>
   </>
  )
}
