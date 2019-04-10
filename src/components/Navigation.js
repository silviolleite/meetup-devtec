import React from 'react';

export default function Navigation() {
    return (
        <div className="nav-menu fixed-top">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <nav className="navbar navbar-dark navbar-expand-lg">
                            <a className="navbar-brand" href="index.html"><img src="images/logo-intecfatec.png" className="img-fluid" alt="Meetup INTECFATEC" /></a> <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon" /> </button>
                            <div className="collapse navbar-collapse" id="navbar">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item"> <a className="nav-link active" href="#home">HOME <span className="sr-only">(current)</span></a> </li>
                                    <li className="nav-item"> <a className="nav-link" href="#sobre">SOBRE</a> </li>
                                    <li className="nav-item"> <a className="nav-link" href="#palestrantes">PALESTRANTES</a> </li>
                                    <li className="nav-item"> <a className="nav-link" href="#temas">TEMAS</a> </li>
                                    <li className="nav-item"><a href="#subscription" className="btn btn-outline-light my-3 my-sm-0 ml-lg-3">Increva-se</a></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}