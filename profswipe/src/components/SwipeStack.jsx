import { useState } from 'react'
import { toast } from 'react-toastify'
import { FaTimes, FaStar, FaHeart } from 'react-icons/fa'
import ProfCard from './ProfCard'

export default function SwipeStack({ professors, onSave, onReviewed, saved }) {
  const [index, setIndex] = useState(0)
  const [animClass, setAnimClass] = useState('')
  const [detailProf, setDetailProf] = useState(null)

  const current = professors[index]

  const animate = (cls, callback) => {
    setAnimClass(cls)
    setTimeout(() => {
      setAnimClass('')
      callback()
    }, 400)
  }

  const handleSkip = () => {
    if (!current) return
    animate('fly-left', () => {
      onReviewed(current)
      setIndex(i => i + 1)
      toast('👈 Skipped!', { icon: false })
    })
  }

  const handleSave = () => {
    if (!current) return
    if (saved.find(p => p.id === current.id)) {
      toast('Already in your wishlist!', { icon: '❤️' })
      setIndex(i => i + 1)
      return
    }
    animate('fly-right', () => {
      onSave(current)
      onReviewed(current)
      setIndex(i => i + 1)
      toast(`❤️ ${current.name} saved to wishlist!`, { icon: false })
    })
  }

  const handleTopPick = () => {
    if (!current) return
    animate('fly-up', () => {
      onSave(current)
      onReviewed(current)
      setIndex(i => i + 1)
      toast(`⭐ Top pick! ${current.name} saved!`, { icon: false })
    })
  }

  const handleReset = () => {
    setIndex(0)
    toast('🔄 Starting over!', { icon: false })
  }

  if (professors.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4 text-center">
        <div className="text-6xl">🔍</div>
        <h2 className="font-display text-2xl font-bold text-base-content">
          No professors found
        </h2>
        <p className="text-base-content/50">
          No professors match the selected filters. Try adjusting your search.
        </p>
      </div>
    )
  }

  if (index >= professors.length) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4 text-center">
        <div className="text-6xl">🎓</div>
        <h2 className="font-display text-2xl font-bold text-base-content">
          You've seen them all!
        </h2>
        <p className="text-base-content/50 max-w-sm">
          You've gone through all {professors.length} professors in this list.
        </p>
        <button className="btn btn-primary mt-2" onClick={handleReset}>
          Start Over
        </button>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Progress */}
      <div className="w-full max-w-sm">
        <div className="flex justify-between text-xs text-base-content/40 mb-1">
          <span>{index + 1} of {professors.length}</span>
          <span>{Math.round(((index) / professors.length) * 100)}% done</span>
        </div>
        <progress
          className="progress progress-primary w-full"
          value={index}
          max={professors.length}
        />
      </div>

      {/* Card */}
      <div className="relative" style={{ width: 360, height: 520 }}>
        {/* Shadow card behind */}
        {index + 1 < professors.length && (
          <div
            className="absolute inset-0 rounded-3xl bg-base-300 border border-base-content/10"
            style={{ transform: 'scale(0.95) translateY(12px)', zIndex: 0 }}
          />
        )}
        <div
          className={`absolute inset-0 ${animClass}`}
          style={{ zIndex: 1 }}
        >
          <ProfCard
            prof={current}
            isSaved={!!saved.find(p => p.id === current.id)}
            onViewDetail={() => setDetailProf(current)}
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-6 items-center">
        <button
          onClick={handleSkip}
          className="btn btn-circle btn-lg btn-error btn-outline text-2xl"
          title="Skip"
        >
          <FaTimes />
        </button>
        <button
          onClick={handleTopPick}
          className="btn btn-circle btn-lg btn-warning text-2xl"
          title="Top Pick"
        >
          <FaStar />
        </button>
        <button
          onClick={handleSave}
          className="btn btn-circle btn-lg btn-primary text-2xl"
          title="Save to Wishlist"
        >
          <FaHeart />
        </button>
      </div>

      <p className="text-xs text-base-content/30 -mt-2">
        Skip &nbsp;·&nbsp; Top Pick &nbsp;·&nbsp; Save
      </p>

      {/* Detail Modal */}
      {detailProf && (
        <ProfDetailModal prof={detailProf} onClose={() => setDetailProf(null)} />
      )}
    </div>
  )
}

function ProfDetailModal({ prof, onClose }) {
  return (
    <dialog className="modal modal-open">
      <div className="modal-box max-w-lg">
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={onClose}
        >✕</button>

        <div className="flex gap-4 items-start mb-4">
          <img
            src={prof.avatar}
            alt={prof.name}
            className="w-20 h-20 rounded-2xl object-cover"
          />
          <div>
            <h3 className="font-display text-xl font-bold">{prof.name}</h3>
            <p className="text-primary font-medium">{prof.subject}</p>
            <p className="text-base-content/60 text-sm">{prof.department} · {prof.level}</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="stat bg-base-200 rounded-xl p-3">
            <div className="stat-title text-xs">Rating</div>
            <div className="stat-value text-primary text-2xl">{prof.rating}</div>
            <div className="stat-desc">out of 5</div>
          </div>
          <div className="stat bg-base-200 rounded-xl p-3">
            <div className="stat-title text-xs">Difficulty</div>
            <div className="stat-value text-warning text-2xl">{prof.difficulty}</div>
            <div className="stat-desc">out of 5</div>
          </div>
          <div className="stat bg-base-200 rounded-xl p-3">
            <div className="stat-title text-xs">Again?</div>
            <div className="stat-value text-success text-2xl">{prof.wouldTakeAgain}%</div>
            <div className="stat-desc">would retake</div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {prof.tags.map(tag => (
            <span key={tag} className="badge badge-primary badge-outline">{tag}</span>
          ))}
        </div>

        <div className="space-y-2">
          <p className="font-display font-bold text-sm text-base-content/60 uppercase tracking-wider">
            Reviews
          </p>
          {prof.reviews.map((r, i) => (
            <div key={i} className="bg-base-200 rounded-xl p-3 text-sm italic text-base-content/80">
              "{r}"
            </div>
          ))}
        </div>

        <div className="modal-action">
          <button className="btn btn-ghost" onClick={onClose}>Close</button>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop" onClick={onClose} />
    </dialog>
  )
}
