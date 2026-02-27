"use client"

import { useTheme } from '@mui/material/styles';

interface DSALogoProps {
  size?: number;
}

export default function DSALogo({ size = 40 }: DSALogoProps) {
  const theme = useTheme();
  const p = theme.palette.primary.main;
  const light = theme.palette.primary.light;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Edges — drawn first so nodes sit on top */}
      {/* root → left child */}
      <line x1="20" y1="10" x2="9" y2="27" stroke={light} strokeWidth="1.5" strokeLinecap="round" />
      {/* root → right child */}
      <line x1="20" y1="10" x2="31" y2="27" stroke={light} strokeWidth="1.5" strokeLinecap="round" />
      {/* left child → right child (cross edge, suggests graph/algo traversal) */}
      <line x1="9" y1="27" x2="31" y2="27" stroke={light} strokeWidth="1" strokeLinecap="round" strokeDasharray="2 2" />

      {/* Root node */}
      <circle cx="20" cy="10" r="6" fill={p} />
      {/* Left leaf */}
      <circle cx="9" cy="28" r="5" fill={p} fillOpacity="0.75" />
      {/* Right leaf */}
      <circle cx="31" cy="28" r="5" fill={p} fillOpacity="0.75" />

      {/* Small highlight dot inside root to suggest "active/selected node" */}
      <circle cx="20" cy="10" r="2.5" fill="white" fillOpacity="0.55" />
    </svg>
  );
}
