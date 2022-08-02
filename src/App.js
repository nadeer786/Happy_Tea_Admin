import React, { Component, Suspense, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { loadUser } from './redux/user/actions'
import './scss/style.scss'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      dispatch(loadUser())
    }
  }, [])
  return (
    <HashRouter>
      <Suspense fallback={loading}>
        <Routes>
          <Route exact path="/register" name="Register Page" element={<Register />} />
          <Route exact path="/404" name="Page 404" element={<Page404 />} />
          <Route exact path="/500" name="Page 500" element={<Page500 />} />
          {/* <Route path="*" name="Home" element={<DefaultLayout />} /> */}
          <Route exact path="*" name="Login Page" element={<Login />} />
        </Routes>
      </Suspense>
    </HashRouter>
  )
}

export default App
