# ProfSwipe 🎓

A Tinder-style Rate My Professor React app built with Vite, Tailwind CSS, and DaisyUI.

## Setup

```bash
npm install
npm run dev
```

## Features

- 🃏 Swipe-style card interface (Skip / Top Pick / Save)
- 🔍 Filter by Department, Level (Undergrad/Grad/PhD), and Year
- 📊 Sort by Rating, Difficulty, or Name
- ❤️ Wishlist drawer with CSV & JSON download
- ✅ Reviewed history modal
- 💀 DaisyUI skeleton loader
- 🍞 React-Toastify notifications on every interaction
- 📋 Professor detail modal with full stats and reviews
- 📱 Responsive layout

## Tech Stack

- React 18 + Vite
- Tailwind CSS v3 + DaisyUI (night theme)
- React-Toastify
- React-Icons
- jsPDF (available for PDF export extension)

## Project Structure

```
src/
  components/
    Navbar.jsx        — Top nav with wishlist & reviewed buttons
    Header.jsx        — Hero banner with instructions
    FilterBar.jsx     — Department / Level / Year filters + Sort
    SwipeStack.jsx    — Card deck logic + action buttons + detail modal
    ProfCard.jsx      — Individual professor card UI
    SavedDrawer.jsx   — Wishlist side drawer + CSV/JSON download
    ReviewedList.jsx  — Modal of all swiped professors
    Loader.jsx        — Skeleton loader shaped like the card
    Footer.jsx        — App footer
  App.jsx             — Root state container (professors, saved, filters)
  main.jsx
  index.css
public/
  professors.json     — 15 sample professors dataset
```
