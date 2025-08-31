import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "./store/store.jsx"
import {Provider} from "react-redux"
import { cityStore } from './store/store.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={cityStore}>
      <App />
    </Provider>
  </StrictMode>,
)
