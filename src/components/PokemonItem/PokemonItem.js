import React from 'react';
import './PokemonItem.scss'

const PokemonItem = (props) => (
    <div className="item">
                <div className="heading">
                    <div>{props.name}</div>
                    <div>{props.id}</div>
                </div>
                <div className="content">
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`} />
                </div>
            </div>
);

export default PokemonItem;