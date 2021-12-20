import GoogleLogin from 'react-google-login';
import React from 'react'

function GoogleButtonLogin() {
    const responseGoogle = (response) => {
        console.log(response);
        sessionStorage.setItem('token', JSON.stringify(response.data));
        // history.push("/dashboard/home");

    }
    return (
        <GoogleLogin
            clientId="85583281265-1a2q3oaj5vhmb6k7udesi7ejmao94ts7.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />

    );
}

export default GoogleButtonLogin


