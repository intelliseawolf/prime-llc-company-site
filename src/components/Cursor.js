import React from "react";
import useMousePosition from "../hooks/useMousePostion";

const Cursor = () => {
  const { clientX, clientY } = useMousePosition();
  
  return (
    <div 
      style={{ 
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        pointerEvents: "none"
      }}
    >
      <svg
        width={10}
        height={10}
        viewBox="0 0 10 10"
        style={{
          position: "absolute",
          left: clientX,
          top: clientY,
          transform: "translate(-50%, -50%)",
        }}
      >
        <circle
          cx="5"
          cy="5"
          r="5"
          fill = "#FB0E76"
        />
      </svg>
    </div>
  );
};

export default Cursor;
