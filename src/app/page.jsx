 import Hero from "./components/Hero";

import { navItems } from "../../data";


import Grid from "./components/Grid";
import Footer from "./components/Footer";  
import Clients from "./components/Clients";
import Approach from "./components/Approach";
import Experience from "./components/Experience";
import RecentProjects from "./components/RecentProjects";
import  {FloatingNavbar}  from "./components/ui/FloatingNavbar";


export default function Home() {
  return (
    <main className="relative flex justify-center bg-[#000319] items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className=" max-w-7xl w-full ">
   
        <FloatingNavbar navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        {/* <Clients /> */}
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
