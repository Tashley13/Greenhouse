import { createContext, useContext, useState } from "react";
// Temperature has a default value of 50 degrees
// Humidity has a default value of 40%
export const ClimateContext=createContext();

export const useClimate = () => useContext(ClimateContext);

export default function ClimateProvider({children}) {
    const [ greenhouseTemp, setGreenhouseTemp] = useState(50);

    return (
        <ClimateContext.Provider
        value = {{
            greenhouseTemp,
            setGreenhouseTemp
        }}
        >
            {children}
        </ClimateContext.Provider>
    )
}
