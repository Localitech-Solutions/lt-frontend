'use client';

import { createContext, useRef, useState } from "react";
import clsx from 'clsx';

const MouseEnterContext = createContext<[boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined>(undefined);

export function ParallaxTile({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const [isMouseEntered, setIsMouseEntered] = useState(false);

    const handleMouseEnter = () => {
        setIsMouseEntered(true);
        if (!ref.current) return;
    }

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const x = (e.clientX - left - width / 2) / 15;
        const y = (e.clientY - top - height / 2) / 15;
        ref.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
        ref.current.style.transitionDuration = '0s';
    };

    const handleMouseLeave = () => {
        if (!ref.current) return;
        setIsMouseEntered(false);
        ref.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
        ref.current.style.transitionDuration = '0.5s';
    }

    return (
        <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
            <div
                className="h-full w-full transition duration-0 ease-in-out"
                onMouseEnter={handleMouseEnter}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                <div
                    className="h-full w-full"
                    ref={ref}
                    style={{
                        transformStyle: "preserve-3d"
                    }}
                >
                    {children}
                </div>
            </div>
        </MouseEnterContext.Provider>
    )
}