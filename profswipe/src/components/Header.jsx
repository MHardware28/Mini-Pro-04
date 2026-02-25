import { FaFire } from 'react-icons/fa'

export default function Header() {
  return (
    <div style={{ background: 'linear-gradient(135deg, #570df820 0%, #191e24 50%, #f000b820 100%)', borderBottom: '1px solid #2a323c', padding: '32px 16px', textAlign: 'center' }}>
      <div className="flex items-center justify-center gap-3 mb-2">
        <FaFire style={{ color: '#fb923c', fontSize: 24 }} />
        <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 32, color: '#fff', margin: 0 }}>
          Rate My Prof — Swipe Edition
        </h1>
        <FaFire style={{ color: '#fb923c', fontSize: 24 }} />
      </div>
      <p style={{ color: '#6b7280', fontSize: 15, maxWidth: 480, margin: '8px auto 0' }}>
        Hit the heart to save a professor, hit the X to skip, or hit ⭐ for a top pick and add to your wishlist.
      </p>
      <div className="flex justify-center gap-8 mt-4" style={{ color: '#4b5563', fontSize: 13 }}>
      </div>
    </div>
  )
}
