"use client";
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import couple from '../../public/assets/images/couple.jpg';

const Page2 = () => {
    const homeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (homeRef.current) {
                const element = homeRef.current;
                const scrollPosition = window.scrollY + window.innerHeight;
                const elementPosition = element.offsetTop + element.clientHeight / 2;

                if (scrollPosition > elementPosition) {
                    element.classList.add('slide-in');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            ref={homeRef}
            className="bg-black text-white min-h-screen p-4 md:p-8 flex justify-center items-center overflow-hidden"
        >
            <div className="max-w-6xl mx-auto w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6 text-center md:text-left">
                        <h2 className="text-amber-500 text-xl">At Royal Crown</h2>
                        <h1 className="text-4xl md:text-5xl font-bold">We will find a Perfect Home for you</h1>
                        <p className="text-amber-500">One of India's Leading Real Estate Companies.</p>
                        <p className="text-sm md:text-base">
                            We understand the dream of owning a home, which is why our efforts are focused on providing budget-friendly homes. Quality construction is the foundation of our work. A simple and minimalistic process is our motto. With years of experience, we have turned dreams into reality by offering affordable homes that not only boast superior quality but also provide a holistic living experience.
                        </p>
                        <button className="bg-amber-500 text-black px-4 py-2 rounded">Know More</button>
                    </div>
                    <div className="relative h-64 md:h-96">
                        <Image
                            src='/assets/images/img.jpg'
                            alt="Couple relaxing at home"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 text-center">
                    <div>
                        <h3 className="text-3xl md:text-4xl font-bold text-amber-500">29+</h3>
                        <p>Years of Experience</p>
                    </div>
                    <div>
                        <h3 className="text-3xl md:text-4xl font-bold text-amber-500">55+</h3>
                        <p>Successful Projects</p>
                    </div>
                    <div>
                        <h3 className="text-3xl md:text-4xl font-bold text-amber-500">6M</h3>
                        <p>Sq.Ft. Constructions</p>
                    </div>
                    <div>
                        <h3 className="text-3xl md:text-4xl font-bold text-amber-500">8k+</h3>
                        <p>Happy Homes</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page2;
