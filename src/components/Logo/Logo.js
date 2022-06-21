import Tilt from 'react-parallax-tilt';
import './Logo.css'
import brain from './brain.svg';

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt  className="shadow-2 br2 Tilt" style={{ height: '100px', width: '100px' }}>
        <div className="Tilt-inner"><img style={{padding: '5px'}}  src={brain} alt="logo" /></div>
      </Tilt>
    </div>
  )
}

export default Logo