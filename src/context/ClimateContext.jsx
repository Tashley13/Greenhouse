import { createContext, useContext, useState } from "react";
// Temperature has a default value of 50 degrees
// Humidity has a default value of 40%
export const ClimateContext=createContext();

export const useClimate = () => useContext(ClimateContext);

export default function ClimateProvider({children}) {
    const [ greenhouseTemp, setGreenhouseTemp] = useState(50);
    const [greenhouseHumidity, setGreenhouseHumidity] = useState(40);
//make sure the value of the context Provider is set to an object with a key
//to read the useState values
    return (
        <ClimateContext.Provider
        value = {{
            greenhouseTemp,
            setGreenhouseTemp,
            greenhouseHumidity,
            setGreenhouseHumidity
        }}
        >
            {children}
        </ClimateContext.Provider>
    )
}
