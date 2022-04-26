import { useEffect, useState } from 'react';
import fetchForDB from "./fetchForDB.js"

//эффект для загрузки данных с сервера в idb
export default function useDbData(props) {
  console.log(`пропс из data ${props}`)
  const [temperature, setTemperature] = useState(null);
  const [precipitation, setPrecipitation] = useState(null);
  
  useEffect(() => {
      fetchForDB(props).then(data => {
        if (props === "temperature") {
          setTemperature(data);
        } else setPrecipitation(data);
        
      })
  }, [])
  return (props === "temperature" ? temperature : precipitation );
}