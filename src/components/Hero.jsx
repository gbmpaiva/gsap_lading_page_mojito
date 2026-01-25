import { useGSAP } from "@gsap/react";
import React from "react";
import SplitText from "gsap/SplitText";
import gsap from "gsap";



const Hero = () => {
    useGSAP(()=> {
        const heroSplit = new SplitText('.title', {type: 'chars, words'});

        const paragraphSplit = new SplitText('.subtitle', {type: 'lines'});

        heroSplit.chars.forEach((char)=> char.classList.add('text-gradient'));

        gsap.from(heroSplit.chars, {
            yPercent: -1000,
            duration: 1.5,
            ease: 'expo.out',
            stagger: 0.05
        });
        gsap.from(paragraphSplit.lines, {
            opacity: 0,
            xPercent: -1000,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06,
            delay: 0.6
        });

        gsap.timeline({
            scrollTrigger: {
                trigger :'#hero',
                start: 'top 30%',
                end : 'top 5%',
                scrub: true,
            }
        })
        .to('.right-leaf', {y:200, }, 0)
        .to('.left-leaf', {y:200, }, 0)
    }, []); 

  return (
    <section id="hero" className="noisy">
    <h1 className="title">MOJITO</h1>

    <img 
    src="/images/hero-left-leaf.png"
    alt="left-leaf"
    className="left-leaf"
    st
    ></img>

     <img 
    src="/images/hero-right-leaf.png"
    alt="right-leaf"
    className="right-leaf"
    ></img>

    <div className="body">
 <div className="content">
			<div className="space-y-5 hidden md:block">
			 <p>Refrescante. Classico. Marcante.</p>
			 <p className="subtitle">
				Sinta o espírito <br /> do Verão
			 </p>
			</div>
			
			<div className="view-cocktails">
			 <p className="subtitle">
				Cada drink é uma experiência.
Criados com ingredientes premium, técnicas refinadas e receitas atemporais, nossos coquetéis combinam criatividade e flair para despertar todos os seus sentidos.
			 </p>
			 <a href="#cocktails">Veja Mais</a>
			</div>
		 </div>
		</div>
	 </section>
  )
}

export default Hero;