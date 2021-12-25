// import "./login.css";
import { Link, Redirect} from "react-router-dom";
import { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";

const axios = require('axios');

function Test() {


    // async function login(e)
    // {
    //     e.preventDefault();

    //     console.log("############ user entered ##########");
    //     console.log(email);
    //     console.log(password);

    //     let item = {email,password};
    //     let result = await fetch("https://cors-anywhere.herokuapp.com/https://www.getpostman.com/collections/d8dead6a15e80c4b7a61",{
    //         method: 'POST',
    //         headers:{
    //             "Content-Type":"application/json",
    //             "Accept": "application/json"
    //         },
    //         body: JSON.stringify(item)
    //     });
    //     result = await result.json();
    //     localStorage.setItem("user-info",JSON.stringify(result));
    //     history.push("/profile");
    // }


    // this redirects to USER PROFILE if details matches
    // const history = useHistory();

    // Make a request for a user with a given ID
    // var data;
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


    const [formData, setFormdata] = useState({});
    const [loginerror, setLoginerror] = useState("");
    const [redirect, setRedirect] = useState(false);
    const [loginPageR, setLoginPageR] = useState(false);


    const handleChange = (e) => {
        let { name, value } = e.target;
        setFormdata({ ...formData, [name]: value });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        let bool = false;
        axios.get('https://cors-anywhere.herokuapp.com/https://www.getpostman.com/collections/d8dead6a15e80c4b7a61')
        .then( res =>{
            console.log(res);
        if (res !== null) {
            let data = JSON.parse(res.data.item[0].item[0].request.body.raw);
            if (
                data.email === formData.Email &&
                data.password === formData.Password
            ) {
                console.log("succesful login");
                setLoginerror("");
                bool = true;
                setLoginPageR(true);
                // window.history.push("/profile");
                document.getElementsByClassName("logincheck").innerHTML = "Login SUCCESSFUL";
            }
            if (!bool) {
                console.log("wrong details");
                setLoginerror("Please enter correct details");
                document.getElementsByClassName("logincheck").innerHTML = "WRONG details";
            }
        } else {
            console.log("first create your account");
            setLoginerror("please register first ");
        }})
    };


    if (loginPageR) {
      return <Redirect to="/test" />;
    }
    if (redirect) {
        return <Redirect to="/profile" />;
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
                <form  className="row" >
                    <div className="col-3"></div>
                    <div className="col-6 loginbox py-4 px-4">
                        <h4 className="fw-bold py-2">Login</h4>
                        <div className="mb-3">
                            <label htmlFor="useremail" className="form-label">Email address</label>
                            <input name="Email" type="email" onChange={handleChange} className="form-control" id="useremail" placeholder="Enter Your Email" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="userpassword" className="form-label">Password</label>
                            <Link to="/forgetpass" className="floatlink">Forgot Your Password?</Link>
                            <input name="Password" type="password" onChange={handleChange} className="form-control" id="userpassword" placeholder="Enter Your Password" required />
                        </div>
                        <div onClick={handleSubmit}>
                            <button className="btn btn2 my-5 px-4 d-block mx-auto">Login</button>
                        </div>
                        <div className="my-2 logincheck"></div>
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

export default Test;