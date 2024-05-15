import './ClimateStats.css';
import { useClimate } from '../../context/ClimateContext';
function ClimateStats() {
const {greenhouseTemp, greenhouseHumidity} = useClimate();
  return (
    <div className="climate-stats">
      <div className="temperature">
        Temperature {greenhouseTemp}°F
      </div>
      <div className="humidity">
        Humidity {greenhouseHumidity}%
      </div>
    </div>
  )
}

export default ClimateStats;
