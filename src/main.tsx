import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PortfolioApp from './PortfolioApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PortfolioApp />
  </StrictMode>,
)
