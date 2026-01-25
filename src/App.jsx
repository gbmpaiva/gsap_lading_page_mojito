import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";

gsap.registerPlugin(ScrollTrigger,SplitText);


const App = () => {
    return (
        <main>
            <Navbar></Navbar>
            <Hero></Hero>
            <div className="h-dvh bg-black"></div>
        </main>


    )
}
export default App