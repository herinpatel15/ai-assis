import React, { useEffect, useState } from 'react';
import data from './data';
import Cards from './Cards';

const Tools = () => {
    const [item, setItem] = useState(data);

    const show = () => {
        setItem(data);
        console.log(item);
    };

    const showPaid = () => {
        setItem(() => {
            return data.filter((val) => {
                return val.type === "paid";
            });
        });
    };

    const showFree = () => {
        setItem(() => {
            return data.filter((val) => {
                return val.type === "free";
            });
        });
    }

    return (
        <>
            <div className="tool-container">
                <div className="upper-box">
                    <h1 className="logo"><span>Ai</span> World</h1>
                    <div className="inp-box">
                        <i class="fa-solid fa-magnifying-glass fo-s"></i>
                        <div className="text-ip" >search...</div>
                        <i class="fa-solid fa-circle-chevron-right fo-s text-danger"></i>
                    </div>
                    <div className="category-box">
                        <span className='item'>Music Ai</span>
                        <span className='item'>Image Ai</span>
                        <span className='item'>Video Ai</span>
                        <span className='item'>Voice Ai</span>
                        <span className='item'>PPT Ai</span>
                        <span className='item'>Prompt Ai</span>
                    </div>
                </div>
                <div className="lowwer-box">
                    <div className="filter-list">
                        <span className="item fo-s" onClick={show}>All</span>
                        <span className="item fo-s" onClick={showPaid}>Paid</span>
                        <span className="item fo-s" onClick={showFree}>Free</span>
                    </div>
                    <div className="cards-box">
                        {
                            item.map((v, i) => {
                                return <Cards key={i} title={v.title} type={v.type} ct={v.ct} />
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tools;