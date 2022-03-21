
import { openDB } from 'idb';

const url1 = "./precipitation.json";
const url2 = "./temperature.json";

fetch(url1)
/* 
examplObj = {
    "t":"1111-11-11",
    "v":11
} 
*/

//Создание базы
async function doDatabase() {
  const db = await 
    openDB("parameters", 1,{
        upgrade(db) {       
            db.createObjectStore("precipitation", { keyPath: 'id' });
                precipitation.forEach(item => {
                    transaction.objectStore("precipitation").add(item);
                })
            db.createObjectStore("temperature", { keyPath: 'id' });
                temperature.forEach(item => {
                    transaction.objectStore("temperature").add(item);
                 })
        }
    })
}

// Получение данных по выбранному интервалу

async function getDataForSelectedInterval(prop) {
    const db = await openDB("parameters", 1);
    const transaction = db.transaction(prop.data);
    const  allIndex = transaction.objectStore(prop.data);
    let getIndex = await allIndex.getAll(10);
  } 
  console.log(doDatabase());