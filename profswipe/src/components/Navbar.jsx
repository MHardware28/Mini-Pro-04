import { GiMortarBoard } from 'react-icons/gi'
import { FaHeart, FaCheckCircle } from 'react-icons/fa'

export default function Navbar({ savedCount, reviewedCount, onOpenSaved, onOpenReviewed }) {
  return (
    <div className="navbar bg-base-200 shadow-lg px-4 sticky top-0 z-50">
      <div className="navbar-start">
        <div className="flex items-center gap-2">
          <GiMortarBoard className="text-primary text-3xl" />
          <span className="font-display text-xl font-bold text-primary tracking-tight">
            ProfSwipe
          </span>
        </div>
      </div>

      <div className="navbar-center hidden md:flex">
        <p className="text-base-content/50 text-sm font-light italic">
          Find your perfect professor match
        </p>
      </div>

      <div className="navbar-end gap-2">
        <button
          className="btn btn-ghost btn-sm gap-2"
          onClick={onOpenReviewed}
        >
          <FaCheckCircle className="text-success" />
          <span className="hidden sm:inline">Reviewed</span>
          {reviewedCount > 0 && (
            <span className="badge badge-success badge-sm">{reviewedCount}</span>
          )}
        </button>

        <button
          className="btn btn-primary btn-sm gap-2"
          onClick={onOpenSaved}
        >
          <FaHeart />
          <span className="hidden sm:inline">Wishlist</span>
          {savedCount > 0 && (
            <span className="badge badge-sm badge-secondary">{savedCount}</span>
          )}
        </button>
      </div>
    </div>
  )
}
