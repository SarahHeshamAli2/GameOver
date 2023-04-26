import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';

export default function AllGames() {

const [allGames, setAllGames] = useState(null)
    async function getAllGames() {

        try {
            const {data} = await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/games`,
    
    
    {headers: {
        "X-RapidAPI-Key" : "b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68",
        "X-RapidAPI-Host" : "free-to-play-games-database.p.rapidapi.com"

    }}
  
    )
    setAllGames(data)
        } catch (error) {
            console.log("error",error);
        }


}
useEffect(()=>{
getAllGames()
},[])
return <>
{
    allGames ? <div className="container">
    <div className="row  my-5 g-4">
{
   allGames.map((game,indx)=> 
   <div className="col-md-3  " key={indx}>
 <Link to={`/gamesDetail/${game.id}`}>
 
 <div className="inner-col gaames rounded-2">
       <img src={game.thumbnail} alt="" className='w-100 '/>
       <div className='d-flex justify-content-between px-2 my-2'>
       <h3>{game.title.slice(0,15)}</h3>
       <span class="badge  py-3 text-white">Free</span>

       </div>
       <p className='px-2'>{game.short_description.slice(0,25)}..</p>
       <div className='d-flex justify-content-between align-items-center px-2'>
       <i class="fa-solid fa-square-plus"></i>
       <div className='d-flex align-items-center pb-3'>
       <span className='mx-2 badge spc-badge '> {game.genre}</span>
       {
               game.platform == "PC (Windows)"
               ?<i className="fa-brands fa-windows"></i> : <i class="fa-solid fa-window-maximize"></i>
       }

       </div>
       </div>
   </div>
 </Link>
   
   </div>)
}

     
    </div>
</div> : <Loading/>
}







</>
}
