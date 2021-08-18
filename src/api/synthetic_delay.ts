export type SyntheticDelay = () => Promise<void>

function syntheticDelay(delayMs: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, delayMs))
}

export function createSyntheticDelay(delayMs: number): SyntheticDelay {
  return () => syntheticDelay(delayMs)
}
