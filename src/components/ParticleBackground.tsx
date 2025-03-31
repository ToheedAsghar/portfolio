
import React, { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    
    // Set canvas dimensions
    canvas.width = width;
    canvas.height = height;
    
    // Particle properties
    const particleCount = 100;
    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      color: string;
      speedX: number;
      speedY: number;
      directionX: number;
      directionY: number;
    }> = [];
    
    // Colors for particles
    const colors = ['#00A3FF', '#0066FF', '#6E00FF', '#2E59FF'];
    
    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      const radius = Math.random() * 3 + 1;
      
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: radius,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedX: Math.random() * 0.5,
        speedY: Math.random() * 0.5,
        directionX: Math.random() > 0.5 ? 1 : -1,
        directionY: Math.random() > 0.5 ? 1 : -1,
      });
    }
    
    // Draw particles
    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.globalAlpha = 0.7;
      
      particles.forEach(particle => {
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(
          particle.x, 
          particle.y, 
          0, 
          particle.x, 
          particle.y, 
          particle.radius
        );
        
        gradient.addColorStop(0, particle.color);
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();
      });
    };
    
    // Update particle positions
    const update = () => {
      particles.forEach(particle => {
        particle.x += particle.speedX * particle.directionX;
        particle.y += particle.speedY * particle.directionY;
        
        // Bounce off walls
        if (particle.x < 0 || particle.x > width) {
          particle.directionX *= -1;
        }
        
        if (particle.y < 0 || particle.y > height) {
          particle.directionY *= -1;
        }
      });
    };
    
    // Animation loop
    const animate = () => {
      draw();
      update();
      requestAnimationFrame(animate);
    };
    
    animate();
    
    // Handle window resize
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} id="particle-canvas" />;
};

export default ParticleBackground;
