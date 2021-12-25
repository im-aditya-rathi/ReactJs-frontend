// import "./login.css";
import { Link } from "react-router-dom";
import {useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";

const axios = require('axios');

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // this redirects to USER PROFILE if details matches
    const history = useHistory();

    // Make a request for a user with a given ID
    useEffect(() => {
  
    axios.get('https://cors-anywhere.herokuapp.com/https://www.getpostman.com/collections/d8dead6a15e80c4b7a61')
      .then(function (response) {
        // handle success
        let data = JSON.parse(response.data.item[0].item[0].request.body.raw);
        
        console.log("*********** API data fetch result ***********");
        console.log(data.email);
        console.log(data.password);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    
    }, [])


    async function login(e)
    {
        e.preventDefault();

        console.log("############ user entered ##########");
        console.log(email);
        console.log(password);

        let item = {email,password};
        let result = await fetch("https://cors-anywhere.herokuapp.com/https://www.getpostman.com/collections/d8dead6a15e80c4b7a61",{
            method: 'POST',
            headers:{
                "Content-Type":"application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(item)
        });
        result = await result.json();
        localStorage.setItem("user-info",JSON.stringify(result));
        history.push("/profile");

    }

    return (
        <>
            {/* <!-- ************************************************************ --> */}
            {/* <!-- first part --> */}
            <div className="signupfirst pb-2">
                {/* <!-- header part --> */}
                <header className="navbar">
                    <div className="navbar-brand">
                        <span className="brand1">My</span><span className="brand2">Jobs</span>
                    </div>
                </header>
                <hr />
            </div>

            <div className="second" id="loginsecond">
                <form onSubmit={login} className="row" >
                    <div className="col-3"></div>
                    <div className="col-6 loginbox py-4 px-4">
                        <h4 className="fw-bold py-2">Login</h4>
                        <div className="mb-3">
                            <label htmlFor="useremail" className="form-label">Email address</label>
                            <input type="email" onChange={(e)=>setEmail(e.target.value)} className="form-control" id="useremail" placeholder="Enter Your Email" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="userpassword" className="form-label">Password</label>
                            <Link to="/forgetpass" className="floatlink">Forgot Your Password?</Link>
                            <input type="password" onChange={(e)=>setPassword(e.target.value)} className="form-control" id="userpassword" placeholder="Enter Your Password" required />
                        </div>
                        <button type="submit"  className="btn btn2 my-5 px-4 d-block mx-auto">Login</button>
                        <div className="mx-auto movecenter">
                            New to MyJobs? <Link to="/signup" className="linkunderline">Create an account</Link>
                        </div>
                    </div>
                </form>
                <div className="col-3"></div>
            </div>
        </>
    );
}

export default Login;