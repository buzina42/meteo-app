import { openDB } from 'idb';
import { useEffect, useState } from 'react';
import fetchForDB from "./fetchForDB.js"




//эффект для загрузки данных с сервера в idb
function useDbData(props) {
  const [temperature, setTemperature] = useState(null);
  const [precipitation, setPrecipitation] = useState(null);
  
    useEffect(() => {
        fetchForDB(props).then(data => {
          if (props === "temperature") {
            setTemperature(data);
          } else setPrecipitation(data);
         // console.log(data)
        })
    }, [])
    return temperature;
}

export default useDbData;