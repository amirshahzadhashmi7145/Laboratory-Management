import React from 'react';
import labCoverImage from '../assets/images/backgroundbg1.png';
import Header from "../components/Header";
import Footer from "../components/Footer"; // Replace with actual image path

const Home = () => {
    return (
        <div>
            <Header/>
            <div style={{backgroundColor: "whitesmoke", margin: "0px"}} className="w-100">
                <section className="pb-4 pb-md-5">
                    <div className="container-fluid px-0">
                        <div className="row">
                            <div className="col-12">
                                <div className="container-fluid bsb-hero-6 bsb-overlay"
                                     style={{
                                         '--bsb-overlay-opacity': 0.5,
                                         '--bsb-overlay-bg-color': 'var(--bs-light-rgb)',
                                         backgroundImage: `url(${labCoverImage})`,
                                         height: "400px",
                                         width: "100%",
                                         opacity: "2"
                                     }}
                                >
                                    <div className="row justify-content-md-center align-items-center pt-5">
                                        <div className="col-12 col-md-11 col-xl-10">
                                            <h2 className="align display-1 text-center text-md-start text-shadow-head fw-bold mb-4">Welcome
                                                to Our Lab</h2>
                                            <p className="lead text-center text-md-start text-shadow-body mb-5 d-flex justify-content-sm-center justify-content-md-start">
                                                <span className="col-12 col-sm-10 col-md-8 col-xxl-7">Welcome to our Lab, your trusted source for accurate and reliable diagnostic testing. Our state-of-the-art facility and dedicated team ensure precise results for all your medical needs, supporting informed healthcare decisions and better patient outcomes.</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Available Tests Section */}
                <div className="container py-5">
                    <h2 className="text-center mb-4">Available Tests</h2>
                    {/* Test cards will be populated here */}
                    <div className="row">
                        {/* Test card placeholders */}
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h4 className="card-title">Test Name</h4>
                                    <p className="card-text">Price: $XX.XX</p>
                                </div>
                            </div>
                        </div>
                        {/* Repeat as necessary for more tests */}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;
