import { ACCENTS } from '../theme.js'

export default function ColorPicker({ accent, setAccent, compact }) {
  return (
    <div className="swatches">
      {!compact && <span className="swatch-label">Theme</span>}
      {ACCENTS.map((c) => (
        <button
          key={c.value}
          className="swatch"
          data-active={accent === c.value}
          style={{ background: c.value }}
          aria-label={`Switch accent color to ${c.name}`}
          title={c.name}
          onClick={() => setAccent(c.value)}
        />
      ))}
    </div>
  )
}
