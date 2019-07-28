import React from 'react';

const tile = (props) => (
    <div className="item" onClick={props.clicked}>
        {props.element}
    </div>
)

export default tile;