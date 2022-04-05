import { openDB } from 'idb';

// получить значения по выбранному интервалу(диапазон индексов)
async function getDataInterval() {
    const db = await openDB("parameters", 1);
    const range = IDBKeyRange.bound("1881-01-08","1881-01-15");
    let year = await db.getAllFromIndex("temperature", "yearIndex", range);
    console.log("year: ", year);
    return year;
  }
export default getDataInterval;
