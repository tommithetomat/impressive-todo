import './menu.scss'
import Home from '../img/Home.svg'
import SpeachBubbles from '../img/Speach-Bubbles.svg'
import Bat from '../img/Bat.svg'

const Menu = () => {
  return(
    <div className="menu-wrapper">
      <div className="button-group">
        <button className="button">
          <img src={Home} alt="Home" />
        </button>
        <button className="button">
          <img src={SpeachBubbles} alt="Home" />
        </button>
        <button className="button">
          <img src={Bat} alt="Home" />
        </button>
      </div>
    </div>
  )
}

export default Menu;