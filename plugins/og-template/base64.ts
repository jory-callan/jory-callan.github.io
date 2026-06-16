import type { BgType } from '../../src/types'

type BackgroundBase64 = Record<BgType, string>

// Simple solid-color backgrounds (replacing heavy PNG base64)
const backgroundBase64: BackgroundBase64 = {
  plum: '#1a1a2e',
  dot: '#16213e',
  rose: '#0f3460',
  particle: '#0a0a23',
}

export default backgroundBase64
