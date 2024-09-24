
"use client"
import React, { useEffect, useState } from 'react'

function DataFetchingComponent() {


  const[dataApi,setDataApi]=useState(null)
  const [error, setError] = useState(false);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json())
  .then(dataApi => setDataApi(dataApi))
  .catch(error => setError(error));
  })

    
  if (error) {
            return <div>
                error 
                {error.message}
            </div>
        }  else if (!dataApi) {
                  return <div>wait</div>;
              }
              else {
                return <div>
                Response from API:
                {JSON.stringify(dataApi)}
            </div>  
            }
           
}

export default DataFetchingComponent