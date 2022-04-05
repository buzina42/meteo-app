import { openDB } from 'idb';
import { useContext } from "react";
import { StoreNameContext } from "../context/storeName-context.js";

export default async function openMyDB({info}) {
	const nameStore = useContext(StoreNameContext)
	const db = await openDB("parameters", 1,{
		upgrade(db, transaction) {    
			function addItem(){
				db.createObjectStore(nameStore, { keyPath: "t" })
				const store = transaction.objectStore(nameStore);  
				info.data.forEach(item => store.add(item));
				store.createIndex("year", "t");
			}
			if (!db.objectStoreNames.contains(nameStore)) addItem();
		}
	})
}

