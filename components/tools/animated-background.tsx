"use client";

import { motion } from "framer-motion";

type BlobProps = {
    className?: string;
    gradient?: string;
    animation: {
        x: number[];
        y: number[];
        scale?: number[];
    };
    duration: number;
};

const Blob = ({ className, gradient = "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 100%)", animation, duration }: BlobProps) => (
    <motion.div
        aria-hidden
        className={`
      absolute
      rounded-full
      blur-3xl
      opacity-60
      will-change-transform
      ${className}
    `}
        style={{
            background: gradient,
            mixBlendMode: "screen",
        }}
        animate={animation}
        transition={{
            duration,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "linear",
        }}
    />
);

export default function AnimatedGradientBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden">
           
            {/* Blob lila */}
            <Blob
                className="h-[800px] w-[800px]"
                gradient="radial-gradient(circle at center, hsl(0, 0%, 99%) 0%, transparent 60%)"
                animation={{
                    x: [0, 100, -80, 0],
                    y: [0, -60, 40, 0],
                    scale: [1, 1.15, 0.9, 1],
                }}
                duration={12}
            />

            {/* Blob yellow */}
            <Blob
                className="right-[-20%] top-[-5%] h-[900px] w-[900px]"
                gradient="radial-gradient(circle at center, hsl(73, 36%, 67%) 0%, transparent 60%)"
                animation={{
                    x: [0, -90, 70, 0],
                    y: [0, 70, -40, 0],
                    scale: [1, 1.1, 0.95, 1],
                }}
                duration={30}
            />

            {/* Blob red */}
            <Blob
                className="top-[5%] left-[25%] h-[1000px] w-[1000px]"
                gradient="radial-gradient(circle at center, var(--destructive) 0%, transparent 60%)"
                animation={{
                    x: [0, 80, -100, 0],
                    y: [0, -50, 60, 0],
                    scale: [1, 0.95, 1.15, 1],
                }}
                duration={20}
            />
        </div>
    );
}
