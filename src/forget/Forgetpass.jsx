// import "./forgetpass.css";
import { Link } from "react-router-dom";

function Forgetpass() {
return (
<>
    {/*
    <!-- ************************************************************ --> */}
    {/*
    <!-- first part --> */}
    <div class="forgetfirst pb-2">
        {/*
        <!-- header part --> */}
        <header className="navbar">
            <div className="navbar-brand">
                <span className="brand1">My</span>
                <span class="brand2">Jobs</span>
            </div>

            <div className="login navbar-nav">
                {/*
                <!-- Button trigger modal --> */}
                <Link to="/login">
                <button type="button" className="btn btn-lg btn1">
                    Login/Signup
                </button>
                </Link>
            </div>
        </header>
        <hr />
    </div>

    <div className="second forgetsecond" id="forgetsecond">
        <form className="row">
            <div className="col-3"></div>
            <div className="col-6 mx-5 py-4 px-4" id="forgetbox">
                <h4 className="fw-bold heading py-2">Forgot your Password?</h4>
                <div class="mb-3">
                    Enter the email associated with your account and we'll send you
                    instructions to reset your password.
                </div>
                <div class="mb-5">
                    <label for="useremail" className="form-label">
                        Email address
                    </label>
                    <input type="email" className="form-control" id="useremail" placeholder="Enter Your Email" required/>
                </div>
                <button type="submit" className="btn btn2 my-4 mb-1 px-5 d-block mx-auto">
                    Submit
                </button>
            </div>
            <div className="col-3"></div>
        </form>
    </div>
</>
);
}

export default Forgetpass;