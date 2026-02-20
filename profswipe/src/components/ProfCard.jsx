import { FaStar, FaBolt, FaRedo, FaInfoCircle } from 'react-icons/fa'

function RatingBar({ value, max = 5, colorClass }) {
  return (
    <div className="w-full bg-base-300 rounded-full h-2">
      <div
        className={`h-2 rounded-full rating-bar ${colorClass}`}
        style={{ width: `${(value / max) * 100}%` }}
      />
    </div>
  )
}

export default function ProfCard({ prof, isSaved, onViewDetail }) {
  const ratingColor =
    prof.rating >= 4.5 ? 'bg-success' :
    prof.rating >= 3.5 ? 'bg-primary' :
    prof.rating >= 2.5 ? 'bg-warning' : 'bg-error'

  return (
    <div className="card bg-base-200 border border-base-300 shadow-2xl w-full h-full rounded-3xl overflow-hidden">
      {/* Top: Avatar & Name */}
      <div className="relative">
        <img
          src={prof.avatar}
          alt={prof.name}
          className="w-full h-48 object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-base-200 via-transparent to-transparent" />

        {/* Saved badge */}
        {isSaved && (
          <div className="absolute top-3 right-3">
            <span className="badge badge-primary gap-1">
              ❤️ Saved
            </span>
          </div>
        )}

        {/* Year badge */}
        <div className="absolute top-3 left-3">
          <span className="badge badge-ghost bg-base-200/80 text-xs">
            {prof.year}
          </span>
        </div>
      </div>

      <div className="card-body p-4 gap-3 flex-1">
        {/* Name + Dept */}
        <div>
          <h2 className="font-display text-lg font-bold text-base-content leading-tight">
            {prof.name}
          </h2>
          <p className="text-primary text-sm font-medium">{prof.subject}</p>
          <p className="text-base-content/50 text-xs">
            {prof.department} · {prof.level}
          </p>
        </div>

        {/* Stats */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <FaStar className="text-yellow-400 text-xs w-4 shrink-0" />
            <RatingBar value={prof.rating} colorClass="bg-primary" />
            <span className="text-xs font-bold w-6 text-right">{prof.rating}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaBolt className="text-orange-400 text-xs w-4 shrink-0" />
            <RatingBar value={prof.difficulty} colorClass="bg-warning" />
            <span className="text-xs font-bold w-6 text-right">{prof.difficulty}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaRedo className="text-green-400 text-xs w-4 shrink-0" />
            <RatingBar value={prof.wouldTakeAgain} max={100} colorClass="bg-success" />
            <span className="text-xs font-bold w-8 text-right">{prof.wouldTakeAgain}%</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {prof.tags.slice(0, 3).map(tag => (
            <span key={tag} className="badge badge-xs badge-outline badge-primary">
              {tag}
            </span>
          ))}
        </div>

        {/* Review snippet */}
        <p className="text-base-content/60 text-xs italic leading-relaxed line-clamp-2">
          "{prof.reviews[0]}"
        </p>

        {/* Detail button */}
        <button
          className="btn btn-ghost btn-xs gap-1 self-start mt-auto"
          onClick={onViewDetail}
        >
          <FaInfoCircle />
          View Details
        </button>
      </div>
    </div>
  )
}
