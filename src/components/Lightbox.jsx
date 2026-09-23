export default function Lightbox({ item, onClose }) {
  if (!item) return null
  return (
    <div className="lightbox" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} aria-label="Close">×</button>
      <img src={item.img} alt={item.title} onClick={(e) => e.stopPropagation()} />
    </div>
  )
}
