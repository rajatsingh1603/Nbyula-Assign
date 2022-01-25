import React from 'react';
import add from '../Img/add.png'
import '../home/home.css'
import Button from '@mui/material/Button';
import uuid from 'react-uuid';
import { useHistory } from 'react-router-dom';

function Home() {
    const history = useHistory();
    const createForm = () =>{
        const id = uuid();
        
        history.push("/form/"+id)
    }
    return <div>
        <div className='add'>
            <img src={add}></img>
        </div>
        <div className='quote'>
        <Button variant="contained" onClick={createForm}>create quiz</Button>
        </div>
    </div>;
}

export default Home;
