import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <>
            <div className="nav-box ">
                <div className="nav-bar ">
                    <div className="home">
                        <Link className="logo" to='/'><span>ai</span> Assistant</Link>
                    </div>
                    <div className="list text-light">
                        <div className="items">
                            <Link className="item" to='/Tools'>Ai Tools</Link>
                            <span className="item">Ai Assistant</span>
                            <span className="item">Ai News</span>
                            <span className="item">Blogs</span>
                            <Link className="item " to='/About'>About</Link>
                        </div>
                        <div className="icons">
                            <span className=" bar-logo"><i class="fa-solid fa-lines-leaning"></i></span>
                            <span className="profile-logo"><i className="fa-solid fa-user"></i></span>
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
};

export default Nav;