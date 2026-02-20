import { FaDownload, FaTimes, FaTrash } from 'react-icons/fa'
import { toast } from 'react-toastify'

function downloadCSV(saved) {
  const headers = 'Name,Department,Subject,Level,Year,Rating,Difficulty,Would Take Again %\n'
  const rows = saved.map(p =>
    `"${p.name}","${p.department}","${p.subject}","${p.level}",${p.year},${p.rating},${p.difficulty},${p.wouldTakeAgain}`
  ).join('\n')
  const blob = new Blob([headers + rows], { type: 'text/csv' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'profswipe-wishlist.csv'
  a.click()
  URL.revokeObjectURL(url)
}

function downloadJSON(saved) {
  const blob = new Blob([JSON.stringify(saved, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'profswipe-wishlist.json'
  a.click()
  URL.revokeObjectURL(url)
}

export default function SavedDrawer({ isOpen, onClose, saved, onUnsave }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="relative bg-base-200 w-full max-w-sm h-full flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-base-300">
          <div>
            <h2 className="font-display text-xl font-bold">❤️ Wishlist</h2>
            <p className="text-base-content/50 text-sm">{saved.length} professors saved</p>
          </div>
          <button className="btn btn-ghost btn-sm btn-circle" onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {saved.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-5xl mb-3">💔</div>
              <p className="text-base-content/50">Your wishlist is empty.</p>
              <p className="text-base-content/30 text-sm mt-1">Swipe right to save professors!</p>
            </div>
          ) : (
            saved.map(prof => (
              <div
                key={prof.id}
                className="flex items-center gap-3 bg-base-300 rounded-xl p-3"
              >
                <img
                  src={prof.avatar}
                  alt={prof.name}
                  className="w-12 h-12 rounded-xl object-cover shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-display font-bold text-sm truncate">{prof.name}</p>
                  <p className="text-primary text-xs truncate">{prof.subject}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="badge badge-xs badge-primary">{prof.rating}⭐</span>
                    <span className="text-xs text-base-content/40">{prof.department}</span>
                  </div>
                </div>
                <button
                  className="btn btn-ghost btn-xs btn-circle text-error"
                  onClick={() => {
                    onUnsave(prof.id)
                    toast(`Removed ${prof.name} from wishlist`, { icon: '🗑️' })
                  }}
                >
                  <FaTrash />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Download Buttons */}
        {saved.length > 0 && (
          <div className="p-4 border-t border-base-300 space-y-2">
            <p className="text-xs text-base-content/40 mb-2 font-display uppercase tracking-wider">
              Download Wishlist
            </p>
            <button
              className="btn btn-primary btn-sm w-full gap-2"
              onClick={() => {
                downloadCSV(saved)
                toast('📥 CSV downloaded!', { icon: false })
              }}
            >
              <FaDownload /> Download as CSV
            </button>
            <button
              className="btn btn-outline btn-sm w-full gap-2"
              onClick={() => {
                downloadJSON(saved)
                toast('📥 JSON downloaded!', { icon: false })
              }}
            >
              <FaDownload /> Download as JSON
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
