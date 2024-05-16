import ReactSlider from 'react-slider';
import { useEffect, useState } from 'react';
import './Thermometer.css';
import { useClimate } from '../../context/ClimateContext';

function Thermometer() {
  //pull the climate temps
  const {greenhouseTemp, setGreenhouseTemp} = useClimate();
  //desired temp useState, set it equal to the current temp
  const [temp, setTemp]= useState(greenhouseTemp);

  useEffect(()=> {
    const temperatureAdjuster = () => {
      //add 1 if the chosen temp is greater than the current
      if (greenhouseTemp > temp) {
        setTemp(prevTemp=> prevTemp +1)
      }
      //subtract 1 if the chosen temp is less than the current
      if (greenhouseTemp <temp) {
        setTemp(prevTemp=> prevTemp -1)
      }
    };

    //timer to check if the temperatures are equal
    if(greenhouseTemp!= temp) {
      //creating a variable to clear in the return below
      const timer=setTimeout(temperatureAdjuster, 1000);
      return() =>clearTimeout(timer)
    }
    //keep an eye on:
  }, [greenhouseTemp, temp, setTemp])
  //Actual temperature will be the temp useState as it will be changing
  //each time in the useEffect
  return (
    <section>
      <h2>Thermometer</h2>
      <div className="actual-temp">Actual Temperature: {temp}°F</div>
      <ReactSlider
        value={greenhouseTemp}
        onAfterChange={(val) => setGreenhouseTemp(val)}
        className="thermometer-slider"
        thumbClassName="thermometer-thumb"
        trackClassName="thermometer-track"
        ariaLabel={"Thermometer"}
        orientation="vertical"
        min={0}
        max={120}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Thermometer;
