"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export function Background() {
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Generate noise
    const imageData = ctx.createImageData(canvas.width, canvas.height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      const value = Math.random() * 255;
      data[i] = value;
      data[i + 1] = value;
      data[i + 2] = value;
      data[i + 3] = 25; // Noise opacity
    }

    ctx.putImageData(imageData, 0, 0);

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const newImageData = ctx.createImageData(canvas.width, canvas.height);
      const newData = newImageData.data;

      for (let i = 0; i < newData.length; i += 4) {
        const value = Math.random() * 255;
        newData[i] = value;
        newData[i + 1] = value;
        newData[i + 2] = value;
        newData[i + 3] = 25;
      }

      ctx.putImageData(newImageData, 0, 0);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden"
      style={{ zIndex: -10 }}
    >
      {/* Base black background */}
      <div className="absolute inset-0 bg-[oklch(0.13_0.02_260)]" />

      {/* Subtle gradient overlays */}
      {/* Top-left: Subtle purple */}
      <div
        className="absolute top-0 left-0 w-[40%] h-[40%] opacity-10"
        style={{
          background:
            "radial-gradient(circle at top left, oklch(0.6 0.15 280) 0%, transparent 60%)",
        }}
      />

      {/* Top-right: Subtle blue */}
      <div
        className="absolute top-0 right-0 w-[40%] h-[40%] opacity-10"
        style={{
          background:
            "radial-gradient(circle at top right, oklch(0.6 0.15 200) 0%, transparent 60%)",
        }}
      />

      {/* Bottom-right: Subtle purple */}
      <div
        className="absolute bottom-0 right-0 w-[40%] h-[40%] opacity-8"
        style={{
          background:
            "radial-gradient(circle at bottom right, oklch(0.5 0.12 290) 0%, transparent 60%)",
        }}
      />

      {/* Canvas-based Noise Texture */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-35 mix-blend-overlay pointer-events-none"
        style={{
          imageRendering: "pixelated",
          transform: "translateZ(0)",
        }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(255,255,255,0.03) 1px, rgba(255,255,255,0.03) 2px),
            repeating-linear-gradient(90deg, transparent, transparent 1px, rgba(255,255,255,0.03) 1px, rgba(255,255,255,0.03) 2px)
          `,
          backgroundSize: "50px 50px",
          mixBlendMode: "overlay",
        }}
      />
    </div>
  );
}
