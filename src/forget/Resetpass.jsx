// import "./resetpass.css";
import { Link } from "react-router-dom";

function Resetpass() {
return (
<>
    {/*
    <!-- ************************************************************ --> */}
    {/*
    <!-- first part --> */}
    <div class="resetfirst pb-2">
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
                <button type="button" className="btn btn-lg btn1" data-bs-toggle="modal" data-bs-target="#login">
                    Login/Signup
                </button>
                </Link>
            </div>
        </header>
        <hr />
    </div>

    <div className="second" id="resetsecond">
        <form className="row">
            <div className="col-4"></div>
            <div className="col-4 box py-4 px-4" id="resetbox">
                <h4 className="fw-bold heading py-2">Reset Your Password</h4>
                <div class="mb-3">
                    Enter your new password below.
                </div>
                <div class="my-3 mt-4">
                    <label for="useremail" className="form-label">
                        New Password
                    </label>
                    <input type="email" className="form-control" id="useremail" placeholder="Enter Your password" required/>
                </div>
                <div class="my-3 mt-4">
                    <label for="usernewpass" className="form-label">
                        Confirm new Password
                    </label>
                    <input type="email" className="form-control" id="usernewpass" placeholder="Enter Your password" required/>
                </div>
                <button type="submit" className="btn btn2 my-4 px-5 d-block mx-auto">
                    Reset
                </button>
            </div>
            <div className="col-4"></div>
        </form>
    </div>
</>
);
}

export default Resetpass;