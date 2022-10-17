import './MemeList.scss'

import MemeBoard from '../MemeBoard/MemeBoard'

import Button from "@mui/material/Button"

import { useState, useEffect } from 'react'

import arrayShuffle from 'array-shuffle';

const MemeList = () => {
    const [memes, setMemes] = useState([])

    const refetch = () => {
        fetch('https://api.imgflip.com/get_memes')
        .then(function(response) {
            return response.json()
        })
        .then(function(response) {
            setMemes(arrayShuffle(response.data.memes))
        })
        .catch(function(err) {
          console.log("Error:"+err);
        })        
    }

    useEffect(() => {
        refetch()
    }, []);

    return ( 
        <div className="meme-container">
            <Button variant="contained" onClick={() => refetch()} className="btn-loadmemes">LoadMemes</Button>
            <MemeBoard memes={memes.slice(0,12)} />
        </div>
    );
}
 
export default MemeList;