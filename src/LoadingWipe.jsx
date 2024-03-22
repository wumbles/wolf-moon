import { useState, useEffect } from "react";

function LoadingWipe() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHidden(true);
    }, 2000);
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        zIndex: 10,
        top: 0,
        left: 0,
        display: "grid",
        placeItems: "center",
        width: "100vw",
        height: "100vh",
        backgroundColor: "#1a1a1a",
        transform: "translateX(0%)",
        transition: "transform ease .3s",
        ...(hidden ? { transform: "translateX(100%)" } : {}),
      }}
    >
      <h1>🐺</h1>
    </div>
  );
}

export default LoadingWipe;
