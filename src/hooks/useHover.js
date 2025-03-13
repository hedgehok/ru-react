import { useState, useRef, useEffect } from 'react';

export function useHover() {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;

    if (node) {
      const handleMouseOver = () => setHovered(true);
      const handleMouseOut = () => setHovered(false);

      node.addEventListener('mouseover', handleMouseOver);
      node.addEventListener('mouseout', handleMouseOut);

      return () => {
        node.removeEventListener('mouseover', handleMouseOver);
        node.removeEventListener('mouseout', handleMouseOut);
      };
    }
  }, []);

  return { hovered, ref };
}