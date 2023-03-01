import './App.css';
import Home from './Home';
import axios from 'axios';
import React,{useEffect,useState} from 'react';
import { useDispatch,useSelector } from "react-redux";
import { get_data } from './redux/action/action';
import Movies from './conmponents/Movies'
import Navbar from "./conmponents/Navbar"
function App() {
  const[data,setData]=useState([])
  const [search,setSearch]=useState("")
  // const dispatch=useDispatch()
  useEffect(()=>{
    // dispatch(get_data())
    axios.get("http://192.168.3.98:3333/api/getallpost")

    .then((res)=> setData(res.data))
    .catch((errer)=>console.log(errer))
  },[])
  const handleChange=(e)=>{
    // data.filter((el)=>el.title.includes(search)?setData([el]):null)
    setSearch(e.target.value)
  }

  // const product=useSelector(state=>state.produitpost)
  // const html=`<p>how kifech n3addi props</p>`
  return (
    <div className="App">
      <Navbar handleChange={handleChange} />
       {data.filter((el)=>el.title.includes(search)).map((el)=>{
        return(
          <div className='mycard'>
            <Movies movie={el}/>
          </div>
        )
       })}

 
    </div>
  );
}

export default App;
