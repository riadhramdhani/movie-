import React,{useState
} from 'react'

export default function Home({riadh}) {
    const [morning,setMorning]=useState(true)
    const [name1,setName1]=useState("")
    const [name2,setName2]=useState("")
  return (
    <div>
       
        {
            morning=== true? name1: name2
        }
        {riadh}
        
        <button onClick={()=>setMorning(!morning)}>switch</button>
        <div>
            <input onChange={(event)=>morning===true?setName1(event.target.value):setName2(event.target.value)} type="text"/>
        </div>
    </div>
  )
}
