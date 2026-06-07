import { useEffect, useRef } from "react";


 interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    opacity: number;
  }


export const useDynamicBackground = () => {
    
    const canvasRef = useRef<HTMLCanvasElement>(null);
      const mouseRef = useRef({ x: 0, y: 0 });
      const particlesRef = useRef<Particle[]>([]);
    
      useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
    
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
    
        const resizeCanvas = () => {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
          initParticles();
        };
    
        const initParticles = () => {
          particlesRef.current = Array.from({ length: 50 }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            radius: Math.random() * 2 + 0.5,
            opacity: Math.random() * 0.5 + 0.2,
          }));
        };
    
        const handleMouseMove = (e: MouseEvent) => {
          mouseRef.current = { x: e.clientX, y: e.clientY };
        };
    
        const animate = () => {
          
          const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
          gradient.addColorStop(0, '#0f0f1e');
          gradient.addColorStop(0.5, '#1a1a2e');
          gradient.addColorStop(1, '#0f0f1e');
          ctx.fillStyle = gradient;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
    
          const glowGradient = ctx.createRadialGradient(
            mouseRef.current.x,
            mouseRef.current.y,
            0,
            mouseRef.current.x,
            mouseRef.current.y,
            300
          );
          glowGradient.addColorStop(0, 'rgba(99, 102, 241, 0.2)');
          glowGradient.addColorStop(1, 'rgba(99, 102, 241, 0)');
          ctx.fillStyle = glowGradient;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
    
          particlesRef.current.forEach((particle) => {
            particle.x += particle.vx;
            particle.y += particle.vy;
    
            if (particle.x < 0) particle.x = canvas.width;
            if (particle.x > canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = canvas.height;
            if (particle.y > canvas.height) particle.y = 0;
    
            const dx = mouseRef.current.x - particle.x;
            const dy = mouseRef.current.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
    
            if (distance < 200) {
              particle.vx += (dx / distance) * 0.01;
              particle.vy += (dy / distance) * 0.01;
            }
    
            particle.vx *= 0.99;
            particle.vy *= 0.99;
    
            ctx.fillStyle = `rgba(99, 102, 241, ${particle.opacity})`;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            ctx.fill();
          });
    
          requestAnimationFrame(animate);
        };
    
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', resizeCanvas);
    
        resizeCanvas();
        animate();
    
        return () => {
          window.removeEventListener('mousemove', handleMouseMove);
          window.removeEventListener('resize', resizeCanvas);
        };
      }, []);
    

  return {
    canvasRef
  }
}
