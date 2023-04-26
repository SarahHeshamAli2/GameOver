import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { GamesStore } from '../../Context/GamesStore'

export default function Navbar({currentUser,clearUserData}) {

  const navigate = useNavigate()

const {getPlatform,sortedGames,categorieGames}= useContext (GamesStore)

    return <>
    

    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
  <div className="container align-items-center ">
    <Link to={"/"} className='text-decoration-none text-white '>       <img src={require("../../images/logo.png")} alt="" width={70}/>
    <span className='game p-0 m-0'>        Game Over
</span>
    </Link>






      

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        
  
      {
            currentUser != null ?  
            <>
                <ul className='navbar-nav mx-5 mb-2 mb-lg-0'>
   <Link to={"/"} className='blck'>
   <li className="nav-item mx-3">
      Home
    </li >
   </Link >
        <Link className='blck' to={"/all"}>
        
        <li className="nav-item ">
      All
    </li >
        </Link>

 

  <li className="nav-item dropdown ">
          <a className="nav-link dropdown-toggle p-0 mx-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Platforms
          </a>
          <ul className="dropdown-menu">
         
       <Link to={"/pc"}>
       
       <li><a className="dropdown-item"   id='pc' onClick={function(){
              getPlatform(document.getElementById("pc").innerText)
            }}>pc</a></li>
       </Link>
       <Link to={"/browser"}>
       
       <li><a className="dropdown-item"   id='browser' onClick={function(){
              getPlatform(document.getElementById("browser").innerText)
            }}>browser</a></li>
       </Link>
          </ul>
        </li>
  <li className="nav-item dropdown ">
          <a className="nav-link dropdown-toggle p-0 mx-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Sort by
          </a>
          <ul className="dropdown-menu">
            <Link to={`sortBy/release-date`}>
            
            <li><a className="dropdown-item" id='release' onClick={function(){
              sortedGames(document.getElementById("release").innerText)
            }}>release-date</a></li>

            </Link>
            <Link to={"sortBy/popularity"}>
            <li><a className="dropdown-item" id='pop' onClick={function(){
              sortedGames(document.getElementById("pop").innerText)
            }}>popularity</a></li>

            
            </Link>
            <Link to={"sortBy/alphabetical"}>
            <li><a className="dropdown-item" id='alph' onClick={function(){
              sortedGames(document.getElementById("alph").innerText)
            }}>alphabetical</a></li>

            </Link>

            <Link to={"sortBy/relevance"}>
            <li><a className="dropdown-item" id='relv' onClick={function(){
              sortedGames(document.getElementById("relv").innerText)
            }}>relevance</a></li>

            
            
            </Link>
          </ul>
        </li>
  <li className="nav-item dropdown ">
          <a className="nav-link dropdown-toggle p-0 mx-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Categories
          </a>
          <ul className="dropdown-menu">
            <Link to={"categories/racing"}>
            
            <li  >
              
           

              <a id='race' value="race" className="dropdown-item" onClick={function(){
              categorieGames(document.getElementById("race").innerText)
            }}>racing</a></li>
            </Link>
            <Link to={"categories/sports"}>
            <li><a className="dropdown-item" id='sport'  onClick={function(){
              categorieGames(document.getElementById("sport").innerText)
            }}> Sports</a></li>

            
            </Link>
            <Link to={"categories/social"}>
            <li><a id='social' className="dropdown-item"onClick={function(){
              categorieGames(document.getElementById("social").innerText)
            }} >social</a></li>

            </Link>
            <Link to={"categories/shooter"}>
            <li><a className="dropdown-item" id='shoot' onClick={function(){
              categorieGames(document.getElementById("shoot").innerText)
            }}>Shooter</a></li>

            </Link>
            <Link to={"categories/open-world"}>
            <li><a className="dropdown-item"id='open' onClick={function(){
              categorieGames(document.getElementById("open").innerText)
            }}>Open-world</a></li>

            </Link>
            <Link to={"categories/zombie"}>
            <li><a className="dropdown-item" id='zombie' onClick={function(){
              categorieGames(document.getElementById("zombie").innerText)
            }}>Zombie</a></li>

            </Link>
            <Link to={"categories/fantasy"}>
            <li><a className="dropdown-item" id='fant' onClick={function(){
              categorieGames(document.getElementById("fant").innerText)
            }}>fantasy</a></li>

            </Link>
            <Link to={"categories/action-rpg"}>
            <li><a className="dropdown-item" id='action' onClick={function(){
              categorieGames(document.getElementById("action").innerText)
            }}>Action-rpg</a></li>

            </Link>
            <Link to={"categories/action"}>
            
            <li><a className="dropdown-item" id='ac' onClick={function(){
              categorieGames(document.getElementById("ac").innerText)
            }}>Action</a></li>

            </Link>

            <Link to={"categories/flight"}>
            <li><a className="dropdown-item"  id='flight' onClick={function(){
              categorieGames(document.getElementById("flight").innerText)
            }}>Flight</a></li>

            </Link>
            <Link to={"categories/battle-royale"}>
            <li><a className="dropdown-item" id='battle' onClick={function(){
              categorieGames(document.getElementById("battle").innerText)
            }}>battle-royale</a></li>

            </Link>
          </ul>
        </li>
    </ul>
            
        
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link onClick={clearUserData} to={"/login"} className="nav-link join border border-1 rounded-2" href="#">Log out</Link>
          </li>      </ul>   </>: <>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item mx-3">
          <Link to={"/login"} className="nav-link active login" aria-current="page" href="#">Login</Link>
        </li>
        <li className="nav-item">
          <Link to={"/register"} className="nav-link join border border-1 rounded-2" href="#">Join Free</Link>
        </li>
        </ul>
        </>
        }
    
      
   

     
  
    
    </div>
  </div>
</nav>
    
    
    
    
    
    
    </>
}
