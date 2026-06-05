"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  hue: number;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;

    const cvs = canvas!;
    const c = ctx!;

    const resize = () => {
      cvs.width = window.innerWidth;
      cvs.height = window.innerHeight;
    };

    const createParticles = () => {
      const count = Math.min(Math.floor(window.innerWidth * 0.05), 80);
      particlesRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * cvs.width,
        y: Math.random() * cvs.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.5 + 0.1,
        hue: Math.random() * 60 + 240,
      }));
    };

    const connectParticles = () => {
      const particles = particlesRef.current;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            const alpha = (1 - dist / 150) * 0.15;
            c.beginPath();
            c.moveTo(particles[i].x, particles[i].y);
            c.lineTo(particles[j].x, particles[j].y);
            c.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            c.stroke();
          }
        }
      }
    };

    const animate = () => {
      c.clearRect(0, 0, cvs.width, cvs.height);

      const particles = particlesRef.current;

      particles.forEach((p) => {
        const dx = mouseRef.current.x - p.x;
        const dy = mouseRef.current.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 200) {
          const force = (1 - dist / 200) * 0.5;
          p.vx -= (dx / dist) * force * 0.05;
          p.vy -= (dy / dist) * force * 0.05;
        }

        p.vx += (Math.random() - 0.5) * 0.02;
        p.vy += (Math.random() - 0.5) * 0.02;

        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (speed > 1) {
          p.vx = (p.vx / speed) * 1;
          p.vy = (p.vy / speed) * 1;
        }

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = cvs.width;
        if (p.x > cvs.width) p.x = 0;
        if (p.y < 0) p.y = cvs.height;
        if (p.y > cvs.height) p.y = 0;

        c.beginPath();
        c.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        c.fillStyle = `rgba(255, 255, 255, ${p.alpha * 0.6})`;
        c.fill();
      });

      connectParticles();
      animationId = requestAnimationFrame(animate);
    };

    const handleMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    resize();
    createParticles();
    animate();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouse);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
      aria-hidden
    />
  );
}
