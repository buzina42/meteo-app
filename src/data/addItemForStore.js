import { openDB } from 'idb';

export default async function addItemForStore(arrData, store) {
    console.log(store)
    const db = await openDB("parameters", 1);
    let transaction = db.transaction((store), 'readwrite');
    arrData.forEach(item => {
        transaction.store.add(item)
    });
    transaction.done
      .then(() => {
        console.log('Добавлено успешно!');
      })
      .catch(() => {
        console.error('Что-то пошло не так');
      });
  }