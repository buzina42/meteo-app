import { useEffect, useState } from 'react';
import fetchForDB from "./fetchForDB.js"

//эффект для загрузки данных с сервера в idb
export default function useDbData(props) {
  console.log(`пропс из useDbData ${props}`);

  const [temperature, setTemperature] = useState(null);
  const [precipitation, setPrecipitation] = useState(null);
  
  useEffect(() => {
      fetchForDB(props)
        .then( data => {
          console.log(data[0])
          if (props === "temperature") {
            setTemperature(data);
          } else setPrecipitation(data);
        })
  }, [props])
  return (props === "temperature" ? temperature : precipitation); 
}