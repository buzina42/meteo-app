import { openDB } from 'idb';


export default async function OpenMyDB({one, two}) {
	const selectStore = one;
	const arrData = two;

	const db = await openDB("parameters", 3,{
		upgrade: (db, oldVersion, newVersion, transaction) => {    
			//if (oldVersion === 0) createStore();	
			//if (!db.objectStoreNames.contains(state)) addItem(); 
			switch (oldVersion) {
				case 0:
					console.log("CASE0")
					if (!db.objectStoreNames.contains(selectStore)) addItem();
					break;
				case 1:
					console.log("CASE1");
					if (!db.objectStoreNames.contains(selectStore)) addItem();
				  	break;
				case 2:
					console.log("CASE2");
					if (!db.objectStoreNames.contains(selectStore)) addItem();
					break;	  
				default:
				    console.error('unknown db version');
			}

			function addItem(){
				db.createObjectStore(selectStore, { autoIncrement: true }); 
				console.log("СОЗДАНИЕ СТОРА");
				arrData.forEach(item => {
					transaction.objectStore(selectStore).add(item)
				});
				console.log("ЗАГРУЗКА ДАННЫХ В СТОР");
				transaction.objectStore(selectStore).createIndex("year", "t");
				console.log("СОЗДАНИЕ ИНДЕКСА");
			}
			
		},
	});
	db.close();
}