import { useEffect, useState } from 'react'

const useFetch = (url)=>{

  const [data,setData] = useState(null);
  const [error,setError] = useState(null);          ///custom hooks

  useEffect(()=>{
    setTimeout(()=>{
      fetch(url)
   .then((response)=>{
    if(!response.ok){
      throw new Error("Unexpected error happened!")
    }
    return response.json()})
   .then((value)=>setData(value))
   .catch(err=>{setError(err.message)});
    },1000)
    
  },[url])

  return [data,error];
}

export default useFetch;