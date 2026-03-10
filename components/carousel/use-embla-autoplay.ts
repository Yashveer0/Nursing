'use client';

import { useCallback, useEffect, useRef } from 'react';
import type { EmblaCarouselType } from 'embla-carousel';

export function useEmblaAutoplay(emblaApi: EmblaCarouselType | undefined, delay = 4000) {
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stop = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const start = useCallback(() => {
    stop();
    if (!emblaApi) return;
    timerRef.current = setInterval(() => {
      emblaApi.scrollNext();
    }, delay);
  }, [delay, emblaApi, stop]);

  useEffect(() => {
    if (!emblaApi) return;

    const rootNode = emblaApi.rootNode();
    const onMouseEnter = () => stop();
    const onMouseLeave = () => start();

    rootNode.addEventListener('mouseenter', onMouseEnter);
    rootNode.addEventListener('mouseleave', onMouseLeave);

    emblaApi.on('pointerDown', stop);
    emblaApi.on('settle', start);

    start();

    return () => {
      stop();
      rootNode.removeEventListener('mouseenter', onMouseEnter);
      rootNode.removeEventListener('mouseleave', onMouseLeave);
      emblaApi.off('pointerDown', stop);
      emblaApi.off('settle', start);
    };
  }, [emblaApi, start, stop]);
}
