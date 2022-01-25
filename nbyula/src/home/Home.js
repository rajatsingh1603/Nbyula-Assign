import React from 'react';
import add from '../Img/add.png'
import '../home/home.css'
import Button from '@mui/material/Button';

function Home() {
    return <div>
        <div className='add'>
            <img src={add}></img>
        </div>
        <div className='quote'>
        <Button variant="contained">create quiz</Button>
        </div>
    </div>;
}

export default Home;
