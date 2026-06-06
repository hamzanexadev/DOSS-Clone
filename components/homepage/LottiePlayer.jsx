'use client';

import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

export function LottiePlayer({
  path,
  className,
  loop = true,
  autoplay = true,
  renderer = 'svg',
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !path) {
      return undefined;
    }

    const animation = lottie.loadAnimation({
      autoplay,
      container: containerRef.current,
      loop,
      path,
      renderer,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    });

    return () => {
      animation.destroy();
    };
  }, [autoplay, loop, path, renderer]);

  return <div ref={containerRef} className={className} aria-hidden="true" />;
}
