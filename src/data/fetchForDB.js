export default function fetchForDB (store) {
  console.log(`пропс из fetchForDB: ${store}`)
  
    return  fetch(`http://localhost:7000/${store}`, {
              method: "GET"
              })
              .then(response =>  response.json() )
  }
  