import { StrictMode } from 'react'
import Navbar from 'modules/templates/home/Navbar'
import { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { BrowserRouter } from 'react-router-dom'
// import RootTemplate from "pages/Home"
import AppRouter from 'Router'
const client = new QueryClient()
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback="main.tsx loading....">
        <QueryClientProvider client={client}>
          <Navbar />
          <AppRouter />
          <ReactQueryDevtools />
        </QueryClientProvider>
      </Suspense>
    </BrowserRouter>
  </StrictMode>
)