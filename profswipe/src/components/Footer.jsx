import { GiMortarBoard } from 'react-icons/gi'
import { FaGithub, FaHeart } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="footer footer-center bg-base-200 border-t border-base-300 p-6 mt-8">
      <div className="flex items-center gap-2 text-base-content/50">
        <GiMortarBoard className="text-primary text-xl" />
        <span className="font-display font-bold text-primary">ProfSwipe</span>
        <span>—</span>
        <span className="text-sm">
          Made with <FaHeart className="inline text-error text-xs" /> for students everywhere
        </span>
      </div>
      <p className="text-xs text-base-content/30">
        Data is fictional and for demonstration purposes only.
        Not affiliated with Rate My Professors.
      </p>
    </footer>
  )
}
