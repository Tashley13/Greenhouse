import dayImage from './images/greenhouse-day.jpg';
import nightImage from './images/greenhouse-night.jpg';
import './Greenhouse.css';
import { useTheme } from '../../context/ThemeContext'
//import the useTheme variable from ThemeContext
import LightSwitch from './LightSwitch';
import ClimateStats from './ClimateStats';

function Greenhouse() {
  //create a destructured variable to equal to the invoked useTheme
  const {themeName} = useTheme();

  return (
    <section>
      <img  className='greenhouse-img'
            src={themeName=== "day" ? dayImage: nightImage}
            alt='greenhouse'
      />
      <LightSwitch />
      <ClimateStats />
    </section>
  );
}

export default Greenhouse;
