import { openDB } from 'idb';
import addItemForStore from './addItemForStore.js';

// получить значения по выбранному интервалу(диапазон индексов)
export async function getDataIntervalForDB(store, data, data2) {
  console.log("интервал для идб "+ store, data, data2);
  const db = await openDB("parameters", 1);
  const range = IDBKeyRange.bound(data, data2);
  let year = await db.getAllFromIndex(store, "year", range);
  return year;
}

//получить информацию о хранилищах
export async function getCountStore(store, data) {
 console.log(store);
  const db = await openDB("parameters", 1);
  let result = await db.count(store)
      .then(res => {return res})
      .catch(console.log.bind(console));
  if (result === 0){ addItemForStore(data, store)};
}
