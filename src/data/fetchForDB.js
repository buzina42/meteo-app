export default function fetchForDB (props) {
  
    return fetch(`http://localhost:7000/${props}`, {
              method: "GET"
              }).then(response => { response.json()})
              .catch((error) => {
                console.log(error)
            })
  }
  