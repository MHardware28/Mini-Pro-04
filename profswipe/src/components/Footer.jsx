import { PiStudent } from 'react-icons/pi'
import { FaHeart } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#191e24', borderTop: '1px solid #2a323c', padding: '24px 16px', textAlign: 'center', marginTop: 32 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, color: '#4b5563', marginBottom: 6 }}>
        <PiStudent style = {{ color: '#570df8', fontSize: 20 }} />
        <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, color: '#570df8' }}>ProfSwipe</span>
        <span>—</span>
        <span style={{ fontSize: 14 }}>
          Made with <FaHeart style={{ display: 'inline', color: '#f87272', fontSize: 12 }} /> for students everywhere
        </span>
      </div>
      <p style={{ color: '#374151', fontSize: 12, margin: 0 }}>
        Data is fictional and for demonstration purposes only.
      </p>
    </footer>
  )
}
