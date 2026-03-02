
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { WishListProvider } from './context/WishlistContext.jsx'
import { CompareProvider } from './context/CompareContext.jsx'
import { RatingProvider } from './context/RatingContext.jsx'

createRoot(document.getElementById('root')).render(
  <RatingProvider>
    <WishListProvider>
      <CompareProvider>
        <App />
     </CompareProvider>
    </WishListProvider>
  </RatingProvider>
)
