"use client";
import React, { useEffect, useRef } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        src?: string;
        alt?: string;
        "auto-rotate"?: boolean | string;
        "camera-controls"?: boolean | string;
        style?: React.CSSProperties;
        "shadow-intensity"?: string;
        "environment-image"?: string;
      }, HTMLElement>;
    }
  }
}

export default function ModelViewer({ src }: { src: string }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    // Load model-viewer script if not already loaded
    if (!document.querySelector('script[src*="model-viewer"]')) {
      const script = document.createElement("script");
      script.type = "module";
      script.src = "https://ajax.googleapis.com/ajax/libs/model-viewer/3.5.0/model-viewer.min.js";
      document.head.appendChild(script);
    }
  }, []);

  useEffect(() => {
    const mv = ref.current as any;
    if (!mv) return;
    const onLoad = () => {
      const center = mv.getBoundingBoxCenter?.();
      if (center) {
        mv.cameraTarget = `${center.x}m ${center.y}m ${center.z}m`;
      }
    };
    mv.addEventListener("load", onLoad);
    return () => mv.removeEventListener("load", onLoad);
  }, []);

  return (
    <model-viewer
      ref={ref as any}
      src={src}
      alt="3D model"
      auto-rotate
      camera-controls
      shadow-intensity="1"
      style={{ width: "100%", height: "400px" }}
    />
  );
}
