import React from 'react';

const Player = ({player}) => {
    const {name,biddingPrice}=player;
    return (
        <div>
            <h1>{name}</h1>
            <h1>{biddingPrice}</h1>
        </div>
    );
};

export default Player;