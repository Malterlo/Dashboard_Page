import { useSyncExternalStore } from "react";

const MOBILE_BREAKPOINT = 768;
const mobileQuery = `(max-width: ${MOBILE_BREAKPOINT - 1}px)`;

function subscribe(notify) {
  const mediaQuery = window.matchMedia(mobileQuery);
  mediaQuery.addEventListener("change", notify);
  return () => mediaQuery.removeEventListener("change", notify);
}

function getSnapshot() {
  return window.matchMedia(mobileQuery).matches;
}

export function useIsMobile() {
  return useSyncExternalStore(subscribe, getSnapshot, () => false);
}
