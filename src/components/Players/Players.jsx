import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';

const Players = ({handleChoosePlayer}) => {
    const [players,setPlayers]=useState([])
    useEffect(()=>{
        fetch('players.json')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setPlayers(data)
        })
    },[])
    return ( 
        <div className=' grid grid-cols-3 gap-4 mt-10 '>
            {players.map(player=><Player handleChoosePlayer={handleChoosePlayer} key={player.id} player={player}></Player>)}
        </div>
    );
};

export default Players;