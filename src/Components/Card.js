import React from "react";

const Card = ({name,src,href,desc}) => {
    return(
        <div className="cd1">
            <div className="cd2">
                <h2 className="cd2d1">{name}</h2>
                <img src={src} alt="Project" className="cd2i1"/>
            </div>
            <div className="cd2">
                <p className="cd2p1">{desc}</p>
                <a className="cd2a1" href={href}>Click here to visit</a>
            </div>
        </div>
    )
}

export default Card;