import { useRef } from 'react';
import AnimatedCounter from '../components/AnimatedCounter'
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    useGSAP(() => {
        // Animation for the main section
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
        );

        // Animations for each app showcase
        const cards = [project1Ref.current, project2Ref.current, project3Ref.current];

        cards.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    y: 50,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom-=100",
                    },
                }
            );
        });
    }, []);

    return (
        <div id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                {/* AnimatedCounter di paling atas */}
                <div className="w-full flex justify-center">
                    <AnimatedCounter />
                </div>

                {/* Layout konten di bawahnya */}
                <div className="showcaselayout">
                    {/* Left */}
                    <div className="first-project-wrapper" ref={project1Ref}>
                        <div className="image-wrapper">
                            <img src="/images/proyek1.png" alt="Ryde" />
                        </div>
                        <div className="text-content">
                            <h2>Main Project</h2>
                            <p className="text-white-50 md:text-xl"
                            >Deskripsi proyek</p>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={project2Ref}>
                            <div className="image-wrapper bg-amber-200">
                                <img src="/images/proyek1.png" alt="Ryde" />
                            </div>
                            <div className="text-content">
                                <h2>Mini Project</h2>
                            </div>

                            <div className="project" ref={project3Ref}>
                                <div className="image-wrapper bg-amber-200">
                                    <img src="/images/proyek1.png" alt="Ryde" />
                                </div>
                                <div className="text-content">
                                    <h2>Mini Project</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Showcase