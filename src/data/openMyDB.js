import { openDB } from 'idb';


export default async function OpenMyDB() {
	await openDB("parameters", 1,{
		upgrade(db, oldVersion, newVersion, transaction) {    
			if (oldVersion === 0) createStore();	
			function createStore(){
				db.createObjectStore("temperature", { autoIncrement: true }); 
				transaction.objectStore("temperature").createIndex('year', 't');
				db.createObjectStore("precipitation", { autoIncrement: true });
				transaction.objectStore("precipitation").createIndex('year', 't');
			}
		},
	});
}