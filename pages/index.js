import { useState } from "react"

export default function Home() {
  
  const [name,setName]=useState('')
  const posthandler=async ()=>{
    const res = await fetch('/api/data',{
      method:"POST",
      body: JSON.stringify({name}),
      headers:{
        "Content-Type":"application/json"
      }
    })
    const data =await res.json()
    console.log(data)
  }
  return (
    <>
     <div>connect db to next</div>
     <input type="text" name="" id="" value={name} onChange={e => setName(e.target.value)}/>
     <button onClick={posthandler}> click to connect</button>
    </>
  )
}
