import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// import RootTemplate from "pages/Home"
import AppRouter from 'Router'
createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <AppRouter />
    </StrictMode>
  </BrowserRouter>
)