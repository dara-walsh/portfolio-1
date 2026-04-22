"use client";
import dynamic from "next/dynamic";
import React from "react";

const Hero3D = dynamic(() => import("./Hero3D"), { ssr: false });

export default function Hero3DClient() {
  return <Hero3D />;
}