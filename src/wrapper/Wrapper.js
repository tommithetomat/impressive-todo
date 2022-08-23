import './wrapper.scss'
import Weather from '../weather/Weather';
import Menu from '../menu/Menu';

const Wrapper = () => {
  return (
    <div className="wrapper">
      <Weather/>
      <Menu/>
    </div>
  )
}

export default Wrapper;