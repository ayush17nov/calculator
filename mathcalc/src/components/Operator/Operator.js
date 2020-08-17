import React from 'react';
import Aux from '../../hoc/Aux/Aux';

const operator = (props) => (
    <Aux>
        <h3>Number1</h3>
        <input type="text" defaultValue={props.no1} 
            onChange={(event) => props.resultChange(event, 1, props.no2)} />
        <h3>Number2</h3>
        <input type="text" defaultValue={props.no2} 
            onChange={(event) => props.resultChange(event, 2, props.no1)} />
    </Aux>
)

export default operator