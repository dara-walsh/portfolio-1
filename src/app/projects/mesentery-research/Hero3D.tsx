"use client";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";

const ModelViewer = dynamic(() => import("@/components/ModelViewer"), { ssr: false });

export default function Hero3D() {
  return (
    <div className="w-full flex justify-center items-center min-h-[400px] bg-gray-100 rounded-xl">
      <Suspense fallback={<div>Loading 3D Model...</div>}>
        <ModelViewer src="/images/ai-medical-imaging/DS1.glb" />
      </Suspense>
    </div>
  );
}
