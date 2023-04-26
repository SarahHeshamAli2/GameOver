import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from '../Loading/Loading'
import { Link, useParams } from 'react-router-dom'

export default function GameDetails() {
    const [gameDetail, setGameDetail] = useState(null)
    const{id}= useParams()
    console.log(id);
    useEffect(()=>{
getGamesDetail(id)

    },[])
   async function getGamesDetail (id) {

try {
    const {data} = await axios.get("https://free-to-play-games-database.p.rapidapi.com/api/game",
{
    headers: {
        "X-RapidAPI-Key" : "b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68",
        "X-RapidAPI-Host" : "free-to-play-games-database.p.rapidapi.com"
      
      } , params : {
        id: id
      }
}
) 
setGameDetail(data)
console.log(data);
} catch (error) {
    console.log("error",error);
}

    }
 return <>
 
{gameDetail ?   <div className="container my-5">
    <div className="row">
        <div className="col-md-4">
            <div className="inner">
                <img src={gameDetail.thumbnail} alt="" className='w-100' />
                <div className='d-flex my-3'>
                <button className='btn btn-secondary mx-2'>free</button>
                <Link to={gameDetail.game_url} target='_blank' className='btn sp-btn text-white w-100'>
                  <span className='fw-bolder'>  Play Now 
                  <span> <i className="fa-solid fa-right-from-bracket"></i></span>
                   </span>

                </Link>

                </div>
            </div>
        </div>
        <div className="col-md-8">
            <div className="inner">
                <h1>{gameDetail.title}</h1>
                <h4>About {gameDetail.title}</h4>
                <p>{gameDetail.description}</p>

                <div className='min-req my-3'>
                    <h4>                Minimum System Requirements
</h4>

<h6>graphics: <span className='small'>{gameDetail?.minimum_system_requirements?.graphics}</span></h6>
<h6>memory: <span className='small'>{gameDetail?.minimum_system_requirements?.memory}</span></h6>
<h6>os: <span className='small'>{gameDetail?.minimum_system_requirements?.os}</span></h6>
<h6>processor: <span className='small'>{gameDetail?.minimum_system_requirements?.processor}</span></h6>
<h6>storage: <span className='small'>{gameDetail?.minimum_system_requirements?.storage}</span></h6>
                </div>

      {gameDetail.screenshots.length > 0 ?           <div className="screenshots  my-3 py-3">
                    <h4>
                    {gameDetail.title} SCREENSHOTS
                    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
 {gameDetail.screenshots.map((screen,ind)=>    <div className="carousel-item active" key={ind}>
      <img src={screen.image} className="d-block w-100" alt="..."/>
    </div>)}
  
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

                    </h4>
                </div> : ""}
                <div className='add-info my-3'>
                    <h3 className='my-3'>Additional information</h3>
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="inner">
                                <p className='m-0'>Title</p>
                                {gameDetail.title}
                                
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="inner">
                                <p className='m-0'>Developer</p>
                                {gameDetail.developer}
                                
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="inner">
                                <p className='m-0'>Puplisher</p>
                                {gameDetail.publisher}
                                
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="inner">
                                <p className='m-0'>Release Date</p>
                                {gameDetail.release_date}
                                
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="inner">
                                <p className='m-0'>Genre</p>
                                {gameDetail.genre}
                                
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="inner">
                                <p className='m-0'>Platform</p>
                                {
               gameDetail.platform == "Windows"
               ? <><i className="fa-brands fa-windows"></i> Windows</> : <i class="fa-solid fa-window-maximize"></i>
       }
                                
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
 </div> : <Loading/>}
 
 
 
 </>
}
