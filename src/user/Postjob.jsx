// import "./postjob.css";
import { Link } from "react-router-dom";

function Postjob() {
    return (
        <>
            {/*
    <!-- ************************************************************ --> */}
            {/*
    <!-- first part --> */}
            <div class="resetfirst pb-2">
                {/*
        <!-- header part --> */}

                <nav class="navbar navbar-expand-lg">
                    <div class="container-fluid">
                        <div className="navbar-brand">
                            <span className="brand1">My</span>
                            <span class="brand2">Jobs</span>
                        </div>
                        <div class="" id="navbarNavDropdown">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <Link to="/profile" class="nav-link active me-5 link-light item1" aria-current="page" href="#">Post a Job</Link>
                                </li>
                                <span className="dropmenu"> R </span>
                                <li class="nav-item">
                                    <Link to="/" class="nav-link active ms-2 link-light" aria-current="page" href="#">Logout</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <hr />

                <div class="row">
                    <div class="col-1"></div>
                    <div class="col-10">
                        <div className="mb-3">
                            <i class="bi bi-house-door-fill pe-2"></i>
                            <Link to="/profile" className="home link-light"> Home</Link>
                            <span> <i class="bi bi-arrow-right-short"></i></span>
                            <Link to="/postjob" href="#" className="postjob link-light"> Post a job</Link>
                        </div>

                        {/* <h3>
                            Jobs posted by you
                        </h3> */}
                    </div>
                    <div class="col-1"></div>
                </div>
            </div>

            {/* **************************************************** */}
            <div className="second" id="postjobsecond">
                <form className="row">
                    <div className="col-4"></div>

                    <div className="col-5" id="postjobmoveup">
                        <div className="my-4 px-3">
                            <h4 className="fw-bold py-2">Post a job</h4>
                            <div class="mb-3">
                                <label for="userjob" className="form-label">Job title*</label>
                                <input type="text" className="form-control" id="userjob" placeholder="Enter job title" required />
                            </div>
                            <div class="mb-3">
                                <label for="userdesc" className="form-label">Description*</label>
                                <textarea class="form-control" id="userdesc" rows="3" placeholder="Enter job description" required></textarea>
                            </div>
                            <div class="mb-3">
                                <label for="userloc" className="form-label">Location*</label>
                                <input type="text" className="form-control" id="userloc" placeholder="Enter location" required />
                            </div>
                            <button type="submit" className="btn btn2 my-5 px-5 d-block mx-auto">Post</button>
                        </div>
                    </div>
                </form>

                <div className="col-3"></div>
            </div>

        </>
    );
}

export default Postjob;