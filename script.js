import { createRoot } from 'react-dom/client'
import { Suspense } from 'react'
import './src/styles.css'
import { App } from './src/App'

createRoot(document.getElementById('root')).render(
  <Suspense fallback={null}>
    <App />
  </Suspense>
)
