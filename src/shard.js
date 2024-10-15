import React from "react";
import './Shard.css'

const Shard = (props) => {
    return(
        <div className="Shard">
            <img src={props.Source}></img>
            <p>
                {props.Text}
            </p>
            <p className="Price">Cena: {props.Price}</p>
        </div>
    )
}


export default Shard;


