import { openDB } from 'idb';

export async function addItemForStore(propsStore, PropsarrData) {
    
    const db = await openDB("parameters", 1);
    let transaction = db1.transaction((propsStore), 'readwrite');
    PropsarrData.forEach(item => {
        transaction.store.add(item)
    });
    transaction.store.createIndex("year", "t");
    transaction.done
      .then(() => {
        console.log('Добавлено успешно!');
      })
      .catch(() => {
        console.error('Что-то пошло не так');
      });
    db.close();
  }