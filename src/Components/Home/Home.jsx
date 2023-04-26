import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loading from '../Loading/Loading'

export default function Home() {
  useEffect(()=>{
personRecomd()


  },[])
  const [recomd, setRecomd] = useState(null)
  const [loading, setIsLoading] = useState(false)
  async function personRecomd() {
    try {
      setIsLoading(true)
      const {data} = await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/filter`,


{headers: {
  "X-RapidAPI-Key" : "b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68",
  "X-RapidAPI-Host" : "free-to-play-games-database.p.rapidapi.com"

}, params: {tag: '3d.mmorpg.fantasy.pvp', platform: 'pc'} }

)
setRecomd(data)
setIsLoading(false)
  } catch (error) {
      console.log("error",error);
  }


  }
 return <> 
  <section>
    <div className="bg-img p-5">
      <div className="bg-layer bg-opacity-75 p-5 ">  
        <div className='text-center'>
        <h1>Find & track the best <span className='free'>free-to-play</span> games!</h1>
          <p>Track what you've played and search for what to play next! Plus get free premium loot!


</p>
<Link to={"/all"}><button className='btn btn-outline-secondary '>Browse games</button>
</Link>
        </div>
      </div>
    </div>
  </section>
 
 <section className='recomd my-5'>
  <div className="container">

    <h2>
    <i _ngcontent-oxf-c8="" class="fas fa-robot mr-2"></i>
    Personalized Recommendations
    </h2>
    {
    recomd ? <div className="container">
    <div className="row  my-5 g-4">
{
   recomd.slice(0,3).map((game,indx)=> 
   <div className="col-md-4  " key={indx}>
    <Link to={`/gamesDetail/${game.id}`}>
    <div className="inner-col gaames rounded-2">
       <img src={game.thumbnail} alt="" className='w-100 '/>
       <div className='d-flex justify-content-between p-2 my-2'>
       <h3>{game.title.slice(0,15)}</h3>
       <span class="badge  py-3 text-white">Free</span>

       </div>
   
   </div>
    </Link>
 
   
   </div>)
}

     
    </div>
</div> : <Loading/>
}

  </div>
 </section>
 
 
 
 
 
 
 
 </>
}
