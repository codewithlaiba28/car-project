"use client";

import Spline from '@splinetool/react-spline';

export default function CarScene() {
  return (
    <div className="w-full h-full absolute inset-0 z-10 flex items-center justify-center cursor-grab active:cursor-grabbing">
      {/* We are using a premium 3D car model from Spline */}
      <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
    </div>
  );
}
