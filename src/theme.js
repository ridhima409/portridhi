export const ACCENTS = [
  { name: 'Violet', value: '#6c63ff' },
  { name: 'Cyan', value: '#22d3ee' },
  { name: 'Coral', value: '#ff6b6b' },
  { name: 'Mint', value: '#34d399' },
  { name: 'Amber', value: '#f5a524' },
]

export function hexToRgb(hex) {
  const h = hex.replace('#', '')
  const bigint = parseInt(h, 16)
  return `${(bigint >> 16) & 255}, ${(bigint >> 8) & 255}, ${bigint & 255}`
}
