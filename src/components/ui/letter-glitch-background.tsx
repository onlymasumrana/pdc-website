"use client";
import React, { useEffect, useRef } from "react";

interface LetterGlitchBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  glitchColors?: string[];
  glitchSpeed?: number;
  centerVignette?: boolean;
  outerVignette?: boolean;
  smooth?: boolean;
  fontSize?: number;
  charWidth?: number;
  charHeight?: number;
  children?: React.ReactNode;
}

export const LetterGlitchBackground = ({
  glitchColors = ["#2b4539", "#61dca3", "#61b3dc"],
  glitchSpeed = 50,
  centerVignette = false,
  outerVignette = true,
  smooth = true,
  fontSize = 16,
  charWidth = 10,
  charHeight = 20,
  children,
  className = "",
  ...props
}: LetterGlitchBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Character set for matrix effect
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$&*()-_+=/[]{};<>,.";
    
    let width = canvas.width;
    let height = canvas.height;
    
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      width = canvas.width;
      height = canvas.height;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const columns = Math.floor(width / charWidth);
    const drops: number[] = [];

    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * height;
    }

    // Convert hex to RGB
    const hexToRgb = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
          }
        : { r: 0, g: 255, b: 0 };
    };

    const rgbColors = glitchColors.map(hexToRgb);

    const draw = () => {
      // Semi-transparent black background for trail effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Random character
        const char = chars[Math.floor(Math.random() * chars.length)];
        
        // Color interpolation for smooth transitions
        const colorIndex = Math.floor(Math.random() * rgbColors.length);
        const color = rgbColors[colorIndex];
        
        if (smooth) {
          // Add some randomness to color
          const r = Math.max(0, Math.min(255, color.r + (Math.random() - 0.5) * 50));
          const g = Math.max(0, Math.min(255, color.g + (Math.random() - 0.5) * 50));
          const b = Math.max(0, Math.min(255, color.b + (Math.random() - 0.5) * 50));
          ctx.fillStyle = `rgb(${Math.floor(r)}, ${Math.floor(g)}, ${Math.floor(b)})`;
        } else {
          ctx.fillStyle = glitchColors[colorIndex];
        }

        // Draw character
        ctx.fillText(char, i * charWidth, drops[i]);

        // Reset drop to top randomly
        if (drops[i] * charHeight > height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Move drop down
        drops[i] += charHeight;
      }
    };

    const animate = () => {
      draw();
      animationRef.current = setTimeout(() => {
        requestAnimationFrame(animate);
      }, glitchSpeed);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        clearTimeout(animationRef.current);
        animationRef.current = null;
      }
    };
  }, [glitchColors, glitchSpeed, centerVignette, outerVignette, smooth, fontSize, charWidth, charHeight]);

  return (
    <div className={`relative overflow-hidden ${className}`} {...props}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: "#E8F8FF" }}
      />
      {outerVignette && (
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black opacity-60" />
      )}
      {centerVignette && (
        <div className="absolute inset-0 bg-gradient-radial from-black via-transparent to-transparent opacity-40" />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
