// import App from "../App";
// import react from "react";
// import "./home.css";
import girl_lappy from "./img/img-1.png";
import company from "./img/company.png";
import { Link } from "react-router-dom";

function Home(){
    return(
        <>
                {/* <!-- ************************************************************ --> */}
    {/* <!-- first part --> */}
    <div className="first pb-2">
        <div>
            {/* <!-- header part --> */}
            <header className="navbar">
                <div className="navbar-brand">
                    <span className="brand1">My</span><span className="brand2">Jobs</span>
                </div>

                <div className="login navbar-nav">
                    {/* <!-- Button trigger modal --> */}
                    <Link to="/login">
                    <button type="button" className="btn btn-lg btn1" data-bs-toggle="modal" data-bs-target="#login">
                        Login/Signup
                    </button>
                    </Link>
                </div>
            </header>

            <hr />
            {/* <!-- main --> */}
            <div className="row g-5 mx-auto px-3 main">
                <div className="col-5 main-1">
                    <h1 className="h1">
                        <div>Welcome to</div>
                        <div>My<span className="brand2">Jobs</span></div>
                    </h1>
                    <Link to="/signup">
                    <button className="btn btn-lg btn2 my-4">Get Started</button>
                    </Link>
                </div>
                <div className="col-6 main-2">
                    <img src={girl_lappy} className="img-fluid" style={{borderRadius: "20px"}} alt="girl with a lappy pic" />
                </div>
            </div>
        </div>
    </div>

    {/* <!-- ************************************************************* --> */}
    {/* <!-- second part --> */}
    <div className="second pt-5">
        <h5 className="my-5 mb-4 pt-5 heading">Why Us</h5>

        {/* <!-- cards --> */}
        <div className="mb-5">
            <div className="row g-4">
                <div className="col-4">
                    <div className="card h-100 py-2">
                        <div className="card-body">
                            <h5 className="card-title">Get More Visibility</h5>
                            <p className="card-text pt-2">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Alias voluptatum porro debitis! Voluptatem, non accusantium.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Organize Your Candidates</h5>
                            <p className="card-text pt-2">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Blanditiis accusantium iste esse, earum alias vero?
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Verify Their Ability</h5>
                            <p className="card-text pt-2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Nostrum rem nesciunt eius optio esse? Doloremque.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <h5 className="my-4 pt-4 heading">Companies Who Trust Us</h5>

        {/* <!-- companies brands logos --> */}
        <div className="container">
            <div className="row mx-auto" id="company-1">
                <div className="col">
                    <img src={company} alt="" />
                </div>
                <div className="col">
                    <img src={company} alt="" />
                </div>
                <div className="col">
                    <img src={company} alt="" />
                </div>
                <div className="col">
                    <img src={company} alt="" />
                </div>
                <div className="col">
                    <img src={company} alt="" />
                </div>
            </div>
        </div>

        <div className="container pt-3 pb-5">
            <div className="row " id="company-2">
                <div className="col-2 px-5 mx-4">
                    <img src={company} alt="" />
                </div>
                <div className="col-2 px-5 mx-4">
                    <img src={company} alt="" />
                </div>
                <div className="col-2 px-5 mx-4">
                    <img src={company} alt="" />
                </div>
                <div className="col-3 px-5 mx-4">
                    <img src={company}  alt="" />
                </div>
            </div>
        </div>
    </div>
        </>
    );
}

export default Home;