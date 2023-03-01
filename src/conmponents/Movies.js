import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import UpdateMovie from "./UpdateMovie"
import axios from 'axios';
function BasicExample({movie}) {
    const [more,setMore]=useState(false)
    const deletemovie=(id)=>{
        axios.delete("http://192.168.3.98:3333/api/deletepost/"+id)
        .then((res)=>{
            if(res.data ==="podt hase ben deleted"){
                window.location.href="http://localhost:3000"

            }
        })
    }
  return (
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" className='myimage' src={movie.imageUrl} alt="" />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Title>{movie.namee}</Card.Title>

        <Card.Text  onClick={()=>setMore(!more)}>
        {more===true?movie.body:movie.body.slice(0,50)+"..."}
       {more===true?<ArrowDropUpIcon />:<ArrowDropDownIcon />}
        </Card.Text>
        <UpdateMovie movie={movie}/>
        <Button variant="danger" onClick={()=>deletemovie(movie.id)}>Delete</Button>
        <div>{movie.created_at.slice(0,10)}</div>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;