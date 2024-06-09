import React from "react";

const Hero = ({ tranferNativeToken }) => {
    return (
        <section
            data-settings="particles-1"
            className="main-section crumina-flying-balls particles-js bg-1"
        >
            <div className="container">
                <div className="row medium-padding120 align-center">
                    <div className="col-lg-8 col-lg-offset-2 col-md-12 col-sm-12 col-xs-12">
                        <header className="crumina-module crumina-heading heading--h2 heading--with-decoration">
                            <div className="heading-sup-title">Cont Market</div>
                            <h2 className="heading-title heading--half-colored">
                                Create Liquidity Marketplace
                            </h2>
                            <div className="heading-text">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Iure, ipsa porro repellat,
                                quos consequuntur saepe deserunt at nobis nam
                                accusantium dolorem quaerat dolores, distinctio
                                amet! Quos dolores eius officia cum.
                            </div>
                        </header>
                        <a
                            onClick={() => tranferNativeToken()}
                            href="#buyWoox"
                            className="btn btn--large btn--primary btn--transparent"
                        >
                            Get Woox Token Now!
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
