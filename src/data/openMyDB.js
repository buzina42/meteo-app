import { openDB } from 'idb';
import { useContext } from "react";
import { StoreNameContext } from "../context/storeName-context.js";

export default async function OpenMyDB(props) {
	const {state} = useContext(StoreNameContext)
	const db = await openDB("parameters", 1,{
		upgrade(db, transaction) {    
			function addItem(){
				db.createObjectStore(state, { keyPath: "t" })
				const store = transaction.objectStore(state);  
				props.data.forEach(item => store.add(item));
				store.createIndex("year", "t");
			}
			if (!db.objectStoreNames.contains(state)) addItem();
		}
	})
}

