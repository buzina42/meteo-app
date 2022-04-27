import { openDB } from 'idb';


export default async function OpenMyDB({one}) {
	const selectStore = one;

	const db = await openDB("parameters", 1,{
		upgrade(db, oldVersion, newVersion, transaction) {    
			if (oldVersion === 0) createStore();	
			function createStore(){
				db.createObjectStore("temperature", { autoIncrement: true }); 
				db.createObjectStore("precipitation", { autoIncrement: true });
				console.log("СОЗДАНИЕ СТОРА");
			}
		},
	});
	db.close();
}