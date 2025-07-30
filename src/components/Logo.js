"use client";

import Image from "next/image";
import { useTheme } from "./ClientThemeProvider";
import { useEffect, useState } from "react";

export default function Logo({
  width = 150,
  height = 60,
  className = "",
  priority = false,
}) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <div
        style={{ width, height }}
        className={`${className} animate-pulse bg-gray-200 dark:bg-gray-700 rounded`}
      />
    );
  }

  // Theme logic:
  // Dark mode: use lightlogo.png (light colored logo on dark background)
  // Light mode: use darklogo.png (dark colored logo on light background)
  const logoSrc =
    theme === "dark"
      ? "/images/logo/lightlogo.png"
      : "/images/logo/darklogo.png";

  console.log(
    "Logo Debug - Theme:",
    theme,
    "Source:",
    logoSrc,
    "Mounted:",
    mounted
  );

  return (
    <div className={className}>
      <Image
        key={logoSrc} // Force re-render when logo source changes
        src={logoSrc}
        alt="Rizky Yusfian Logo"
        width={width}
        height={height}
        priority={priority}
        style={{
          objectFit: "contain",
          width: "auto",
          height: "auto",
          maxWidth: width,
          maxHeight: height,
        }}
        onError={(e) => {
          console.error("Logo failed to load:", logoSrc, e);
        }}
        onLoad={() => {
          console.log("Logo loaded successfully:", logoSrc);
        }}
      />
    </div>
  );
}
