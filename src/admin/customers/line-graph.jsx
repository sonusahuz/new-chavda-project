'use client';

import { useEffect, useRef } from 'react';

export function LineGraph() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = canvas.offsetWidth * window.devicePixelRatio;
    canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    // Sample data points
    const points = [20, 40, 25, 60, 35, 15, 40, 25, 35, 50];

    // Drawing settings
    ctx.strokeStyle = '#FF7452';
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    // Create gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.offsetHeight);
    gradient.addColorStop(0, 'rgba(255, 116, 82, 0.2)');
    gradient.addColorStop(1, 'rgba(255, 116, 82, 0)');

    // Draw line
    ctx.beginPath();
    points.forEach((point, index) => {
      const x = (index / (points.length - 1)) * canvas.offsetWidth;
      const y = canvas.offsetHeight - (point / 60) * canvas.offsetHeight;

      if (index === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    ctx.stroke();

    // Fill area under line
    ctx.lineTo(canvas.offsetWidth, canvas.offsetHeight);
    ctx.lineTo(0, canvas.offsetHeight);
    ctx.fillStyle = gradient;
    ctx.fill();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="h-40 w-full"
      style={{ width: '100%', height: '160px' }}
    />
  );
}
