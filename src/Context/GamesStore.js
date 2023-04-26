import axios from 'axios'
import { data } from 'jquery';
import React, { createContext, useState } from 'react'
import $ from "jquery"
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';




export const GamesStore = createContext()

export default function GamesStorePtrovider({children}) {
    const [platForm, setPlatForm] = useState(null)

    async function getPlatform(plat) {

            try {
                const {data} = await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/games`,
        
        
        {headers: {
            "X-RapidAPI-Key" : "b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68",
            "X-RapidAPI-Host" : "free-to-play-games-database.p.rapidapi.com"

        },params: {

            "platform" : plat

        }}
      
        )
        setPlatForm(data)
            } catch (error) {
                console.log("error",error);
            }


    }
    const [sortingGames, setSortingGames] = useState(null)
    const [categories, setCategories] = useState(null)
    useEffect(()=>{

        sortedGames()

    },[])


    async function sortedGames(id) {

        try {
            const {data} = await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/games`,
    
    
    {headers: {
        "X-RapidAPI-Key" : "b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68",
        "X-RapidAPI-Host" : "free-to-play-games-database.p.rapidapi.com"

    } , params : {

        "sort-by":id
    }} 
  
    )
    setSortingGames(data)
        } catch (error) {
            console.log("error",error);
        }


}
   
    async function categorieGames(id) {

        try {
            const {data} = await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/games`,
    
    
    {headers: {
        "X-RapidAPI-Key" : "b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68",
        "X-RapidAPI-Host" : "free-to-play-games-database.p.rapidapi.com"

    } , params : {

        "category":id
    }} 
  
    )
    setCategories(data)
        } catch (error) {
            console.log("error",error);
        }


}
   

 return <GamesStore.Provider value={{getPlatform,platForm,sortedGames,sortingGames,categorieGames,categories}}>


    {children}
 </GamesStore.Provider>
}
