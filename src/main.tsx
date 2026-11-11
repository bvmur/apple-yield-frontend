import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Сначала стили Bootstrap, потом наши: наши подключены позже и перекрывают его
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/months.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
