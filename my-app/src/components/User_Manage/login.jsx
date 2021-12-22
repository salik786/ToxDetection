import { useState } from "react";
import { Link } from "react-router-dom"
import axios from "axios";
import GoogleButtonLogin from './googleLogin';

// this component is hep to login user 
import { useHistory } from "react-router-dom"

const Login = () => {
    const history = useHistory();
    const [dataLogin, setDataLogin] = useState({
        email: "",
        password: "",


    })
    // handling data from login form
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
        <div className="" style={{ backgroundColor: "#03173D", height: "100vh" }}>
            <div className=" text-center text-white p-4 " style={{ backgroundColor: "#3e2cb7" }}>
                <h3>Login Here</h3>

            </div>
            <div className="d-flex h-50 justify-content-center align-items-center shadow-lg p-3  rounded "  >

                <div className="bg-light w-50   shadow-lg p-3 mt-5 rounded" style={{ padding: "20px" }} >
                    <div className="social-login">

                        <div className="social-btns ">

                            <div className=" shadow-lg   rounded"><Link to="/login" component={GoogleButtonLogin}>Login</Link></div>
                        </div>
                    </div>
                    <form className="login-form w-100" method="get" onSubmit={handleSubmit}>
                        <label htmlFor="email">Username or Email</label>
                        <input type="text "
                            value={dataLogin.email}
                            onChange={handleInput}
                            name="email" id="email" />
                        <label htmlFor="password">Password</label>
                        <input type="password"
                            value={dataLogin.password}
                            onChange={handleInput}
                            name="password" id="password" />
                        <button type="submit " className="btn btn-primary p-2">Login</button>
                        <div className="m-4">
                            <Link to="/register" className="text-primary">Or register yourself here  </Link>
                        </div>

                    </form>

                </div>

            </div>
        </div>
    )

}

export default Login;