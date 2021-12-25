// import "./signup.css";
import { Link } from "react-router-dom";

function Singup() {
    return (
        <>
            {/* <!-- ************************************************************ --> */}
            {/* <!-- first part --> */}
            <div class="signupfirst pb-2">
                {/* <!-- header part --> */}
                <header className="navbar">
                    <div className="navbar-brand">
                        <span className="brand1">My</span><span class="brand2">Jobs</span>
                    </div>
                </header>
                <hr />
            </div>

            <div className="signupsecond">
                <form className="row mx-auto">
                    <div className="col-4"></div>
                    <div className="col-4 signupbox py-4 px-4">
                        <h4 className="fw-bold py-2">Signup</h4>
                        <div className="mb-3">
                            <div>I'm a*</div>
                            <div className="">
                                <button className="btn btn-group me-2 btnrec"><i class="bi fs-5 px-1 bi-person-square"></i>Recruiter</button>
                                <span> </span>
                                <button className="btn btn-group btncan"><i class="iconcan bi px-1 fs-5 bi-person-circle"></i>Candidate</button>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label for="username" className="form-label">Full Name*</label>
                            <input type="email" className="form-control" id="username" placeholder="Enter Your full name"  required />
                        </div>
                        <div class="mb-3">
                            <label for="useremail" className="form-label">Email address*</label>
                            <input type="email" className="form-control" id="useremail" placeholder="Enter Your Email" required />
                        </div>
                        <div className="row mb-3">
                            <div class="col-6">
                                <label for="userpassword1" className="form-label">Create Password*</label>
                                {/* <a href="/forget">Forgot Your Password?</a> */}
                                <input type="email" className="form-control" id="userpassword1" placeholder="Enter Your Password" required />
                            </div>
                            <div class="col-6">
                                <label for="userpassword2" className="form-label">Confirm Password*</label>
                                {/* <a href="/forget">Forgot Your Password?</a> */}
                                <input type="email" className="form-control" id="userpassword2" placeholder="Enter Your Password" required />
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="userskill" className="form-label">Skills</label>
                            <input type="email" className="form-control" id="userskill" placeholder="Enter comma seperated skills" />
                        </div><button type="submit" className="btn btn2 my-4 px-4 d-block mx-auto">Signup</button>
                        <div className="mx-auto">
                            Have an account? <Link to="/login" className="linkunderline">Login</Link>
                        </div>
                    </div>
                    <div className="col-4"></div>
                </form>
            </div>
        </>
    );
}

export default Singup;