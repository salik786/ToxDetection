import { useState } from "react";
import { Link } from "react-router-dom"
import axios from "axios";
import GoogleButtonLogin from './googleLogin';


import { useHistory } from "react-router-dom"
const Login = () => {
    const history = useHistory();
    const [dataLogin, setDataLogin] = useState({
        email: "",
        password: "",


    })

    const handleInput = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        setDataLogin({ ...dataLogin, [name]: value })

    }

    // here we will send get request to fetch data and check wheteher its true credentials on not
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(dataLogin)
        // Note:Get axios request do not have body or data that we will send will show null onject in backend so use post instead if want to send data from frontend to backend
        axios.post("http://localhost:6563/User/login",
            dataLogin).then((res) => {
                console.log(res.data);
                sessionStorage.setItem('token', JSON.stringify(res.data));
                history.push("/dashboard/home");
            }
            ).catch(err => {
                console.log(err);
                history.push('/login')
            })
    }
    return (
        <>
            <div className="social-login">
                <p>Sign Up/Register From Social Accounts</p>
                <div className="social-btns">
                    <button className="soc-btn fb">Facebook</button>
                    <button className="soc-btn goog" >Google</button>
                    <button type="submit" className=""><Link to="/login" component={GoogleButtonLogin}>Login</Link></button>
                    <button className="soc-btn twit">Twitter</button>
                </div>
            </div>
            <div className="login-form-container">

                <form className="login-form" method="get" onSubmit={handleSubmit}>
                    <label htmlFor="email">Username or Email</label>
                    <input type="text"
                        value={dataLogin.email}
                        onChange={handleInput}
                        name="email" id="email" />
                    <label htmlFor="password">Password</label>
                    <input type="password"
                        value={dataLogin.password}
                        onChange={handleInput}
                        name="password" id="password" />
                    <button type="submit">Login</button>
                    <button type="submit"><Link to="/register">Register</Link></button>
                </form>

            </div>

        </>

    )

}
// PropTypes is a library that helps in minimizing this problem in React by checking the types passed in the props object against a
// specification we set beforehand and to raise a warning if the types passed don't match the types expected.
// Login.propTypes = {
//     setToken: PropTypes.func.isRequired
// }
export default Login;