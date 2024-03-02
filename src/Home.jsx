import React from 'react';

const Home = () => {
    const url = 'https://source.unsplash.com/random/?nature';
    return (
        <>
            <div className="home-box">
                <div className="img-box">
                    <div className="circle">
                        <div className="inner">
                           <img src={url} alt='image' width="450" height='450'/>
                        </div>
                    </div>
                </div>
                <div className="text-box">
                    <h1>Unlocking the world of <span>AI</span> tools</h1>
                    <span className='intro'>Explore AI Tools with Us: Your Gateway to the World of AI.Demystifying and Simplyfying AI for All.</span>
                    <div className="btns">
                        <button className='abtn rounded-pill'>Assistant</button>
                        <button className='lbtn  rounded-pill'>Learn More</button>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Home;