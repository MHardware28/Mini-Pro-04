import { FaTimes } from 'react-icons/fa'

export default function ReviewedList({ reviewed, onClose }) {
  return (
    <dialog className="modal modal-open">
      <div className="modal-box max-w-lg">
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={onClose}
        >✕</button>

        <h3 className="font-display text-xl font-bold mb-1">✅ Reviewed</h3>
        <p className="text-base-content/50 text-sm mb-4">
          Professors you've already swiped on ({reviewed.length})
        </p>

        {reviewed.length === 0 ? (
          <div className="text-center py-8">
            <div className="text-5xl mb-3">👀</div>
            <p className="text-base-content/50">No professors reviewed yet.</p>
          </div>
        ) : (
          <div className="space-y-2 max-h-96 overflow-y-auto pr-1">
            {reviewed.map(prof => (
              <div
                key={prof.id}
                className="flex items-center gap-3 bg-base-200 rounded-xl p-3"
              >
                <img
                  src={prof.avatar}
                  alt={prof.name}
                  className="w-10 h-10 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <p className="font-bold text-sm">{prof.name}</p>
                  <p className="text-xs text-base-content/50">{prof.department} · {prof.level}</p>
                </div>
                <span className="badge badge-sm badge-primary">{prof.rating}⭐</span>
              </div>
            ))}
          </div>
        )}

        <div className="modal-action">
          <button className="btn btn-ghost" onClick={onClose}>Close</button>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop" onClick={onClose} />
    </dialog>
  )
}
