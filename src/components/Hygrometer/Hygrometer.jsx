import ReactSlider from 'react-slider';
import { useEffect, useState } from 'react';
import './Hygrometer.css';
import { useClimate } from '../../context/ClimateContext';


function Hygrometer() {
  //pull the humidity values from the imported useClimate
  const { greenhouseHumidity, setGreenhouseHumidity } = useClimate();
  //create a use state to keep track of the changing humidity
  //set it equal to the current humidity
  const [humidity, setHumidity] = useState(greenhouseHumidity);

  useEffect(() => {
    const humidityAdjuster = () => {
      if (greenhouseHumidity > humidity) {
        setHumidity(prevHumidity => prevHumidity + 1)
      }
      if (greenhouseHumidity < humidity) {
        setHumidity(prevHumidity => prevHumidity - 1)
      }
    }

    if (greenhouseHumidity != humidity) {
      const timer = setTimeout(humidityAdjuster, 1000);
      return () => clearTimeout(timer)
    }

  }, [greenhouseHumidity, humidity, setHumidity])


  return (
    <section>
      <h2>Hygrometer</h2>
      <div className="actual-humid">Actual Humidity: {humidity}%</div>
      <ReactSlider
        value={greenhouseHumidity}
        onAfterChange={(val) => setGreenhouseHumidity(val)}
        className="hygrometer-slider"
        thumbClassName="hygrometer-thumb"
        trackClassName="hygrometer-track"
        ariaLabel={"Hygrometer"}
        orientation="vertical"
        min={0}
        max={100}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Hygrometer;
