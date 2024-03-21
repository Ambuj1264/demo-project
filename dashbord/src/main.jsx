import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import LoginPage from './pages/LoginPage.jsx'
import Protected from './components/Protected.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
// import { GOOGLE_CLIENTID } from './components/GoogleAuth.jsx'
import SignupPage from './pages/SignupPage.jsx'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
const GOOGLE_CLIENTID= "your token"

ReactDOM.createRoot(document.getElementById('root')).render(
     <GoogleOAuthProvider clientId={GOOGLE_CLIENTID}>
  <Provider store={store}>
      <BrowserRouter>
      <Routes>

        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route element={<Protected/>}>
        <Route path="/" element={<App />}/>

        </Route>
      </Routes>
      </BrowserRouter>
  </Provider>
    </GoogleOAuthProvider>
   
)
