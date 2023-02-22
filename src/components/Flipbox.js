import { Link } from 'react-router-dom'

function Flipbox() {
  return (
    <div>
      <div className="navbar">
        <Link to="/intro">
        <img className="navbar-logo" src="../images/mobileregistered.png" alt="">
       </img></Link>
      <div className="flip-box">
        <div className="flip-box-inner">
          
          
    <div className="flip-box-front">
      <img className="flag-logo3" src="../images/goldmusic2.png" alt="Mexico"/>
          </div>

          <div class="flip-box-back">
      <img className="flag-logo4" src="../images/aguiladorada.jpeg" alt="Mexico"/>
              </div>
              
            </div>
            
        </div>
      </div>
      </div>
  )
}

export default Flipbox