const About = () => {
    return (
        <section id="about" className="bsb-tpl-bg-alice-blue bsb-section-py-xxl-1" style={{ paddingTop: '80px' }}>
            <div className="container">
                <div className="row gy-5 gy-lg-0 align-items-lg-center">
                    <div className="col-12 col-lg-6">
                        <img className="img-fluid rounded" loading="lazy" src="/assets/asset42.png" alt="" />
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="row justify-content-xl-end">
                            <div className="col-12 col-xl-11">
                                <h2 className="display-3 fw-bolder mb-4">Our <mark className="bsb-tpl-highlight bsb-tpl-highlight-blue"><span className="bsb-tpl-font-hw display-1 text-accent fw-normal">optimistic</span></mark><br /> methods will let you prefer us.</h2>
                                <p className="fs-4 mb-5">Here are the leading reasons to prefer us for your brand. We believe in transparency without any hidden barriers.</p>
                                <div className="accordion accordion-flush" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Highly Competitive Rates
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                We offer some of the most competitive rates in the industry, without sacrificing quality. We understand that cost is an important factor when choosing a service provider, and we are committed to providing our clients with the best possible value for their money.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                Contemporary Skills
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                Our team is made up of highly skilled and experienced professionals who are up-to-date on the latest trends and technologies. We are constantly investing in our team's development to ensure that we can provide our clients with the highest level of service.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                Top Notch Support
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                We are committed to providing our clients with top-notch support. Our team is available 24/7 to answer your questions and resolve any issues you may encounter. We believe that our support is one of our greatest strengths, and we are proud to offer it to our clients.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About