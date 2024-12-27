'use client';

import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

// eslint-disable-next-line react/prop-types
export function GaugeChart({ value, label }) {
  const svgRef = useRef(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const width = 200;
    const height = 120;
    const radius = Math.min(width, height) / 1.5;

    // Clear previous content
    d3.select(svgRef.current).selectAll('*').remove();

    const svg = d3
      .select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2},${height - 10})`);

    // Create arc generator
    const arc = d3
      .arc()
      .innerRadius(radius - 20)
      .outerRadius(radius)
      .startAngle(-Math.PI / 2)
      .endAngle(Math.PI / 2);

    // Background arc
    svg
      .append('path')
      .attr('class', 'background')
      .attr('d', arc())
      .style('fill', '#f1f5f9');

    // Foreground arc
    const progressArc = d3
      .arc()
      .innerRadius(radius - 20)
      .outerRadius(radius)
      .startAngle(-Math.PI / 2)
      .endAngle((value / 100) * Math.PI - Math.PI / 2);

    svg
      .append('path')
      .attr('class', 'progress')
      .attr('d', progressArc())
      .style('fill', '#ff6b00');

    // Add value text
    svg
      .append('text')
      .attr('class', 'value')
      .attr('text-anchor', 'middle')
      .attr('dy', '-1em')
      .style('font-size', '24px')
      .style('font-weight', 'bold')
      .text(`${value}%`);
  }, [value]);

  return (
    <div className="flex flex-col items-center">
      <svg ref={svgRef} />
      <span className="text-sm text-muted-foreground mt-2">{label}</span>
    </div>
  );
}
