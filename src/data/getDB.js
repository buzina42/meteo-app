import { openDB } from 'idb';

// получить значения по выбранному интервалу(диапазон индексов)
export default async function getDataInterval(props) {
    // const db = await openDB("parameters", 1);
    // let transaction = db.transaction([props.db], "readonly");
    // const range = IDBKeyRange.bound(props.dates);//{"1881-01-08","1881-01-15"}
    // let year = transaction.getAllFromIndex(props.store, "yearIndex", range);
    // console.log("year: ", year);
    // return year;
  }
