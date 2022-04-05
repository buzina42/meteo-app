const db = await openDB("parameters", 1,{
    upgrade(db, oldVersion, newVersion, transaction) {       
        db.createObjectStore("temperature", { keyPath: 't' });
        temperature.forEach(item => {
          transaction.objectStore("temperature").add(item);
        })
        const store = transaction.objectStore("temperature");
        store.createIndex("year", "t");
    }
  })