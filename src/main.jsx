import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import store from './data/store.js'
import App from './App.jsx'

//Provide the store in your app (main.jsx)
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
