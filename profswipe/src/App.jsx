import { useState, useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Navbar from './components/Navbar'
import Header from './components/Header'
import FilterBar from './components/FilterBar'
import SwipeStack from './components/SwipeStack'
import SavedDrawer from './components/SavedDrawer'
import ReviewedList from './components/ReviewedList'
import Loader from './components/Loader'
import Footer from './components/Footer'

export default function App() {
  const [professors, setProfessors] = useState([])
  const [filtered, setFiltered] = useState([])
  const [loading, setLoading] = useState(true)
  const [saved, setSaved] = useState([])
  const [reviewed, setReviewed] = useState([])
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [reviewedOpen, setReviewedOpen] = useState(false)
  const [filters, setFilters] = useState({
    department: 'All',
    level: 'All',
    year: 'All',
    sortBy: 'rating',
  })

  // Fetch data on mount
  useEffect(() => {
    const fetchProfessors = async () => {
      try {
        const res = await fetch('/professors.json')
        const data = await res.json()
        setProfessors(data)
      } catch (err) {
        console.error('Failed to load professors:', err)
      } finally {
        setTimeout(() => setLoading(false), 800) // slight delay for loader effect
      }
    }
    fetchProfessors()
  }, [])

  // Recompute filtered list when professors or filters change
  useEffect(() => {
    let result = [...professors]

    if (filters.department !== 'All') {
      result = result.filter(p => p.department === filters.department)
    }
    if (filters.level !== 'All') {
      result = result.filter(p => p.level === filters.level)
    }
    if (filters.year !== 'All') {
      result = result.filter(p => p.year === Number(filters.year))
    }

    // Sorting
    if (filters.sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating)
    } else if (filters.sortBy === 'difficulty_asc') {
      result.sort((a, b) => a.difficulty - b.difficulty)
    } else if (filters.sortBy === 'name') {
      result.sort((a, b) => a.name.localeCompare(b.name))
    }

    setFiltered(result)
  }, [professors, filters])

  const handleSave = (prof) => {
    setSaved(prev =>
      prev.find(p => p.id === prof.id) ? prev : [...prev, prof]
    )
  }

  const handleUnsave = (id) => {
    setSaved(prev => prev.filter(p => p.id !== id))
  }

  const handleReviewed = (prof) => {
    setReviewed(prev =>
      prev.find(p => p.id === prof.id) ? prev : [...prev, prof]
    )
  }

  return (
    <div className="min-h-screen bg-base-100 flex flex-col">
      <Navbar
        savedCount={saved.length}
        reviewedCount={reviewed.length}
        onOpenSaved={() => setDrawerOpen(true)}
        onOpenReviewed={() => setReviewedOpen(true)}
      />

      <Header />

      <main className="flex-1 container mx-auto px-4 py-6">
        <FilterBar
          professors={professors}
          filters={filters}
          onChange={setFilters}
        />

        {loading ? (
          <Loader />
        ) : (
          <SwipeStack
            professors={filtered}
            onSave={handleSave}
            onReviewed={handleReviewed}
            saved={saved}
          />
        )}
      </main>

      <Footer />

      <SavedDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        saved={saved}
        onUnsave={handleUnsave}
      />

      {reviewedOpen && (
        <ReviewedList
          reviewed={reviewed}
          onClose={() => setReviewedOpen(false)}
        />
      )}

      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        theme="dark"
        toastClassName="font-display"
      />
    </div>
  )
}
