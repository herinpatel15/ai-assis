import React from 'react';

const Cards = ({title,type,ct}) => {
    const url = `https://source.unsplash.com/random/?${ct}`;
    return (
        <> 
            <div className="card">
                <img src={url} className="card-img-top" alt="content-img" height="200"/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="c-text">Create Production quality...</p>
                    <p className="c-text text-capitalize">{type}</p>
                    <a href="#" >Learn now</a>
                </div>
            </div>
        </>
    )
};

export default Cards;