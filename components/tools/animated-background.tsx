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
      blur-[50px]
      opacity-90
      will-change-transform
      ${className}
    `}
        style={{
            background: gradient,
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
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            {/* Blob principal (primary) */}
            <Blob
                className="top-[-20%] left-[-10%] h-[500px] w-[500px]"
                gradient="radial-gradient(circle at center, var(--primary) 0%, transparent 300%)"
                animation={{
                    x: [0, 60, -40, 0],
                    y: [0, -30, 20, 0],
                    scale: [1, 1.1, 0.95, 1],
                }}
                duration={26}
            />

            {/* Blob acento (accent) */}
            <Blob
                className="top-[10%] right-[-15%] h-[600px] w-[600px]"
                gradient="radial-gradient(circle at center, var(--accent) 0%, transparent 300%)"
                animation={{
                    x: [0, -50, 30, 0],
                    y: [0, 40, -20, 0],
                    scale: [1, 1.05, 1, 0.98],
                }}
                duration={30}
            />

            {/* Blob secundario (secondary) */}
            <Blob
                className="bottom-[-25%] left-[20%] h-[700px] w-[700px]"
                gradient="radial-gradient(circle at center, var(--secondary) 0%, transparent 300%)"
                animation={{
                    x: [0, 40, -60, 0],
                    y: [0, -20, 40, 0],
                    scale: [1, 0.95, 1.1, 1],
                }}
                duration={34}
            />
        </div>
    );
}
