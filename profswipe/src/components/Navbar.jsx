import { PiStudent } from 'react-icons/pi'
import { FaHeart, FaCheckCircle } from 'react-icons/fa'

export default function Navbar({ savedCount, reviewedCount, onOpenSaved, onOpenReviewed }) {
  return (
    <nav style={{ backgroundColor: '#191e24', borderBottom: '1px solid #2a323c', position: 'sticky', top: 0, zIndex: 50 }}
      className="flex items-center justify-between px-6 py-3 shadow-lg">
      <div className="flex items-center gap-2">
        <PiStudent style={{ color: '#570df8', fontSize: 28 }} />
        <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 20, color: '#570df8' }}>
          ProfSwipe
        </span>
      </div>

      <p style={{ color: '#6b7280', fontSize: 13 }} className="hidden md:block italic">
        Find your perfect professor match
      </p>

      <div className="flex items-center gap-3">
        <button onClick={onOpenReviewed}
          style={{ backgroundColor: '#1d232a', border: '1px solid #2a323c', borderRadius: 8, padding: '6px 14px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, color: '#a6adbb', fontSize: 14 }}>
          <FaCheckCircle style={{ color: '#36d399' }} />
          Reviewed
          {reviewedCount > 0 && (
            <span style={{ backgroundColor: '#36d399', color: '#1d232a', borderRadius: 999, padding: '1px 7px', fontSize: 11, fontWeight: 700 }}>
              {reviewedCount}
            </span>
          )}
        </button>

        <button onClick={onOpenSaved}
          style={{ backgroundColor: '#570df8', border: 'none', borderRadius: 8, padding: '6px 14px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, color: '#fff', fontSize: 14, fontWeight: 600 }}>
          <FaHeart />
          Wishlist
          {savedCount > 0 && (
            <span style={{ backgroundColor: '#f000b8', color: '#fff', borderRadius: 999, padding: '1px 7px', fontSize: 11, fontWeight: 700 }}>
              {savedCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  )
}
