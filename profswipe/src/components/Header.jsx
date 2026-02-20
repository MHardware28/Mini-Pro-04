import { FaFire } from 'react-icons/fa'

export default function Header() {
  return (
    <div className="bg-gradient-to-r from-primary/20 via-base-200 to-secondary/20 py-8 px-4 text-center border-b border-base-300">
      <div className="flex items-center justify-center gap-3 mb-2">
        <FaFire className="text-orange-400 text-2xl animate-pulse" />
        <h1 className="font-display text-3xl md:text-4xl font-bold text-base-content">
          Rate My Prof — Swipe Edition
        </h1>
        <FaFire className="text-orange-400 text-2xl animate-pulse" />
      </div>
      <p className="text-base-content/60 text-sm md:text-base max-w-lg mx-auto">
        Swipe right to save a professor to your wishlist, swipe left to skip,
        or hit ⭐ to mark as a top pick.
      </p>
      <div className="flex justify-center gap-6 mt-4 text-xs text-base-content/40">
        <span>👈 Skip</span>
        <span>⭐ Top Pick</span>
        <span>👉 Save</span>
      </div>
    </div>
  )
}
