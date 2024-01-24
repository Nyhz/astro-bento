import { useState, useEffect } from "react";

export default function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const getCursorPosition = (e) => {
    const grid = document.getElementById("grid-item-1");
    const rect = grid.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  useEffect(() => {
    window.addEventListener("mousemove", getCursorPosition);
    return () => window.removeEventListener("mousemove", getCursorPosition);
  }, []);

  return mousePosition;
}
