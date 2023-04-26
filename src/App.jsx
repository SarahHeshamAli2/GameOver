import React, { useEffect, useState } from 'react'
import { Navigate, RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import jwtDecode from 'jwt-decode'
import GamesStorePtrovider from './Context/GamesStore'
import AllGames from './Components/AllGames/AllGames'
import Pc from './Components/Pc/Pc'
import Browser from './Components/Browser/Browser'
import SortBy from './Components/SortBy/SortBy'
import Categories from './Components/Categories/Categories'
import Loading from './Components/Loading/Loading'
import GameDetails from './Components/GameDetails/GameDetails'
import { createHashRouter } from 'react-router-dom/dist'





export default function App() {

  function ProtectedRoute({children}) {

    if(currentUser == null ) {
 
        return <>

<Navigate to="/login" />
    
        </>
    } else  {

        return <>{children}</>
    }

}

useEffect(()=> {
  
if(localStorage.getItem("tkn") !=null && currentUser == null) {

  getUserDataDecoded()

}

  },[])


  function clearUserData () {
    localStorage.removeItem("tkn")
    setCurrentUser(null)



}


  const [currentUser, setCurrentUser] = useState(null)

  function getUserDataDecoded() {
    let userToken = localStorage.getItem("tkn")
    let decodedToken = jwtDecode(userToken)
    setCurrentUser (decodedToken)
    console.log(currentUser);
    localStorage.setItem("currentUserId",decodedToken.id)



}
const routes =  createHashRouter(

  [{path: "",element: <GamesStorePtrovider><Layout currentUser={currentUser} clearUserData={clearUserData}/></GamesStorePtrovider> , children:[
    
    
    {index:true , element:<ProtectedRoute><Home/></ProtectedRoute>},{path:"home",element:<ProtectedRoute><Home/></ProtectedRoute>},
    {path:"login",element:<Login  getUserDataDecoded={ getUserDataDecoded} />},
    {path:"register",element:<Register/>},
    {path:"all",element:<ProtectedRoute><AllGames/></ProtectedRoute>},
    {path:"pc",element: <ProtectedRoute><Pc/></ProtectedRoute>},
    {path:"browser",element: <ProtectedRoute><Browser/></ProtectedRoute>},
    {path:"sortBy/:id",element:<ProtectedRoute> <SortBy/></ProtectedRoute>},
    {path:"categories/:id",element: <ProtectedRoute><Categories/></ProtectedRoute>},
    {path:"gamesDetail/:id",element: <ProtectedRoute><GameDetails/></ProtectedRoute>},
  
  
  ]}]
  )
  return <RouterProvider router={routes}/>
}
