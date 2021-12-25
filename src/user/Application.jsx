// import "./test1.css";
import { Link } from "react-router-dom";

function Application() {
    return (
        <>
            <div className="bgfade">
                {/*<!-- ************************************************************ --> */}
                {/*<!-- first part --> */}
                <div className="first pb-2" id="appfirst">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <div className="navbar-brand">
                                <span className="brand1">My</span>
                                <span className="brand2">Jobs</span>
                            </div>
                            <div className="" id="navbarNavDropdown">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link className="nav-link active me-5 link-light item1" aria-current="page" href="">Post a Job</Link>
                                    </li>
                                    <span className="dropmenu"> R </span>
                                    <li className="nav-item">
                                        <Link className="nav-link active ms-2 link-light" aria-current="page" href="">Logout</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <hr />

                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-10">
                            <div className="mb-3">
                                <i className="bi bi-house-door-fill pe-2"></i><Link href="" className="home link-light"> Home</Link>
                            </div>

                            <h3>
                                Jobs posted by you
                            </h3>
                        </div>
                        <div className="col-1"></div>
                    </div>
                </div>

                {/* **************************************************** */}
                <div id="appsecond">
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-10">
                            <div className="row">
                                <div className="col-4">
                                    <div className="card appmoveup">
                                        <div className="card-body">
                                            <h5 className="card-title">UI UX Designer</h5>
                                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt…</p>
                                            <div>
                                                <span className="me-5">
                                                    <i className="me-1 text-primary bi bi-geo-alt me-1"></i>
                                                    Bengaluru
                                                </span>

                                                {/* <!-- Button trigger modal --> */}
                                                <Link href="" className="ms-5 text-end btn btn-sm jobbtn" data-bs-toggle="modal" data-bs-target="#viewapp">View applications</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-1"></div>
                    </div>

                    <span className="apppagebtn d-flex">
                        <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                            <div className="btn-group me-2" role="group" aria-label="First group">
                                <button type="button" className="btn pbtn1"><i className="bi bi-arrow-left"></i></button>
                            </div>
                            <div className="btn-group me-2" role="group" aria-label="Second group">
                                <button type="button" className="btn pbtn2">1</button>
                            </div>
                            <div className="btn-group" role="group" aria-label="Third group">
                                <button type="button" className="btn pbtn1"><i className="bi bi-arrow-right"></i></button>
                            </div>
                        </div>
                    </span>
                </div>
            </div>


            {/* ##############   FORM   ################### */}
            <div className="container formmid">
                <div className="formdis">
                    <div className="modal-header">
                        <h5 className="" id="apph5">Application for this job</h5>
                        <Link to="/profile">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </Link>
                    </div>

                    <div className="modal-body">
                        <p id="appp">Total 4 applications</p>
                    </div>

                    <div className="mb-4">
                        <div className="cardgroups p-3 px-4 row row-cols-2 mx-auto">
                            <div className="card appcard col-5">
                                <div className="row mt-1">
                                    <div className="col-3 p-2 ps-4">
                                        <span className="appicons">  </span>
                                        <span className="moveicon">E</span>
                                    </div>
                                    <div className="col-9 pt-3">
                                        <h5 className="para1 paraheading">Eliza Lucas</h5>
                                        <p className="para2 para">abc123@email.com</p>
                                    </div>
                                </div>
                                    <div className="mb-2 container">
                                        <p className="para1 para">Skills</p>
                                        <p className="para2 para">Coding, designing, graphics, website, app ui</p>
                                    </div>
                            </div>
                            <div className="col-2"></div>
                            <div className="card appcard col-5">
                                <div className="row mt-1">
                                    <div className="col-3 p-2 ps-4">
                                        <span className="appicons">  </span>
                                        <span className="moveicon">N</span>
                                    </div>
                                    <div className="col-9 pt-3">
                                        <h5 className="para1 paraheading">Nick Gordon</h5>
                                        <p className="para2 para">abc123@email.com</p>
                                    </div>
                                </div>
                                    <div className="mb-2 container">
                                        <p className="para1 para">Skills</p>
                                        <p className="para2 para">Coding, designing, graphics, website, app ui</p>
                                    </div>
                            </div>
                        </div>

                        <div className="cardgroups p-3 px-4 row row-cols-2 mx-auto">
                            <div className="card appcard col-5">
                                <div className="row mt-1">
                                    <div className="col-3 p-2 ps-4">
                                        <span className="appicons">  </span>
                                        <span className="moveicon">R</span>
                                    </div>
                                    <div className="col-9 pt-3">
                                        <h5 className="para1 paraheading">Roger Reid</h5>
                                        <p className="para2 para">abc123@email.com</p>
                                    </div>
                                </div>
                                    <div className="mb-2 container">
                                        <p className="para1 para">Skills</p>
                                        <p className="para2 para">Coding, designing, graphics, website, app ui</p>
                                    </div>
                            </div>
                            <div className="col-2"></div>
                            <div className="card appcard col-5">
                                <div className="row mt-1">
                                    <div className="col-3 p-2 ps-4">
                                        <span className="appicons">  </span>
                                        <span className="moveicon">E</span>
                                    </div>
                                    <div className="col-9 pt-3">
                                        <h5 className="para1 paraheading">Emma Green</h5>
                                        <p className="para2 para">abc123@email.com</p>
                                    </div>
                                </div>
                                    <div className="mb-2 container">
                                        <p className="para1 para">Skills</p>
                                        <p className="para2 para">Coding, designing, graphics, website, app ui</p>
                                    </div>
                            </div>
                        </div>
                    </div>

                    <div className="modal-footer">
                        <Link to="/profile">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </Link>
                    </div>
                </div>
            </div>


            {/* <!-- Modal --> */}
            <div className="modal mstyle fade" id="viewapp" tabindex="1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content px-4">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Application for this job</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body">
                            <p>Total N applications</p>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Application;