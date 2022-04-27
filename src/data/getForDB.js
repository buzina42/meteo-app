import { openDB } from 'idb';
import { useContext } from "react";
import { StoreNameContext } from "../context/storeName-context.js";

// получить значения по выбранному интервалу(диапазон индексов)
export async function useGetDataIntervalForDB(props) {

  const {state} = useContext(StoreNameContext)

  const db = await openDB("parameters", 1);
  const range = IDBKeyRange.bound(props);//{"1881-01-08","2006-01-15"} 
  let year = await db.getAllFromIndex(state, "year", range);
  console.log("year: ", year);
  return year;
}

//получить информацию о хранилищах
export async function getNameStore() {
  
  const db = await openDB("parameters", 1);
  db.count("temperature").then(console.log);

}
