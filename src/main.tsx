import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './i18n'
import PortfolioApp from './PortfolioApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PortfolioApp />
  </StrictMode>,
)
