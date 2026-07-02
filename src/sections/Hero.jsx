import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button"
import HeroExperience from "../components/HeroModels/HeroExperience"
import { words } from "../constants"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Hero = () => {
    useGSAP(() => {
        gsap.fromTo('.hero-text h1', {y: 50, opacity: 0}, {y: 0, opacity: 1, duration: 1.5, stagger: 1, ease: 'power2.inOut'});
    })
    
    return (
        <section id="hero" className="relative overflow-hidden min-h-screen">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <video 
                    autoPlay 
                    loop 
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/videos/Pake ini.mp4" type="video/mp4" />
                    <img src="/images/bg.png" alt="background" />
                </video>
                
                {/* Edge Blur Dark - Vignette Effect */}
                <div className="absolute inset-0 pointer-events-none"
                     style={{
                         background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.70) 100%)'
                     }}>
                </div>
                
                {/* Overlay gelap agar teks terbaca */}
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

        <div className="hero-layout relative z-10">
            {/*left: Hero content*/}
            <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
                <div className="flex flex-col gap-7">
                    <div className="hero-text">
                        <h1>Wujudkan 
                            <span className="slide">
                                <span className="wrapper">
                                    {words.map((word) => (
                                        <span key={word.text} className="flex items-center md:gap-4 gap-1 pb-2">
                                            <img src={word.imgPath} alt={word.text} className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-fuchsia-300" />
                                            <span>{word.text}</span>
                                        </span>
                                    ))}
                                </span>
                            </span>
                        </h1>
                        <h1>Dengan Kami</h1>
                        <h1>Metamor Interior</h1>
                    </div>
                    <p className="text-white-50 md:text-lx relative z-10 pointer-events-none">Kami tidak sekadar menjual lampu atau mendesain ruangan, kami mampu mewujudkan visual yang lahir dari mimpi terbaik Anda</p>
                    <Button 
                        className="md:w-80 md:h-16 w-60 h-12"
                        id="button"
                        text="Tentang Kami"
                    />
                </div>
            </header>
            {/*right: Hero content*/}
            <figure>
                <div className="hero-3d-layout">
                    <HeroExperience/>
                </div>
            </figure>
        </div>
    </section>
  )
}

export default Hero