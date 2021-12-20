import React from 'react'
import { useState } from 'react'
import { Link, useRouteMatch, useHistory } from "react-router-dom"
import "./navbar-style.css"
import { AiOutlineHome, FaRegUserCircle, AiOutlineMinusCircle, HiOutlineLogout, BsFileText, IoMdArrowDropdown, VscGraph } from "react-icons/all"
function NavDashboard() {
    const history = useHistory();
    const { path, url } = useRouteMatch();
    const [toggle, setToggle] = useState("closed-container")
    const handleLogout = () => {
        sessionStorage.removeItem("token");
        history.push("/login");

    }
    const handleToggle = () => {
        toggle === "closed-container" ? setToggle("open-container") : setToggle("closed-container")
    }
    return (
        <>

            <div className="nav-dash-left">
                <div className="logo">
                    <h1><b className="text-format">Tox</b><i>D</i>etector</h1>
                </div>
                <ul>
                    <li className="nav-link nav-link-dash">   <AiOutlineHome /><Link to={`${url}/home`} className="nav-link" >Home</Link></li>
                    <li className="nav-link nav-link-dash "><FaRegUserCircle /><Link to={`${url}/List`} className="nav-link arrow-link" >List User</Link></li>
                    {/* <li className="nav-link nav-link-dash"><BsFileText /><Link to={`${url}/analyzer`} className="nav-link" >Tweets Analyzer</Link><div><FiArrowDownCircle /></div></li> */}

                    <button className="dropdown-btn" onClick={handleToggle}> <VscGraph style={{ "margin-right": "10px" }} />Tweet Analyzer<i className="drop-icon"><IoMdArrowDropdown size={20} /></i></button>
                    <div className={toggle}>
                        <Link to={`${url}/analyzer/tweet`} className="link">Tweets Analyzer</Link>
                        <Link to="Profile" className="link">Analytics By City</Link>
                        <Link to={`${url}/analyzer/UserAna`} className="link">User Profile Analytics</Link>
                    </div>
                    <li className="nav-link nav-link-dash"><AiOutlineMinusCircle /><Link to={`${url}/hateDetect`} className="nav-link" >Check Hate Speech</Link></li>
                    <li className="nav-link nav-link-dash"><BsFileText /><Link to={`${url}/dictionary`} className="nav-link" >Dictionary</Link></li>
                    <li className="nav-link nav-link-dash"><HiOutlineLogout /><Link to={"/"} className="nav-link" onClick={handleLogout}>Logout</Link></li>
                </ul >
            </div >


        </>
    )
}

export default NavDashboard
