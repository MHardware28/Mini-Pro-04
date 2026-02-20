import { FaFilter, FaSortAmountDown } from 'react-icons/fa'

export default function FilterBar({ professors, filters, onChange }) {
  const departments = ['All', ...new Set(professors.map(p => p.department))].sort()
  const levels = ['All', 'Undergraduate', 'Graduate', 'PhD']
  const years = ['All', ...new Set(professors.map(p => p.year))].sort((a, b) => b - a)

  const update = (key, value) => onChange(prev => ({ ...prev, [key]: value }))

  return (
    <div className="bg-base-200 rounded-2xl p-4 mb-6 flex flex-wrap gap-3 items-center">
      <div className="flex items-center gap-2 text-primary font-display font-bold text-sm">
        <FaFilter />
        <span>Filter</span>
      </div>

      {/* Department */}
      <select
        className="select select-bordered select-sm flex-1 min-w-[140px]"
        value={filters.department}
        onChange={e => update('department', e.target.value)}
      >
        <option value="All">All Departments</option>
        {departments.filter(d => d !== 'All').map(d => (
          <option key={d} value={d}>{d}</option>
        ))}
      </select>

      {/* Level */}
      <select
        className="select select-bordered select-sm flex-1 min-w-[140px]"
        value={filters.level}
        onChange={e => update('level', e.target.value)}
      >
        {levels.map(l => (
          <option key={l} value={l}>{l === 'All' ? 'All Levels' : l}</option>
        ))}
      </select>

      {/* Year */}
      <select
        className="select select-bordered select-sm flex-1 min-w-[120px]"
        value={filters.year}
        onChange={e => update('year', e.target.value)}
      >
        <option value="All">All Years</option>
        {years.filter(y => y !== 'All').map(y => (
          <option key={y} value={y}>{y}</option>
        ))}
      </select>

      {/* Sort */}
      <div className="flex items-center gap-2 text-secondary font-display font-bold text-sm">
        <FaSortAmountDown />
        <span>Sort</span>
      </div>

      <select
        className="select select-bordered select-sm flex-1 min-w-[160px]"
        value={filters.sortBy}
        onChange={e => update('sortBy', e.target.value)}
      >
        <option value="rating">⭐ Highest Rated</option>
        <option value="difficulty_asc">😌 Easiest First</option>
        <option value="name">🔤 Name A–Z</option>
      </select>
    </div>
  )
}
