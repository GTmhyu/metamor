import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);
    const bgRef1 = useRef(null); // Untuk project2
    const bgRef2 = useRef(null); // Untuk project3

    useGSAP(() => {
        // Animation untuk section
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
        );

        // Animasi untuk cards
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

        // Timeline untuk bgRef1 (project2)
        if (bgRef1.current) {
            const colorTimeline1 = gsap.timeline({
                repeat: -1,
                yoyo: true,
            });

            colorTimeline1
                .to(bgRef1.current, {
                    backgroundColor: '#8b5cf6', // violet
                    duration: 1,
                    ease: "sine.inOut"
                })
                .to(bgRef1.current, {
                    backgroundColor: '#3b82f6', // blue
                    duration: 1,
                    ease: "sine.inOut"
                })
                .to(bgRef1.current, {
                    backgroundColor: '#ec4899', // pink
                    duration: 1,
                    ease: "sine.inOut"
                })
                .to(bgRef1.current, {
                    backgroundColor: '#d946ef', // back to fuchsia
                    duration: 1,
                    ease: "sine.inOut"
                });
        }

        // Timeline untuk bgRef2 (project3) - dengan tempo yang sama
        if (bgRef2.current) {
            const colorTimeline2 = gsap.timeline({
                repeat: -1,
                yoyo: true,
            });

            colorTimeline2
                .to(bgRef2.current, {
                    backgroundColor: '#8b5cf6', // violet
                    duration: 1,
                    ease: "sine.inOut"
                })
                .to(bgRef2.current, {
                    backgroundColor: '#3b82f6', // blue
                    duration: 1,
                    ease: "sine.inOut"
                })
                .to(bgRef2.current, {
                    backgroundColor: '#ec4899', // pink
                    duration: 1,
                    ease: "sine.inOut"
                })
                .to(bgRef2.current, {
                    backgroundColor: '#d946ef', // back to fuchsia
                    duration: 1,
                    ease: "sine.inOut"
                });
        }

    }, []);

    return (
        <div id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    {/* Left */}
                    <div className="first-project-wrapper" ref={project1Ref}>
                        <div className="image-wrapper">
                            <img src="/images/Produk2.png" alt="Ryde" />
                        </div>
                        <div className="text-content">
                            <h2>Project Utama</h2>
                            <p className="text-white-50 md:text-xl">
                                LED Display dengan tema dan nuansa kemerdekaan Republik Indonesia
                            </p>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={project2Ref}>
                            <div
                                className="image-wrapper"
                                ref={bgRef1}
                                style={{ backgroundColor: '#d946ef' }}
                            >
                                <img src="/images/Produk.png" alt="Ryde" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[98%] h-[98%] object-cover" />
                            </div>
                            <div className="text-content">
                                <h2>Pavilion of Lights</h2>
                            </div>
                        </div>

                        <div className="project" ref={project3Ref}>
                            <div
                                className="image-wrapper"
                                ref={bgRef2}
                                style={{ backgroundColor: '#d946ef' }}
                            >
                                <img src="/images/Produk1.png" alt="Ryde" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[98%] h-[98%] object-cover" />
                            </div>
                            <div className="text-content">
                                <h2>Sculpture Park at Night</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Showcase