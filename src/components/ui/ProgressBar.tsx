"use client";

import NextTopLoader from "nextjs-toploader";

export function ProgressBar() {
  return (
    <NextTopLoader
      color="hsl(217, 91%, 60%)"
      initialPosition={0.08}
      crawlSpeed={200}
      height={2}
      crawl={true}
      showSpinner={false}
      easing="ease"
      speed={200}
      zIndex={1031}
      shadow="0 0 10px #2299DD,0 0 5px #2299DD"
    />
  );
}
