"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { SendIcon } from "./send-icon";
import { ReceiveIcon } from "./receive-icon";
import {
  staggerItem,
  glass3DVariants,
  glass3DTransition,
  glowPulseVariants,
} from "@/lib/motion";
import { getGlowClasses, get3DTransformStyles } from "@/lib/glass-effects";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface ActionButtonProps {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
  glowColor: "primary" | "emerald";
  delay?: number;
}

function ActionButton({
  href,
  icon,
  title,
  description,
  gradient,
  glowColor,
  delay = 0,
}: ActionButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Mouse position tracking for 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 });

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["7.5deg", "-7.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-7.5deg", "7.5deg"]
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      variants={staggerItem}
      initial="hidden"
      animate="visible"
      transition={{ delay }}
      className="h-full"
    >
      <Link href={href} className="block h-full">
        <motion.div
          className={cn(
            "relative h-full p-6 rounded-2xl overflow-hidden group cursor-pointer",
            "will-change-transform"
          )}
          style={{
            ...get3DTransformStyles(),
            rotateX,
            rotateY,
          }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          variants={glass3DVariants}
          initial="rest"
          whileHover="hover"
          transition={glass3DTransition}
        >
          {/* Animated gradient background */}
          <motion.div
            className={cn("absolute inset-0", gradient, "opacity-60")}
            animate={
              isHovered
                ? {
                    backgroundPosition: ["0% 0%", "100% 100%"],
                  }
                : {
                    backgroundPosition: "0% 0%",
                  }
            }
            transition={{
              duration: 3,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              backgroundSize: "200% 200%",
            }}
          />

          {/* Base glass layer - Heavy blur */}
          <div
            className={cn(
              "absolute inset-0",
              "backdrop-blur-md",
              "bg-white/5",
              "border border-white/20"
            )}
          />

          {/* Middle glass layer - Medium blur */}
          <div
            className={cn(
              "absolute inset-0",
              "backdrop-blur-sm",
              "bg-white/10",
              "opacity-50"
            )}
          />

          {/* Top highlight layer - Light blur */}
          <div
            className={cn(
              "absolute inset-0",
              "backdrop-blur-xs",
              "bg-gradient-to-br from-white/15 via-transparent to-transparent"
            )}
          />

          {/* Glow effect */}
          <motion.div
            className={cn(
              "absolute -inset-1 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",
              glowColor === "primary" ? "bg-primary/30" : "bg-emerald-500/30"
            )}
            variants={glowPulseVariants}
            initial="rest"
            animate={isHovered ? "hover" : "rest"}
          />

          {/* Content container */}
          <div className="relative z-10 flex flex-col h-full justify-between">
            {/* Icon - Centered */}
            <motion.div
              className="flex-1 flex items-center justify-center"
              animate={
                isHovered
                  ? {
                      scale: 1.1,
                      rotateZ: glowColor === "primary" ? 5 : -5,
                    }
                  : {
                      scale: 1,
                      rotateZ: 0,
                    }
              }
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
            >
              {icon}
            </motion.div>

            {/* Text - Minimal at bottom */}
            <div className="mt-auto">
              <h3
                className={cn(
                  "text-base font-semibold transition-colors duration-200 text-center",
                  isHovered
                    ? glowColor === "primary"
                      ? "text-primary"
                      : "text-emerald-400"
                    : "text-foreground"
                )}
              >
                {title}
              </h3>
            </div>
          </div>

          {/* Floating particles */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className={cn(
                "absolute w-1 h-1 rounded-full",
                glowColor === "primary" ? "bg-primary/30" : "bg-emerald-400/30"
              )}
              style={{
                left: `${10 + i * 15}%`,
                top: `${15 + i * 12}%`,
              }}
              animate={{
                y: [0, -15, 0],
                opacity: [0.3, 0.7, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2 + i * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            />
          ))}

          {/* Shine sweep effect */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100"
            initial={{ x: "-100%" }}
            animate={
              isHovered
                ? {
                    x: "100%",
                  }
                : {
                    x: "-100%",
                  }
            }
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
          >
            <div className="w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </motion.div>

          {/* Depth shadows */}
          <div
            className={cn(
              "absolute inset-0 rounded-2xl",
              "shadow-2xl",
              getGlowClasses(glowColor),
              "opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            )}
          />
        </motion.div>
      </Link>
    </motion.div>
  );
}

export function ActionButtons() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ActionButton
        href="/send"
        icon={<SendIcon size={64} />}
        title="Send"
        description=""
        gradient="bg-gradient-to-br from-primary/20 via-primary/10 to-primary/20"
        glowColor="primary"
        delay={0}
      />
      <ActionButton
        href="/receive"
        icon={<ReceiveIcon size={64} />}
        title="Receive"
        description=""
        gradient="bg-gradient-to-br from-emerald-500/20 via-emerald-500/10 to-emerald-500/20"
        glowColor="emerald"
        delay={0.1}
      />
    </div>
  );
}
