"use client";

import { useEffect, useRef } from "react";

interface CelebrationEffectProps {
  trigger: boolean;
  colors?: string[];
  intensity?: "low" | "medium" | "high";
}

export function CelebrationEffect({
  trigger,
  colors = ["#a855f7", "#10b981"], // Purple and emerald
  intensity = "medium",
}: CelebrationEffectProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!trigger) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return; // Skip animation if user prefers reduced motion
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clean up any existing animation first
    if (animationIdRef.current) {
      cancelAnimationFrame(animationIdRef.current);
      animationIdRef.current = null;
    }

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Store canvas reference for Particle class
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    // Confetti particle class
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      color: string;
      size: number;
      rotation: number;
      rotationSpeed: number;
      life: number;
      maxLife: number;

      constructor() {
        this.x = canvasWidth / 2;
        this.y = canvasHeight / 2;
        this.vx =
          (Math.random() - 0.5) *
          (intensity === "high" ? 12 : intensity === "medium" ? 8 : 5);
        this.vy =
          (Math.random() - 0.5) *
            (intensity === "high" ? 12 : intensity === "medium" ? 8 : 5) -
          2;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.size = Math.random() * 4 + 2;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.2;
        this.life = 0;
        this.maxLife =
          intensity === "high" ? 200 : intensity === "medium" ? 150 : 100;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vy += 0.1; // Gravity
        this.vx *= 0.98; // Air resistance
        this.rotation += this.rotationSpeed;
        this.life++;
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = 1 - this.life / this.maxLife;
        ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
        ctx.restore();
      }

      isDead() {
        return this.life >= this.maxLife || this.y > canvasHeight + 50;
      }
    }

    const particles: Particle[] = [];
    const particleCount =
      intensity === "high" ? 150 : intensity === "medium" ? 100 : 50;

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    function animate() {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];
        particle.update();
        particle.draw();

        if (particle.isDead()) {
          particles.splice(i, 1);
        }
      }

      if (particles.length > 0) {
        animationIdRef.current = requestAnimationFrame(animate);
      } else {
        // Clean up when animation completes
        if (ctx && canvas) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
        animationIdRef.current = null;
      }
    }

    animate();

    // Cleanup on unmount or trigger change
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
        animationIdRef.current = null;
      }
      if (ctx && canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };
  }, [trigger, colors, intensity]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ position: "fixed", top: 0, left: 0 }}
    />
  );
}
