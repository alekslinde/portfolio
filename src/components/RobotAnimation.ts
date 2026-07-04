// ── BINARY ANIMATION ──────────────────────────────────────────

export function toBinary(str: string): string {
  return str
    .split('')
    .map((c) => c.charCodeAt(0).toString(2).padStart(8, '0'))
    .join(' ');
}

// Reserve an element's current box so its transient (binary/noise) contents
// can't reflow the surrounding layout. Returns a cleanup that restores the
// element once the final text has settled.
export function lockDimensions(el: HTMLElement): () => void {
  const rect = el.getBoundingClientRect();
  const prev = {
    minWidth: el.style.minWidth,
    minHeight: el.style.minHeight,
    overflow: el.style.overflow,
    whiteSpace: el.style.whiteSpace,
  };
  el.style.minWidth = `${Math.ceil(rect.width)}px`;
  el.style.minHeight = `${Math.ceil(rect.height)}px`;
  el.style.overflow = 'hidden';
  el.style.whiteSpace = 'nowrap';
  return () => {
    el.style.minWidth = prev.minWidth;
    el.style.minHeight = prev.minHeight;
    el.style.overflow = prev.overflow;
    el.style.whiteSpace = prev.whiteSpace;
  };
}

export function decodeText(
  el: HTMLElement,
  target: string,
  duration: number,
  onDone?: () => void
): ReturnType<typeof setInterval> {
  const steps = 28;
  const interval = duration / steps;
  let step = 0;

  const tick = setInterval(() => {
    step++;
    const progress = step / steps;
    const revealed = Math.floor(progress * target.length);

    let result = target.slice(0, revealed);
    if (revealed < target.length) {
      const noiseLen = Math.min(target.length - revealed, 12);
      for (let i = 0; i < noiseLen; i++) {
        result += Math.random() > 0.5 ? '1' : '0';
      }
    }

    el.textContent = result;

    if (step >= steps) {
      clearInterval(tick);
      el.textContent = target;
      onDone?.();
    }
  }, interval);

  return tick;
}

// Continuously cycles the name between real text and binary. The box is
// reserved at the wider (binary) state up front so the surrounding layout
// never shifts as the two states swap in and out.
export function startNameCycle(
  el: HTMLElement,
  realName: string
): ReturnType<typeof setInterval> {
  const binaryName = toBinary(realName);
  let showingBinary = false;

  // Measure the binary state's box, then hold that as a floor so neither
  // state reflows its neighbours.
  const restore = el.textContent;
  el.textContent = binaryName;
  const rect = el.getBoundingClientRect();
  el.style.minWidth = `${Math.ceil(rect.width)}px`;
  el.style.minHeight = `${Math.ceil(rect.height)}px`;
  el.textContent = restore;

  return setInterval(() => {
    showingBinary = !showingBinary;
    decodeText(el, showingBinary ? binaryName : realName, 900, undefined);
  }, 4000);
}
