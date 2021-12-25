// import "./profile.css";
import { Link } from "react-router-dom";

function Profile() {
    return (
        <>
            {/*<!-- ************************************************************ --> */}
            {/*<!-- first part --> */}
            <div class="profilefirst pb-2">
                <nav class="navbar navbar-expand-lg">
                    <div class="container-fluid">
                        <div className="navbar-brand">
                            <span className="brand1">My</span>
                            <span class="brand2">Jobs</span>
                        </div>
                        <div class="" id="navbarNavDropdown">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <Link to="/postjob" class="nav-link active me-5 link-light item1" aria-current="page" href="#">Post a Job</Link>
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
                            <i class="bi bi-house-door-fill pe-2"></i><a href="#" className="home link-light"> Home</a>
                        </div>

                        <h3>
                            Jobs posted by you
                        </h3>
                    </div>
                    <div class="col-1"></div>
                </div>
            </div>

            {/* **************************************************** */}
            <div id="second">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-10">
                        <div class="row">
                            <div class="col-4">
                                <div class="card profileup">
                                    <div class="card-body">
                                        <h5 class="card-title">UI UX Designer</h5>
                                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt…</p>
                                        <div>
                                            <span className="me-5">
                                                <i class="me-1 text-primary bi bi-geo-alt me-1"></i>
                                                Bengaluru
                                            </span>

                                            {/* <!-- Button trigger modal --> */}
                                            <Link to="/application" class="ms-5 text-end btn btn-sm jobbtn" data-bs-toggle="modal" data-bs-target="#viewapp">View applications</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-1"></div>
                </div>

                <span className="profilepagebtn d-flex">
                    <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                        <div class="btn-group me-2" role="group" aria-label="First group">
                            <button type="button" class="btn pbtn1"><i class="bi bi-arrow-left"></i></button>
                        </div>
                        <div class="btn-group me-2" role="group" aria-label="Second group">
                            <button type="button" class="btn pbtn2">1</button>
                        </div>
                        <div class="btn-group" role="group" aria-label="Third group">
                            <button type="button" class="btn pbtn1"><i class="bi bi-arrow-right"></i></button>
                        </div>
                    </div>
                </span>
            </div>


            {/* <!-- Modal --> */}
            <div class="modal mstyle fade" id="viewapp" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content px-4">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Application for this job</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div class="modal-body">
                        <p>Total N applications</p>
                        </div>
                        
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Profile;