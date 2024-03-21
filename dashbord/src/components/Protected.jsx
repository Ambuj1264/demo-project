import React, { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Protected = () => {
  const  authKey=localStorage.getItem("AUTHTOKEN") || localStorage.getItem("GoogleToken")
   return authKey? <Outlet/>:<Navigate to="/login"/>
}

export default Protected