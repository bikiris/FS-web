import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './Router.jsx'

import { CartProvider } from './utils/CartProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <Router />
    </CartProvider>
  </StrictMode>,
)
