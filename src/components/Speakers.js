import React from 'react';

export default function Speakers() {
    return (
        <section className="bg-light" id="palestrantes">
            <div className="container">
                <div className="section-title">
                    <small>COMPARTILHANDO</small>
                    <h3>Palestrantes</h3>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src="images/du-guarino.png" alt="Eduardo Guarino" />
                                <h4>Eduardo Guarino</h4>
                                <p className="text-muted">PhD - INPE</p>
                                <ul className="list-inline social-buttons">
                                    <li className="list-inline-item">
                                        <a href="#"><span className="ti-twitter-alt" /></a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#"><span className="ti-facebook" /></a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#"><span className="ti-instagram" /></a>
                                    </li>
                                </ul>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src="images/silvio.png" alt="Silvio Leite" />
                                <h4>Silvio Leite</h4>
                                <p className="text-muted">Desenvolvedor Sênior - INPE</p>
                                <ul className="list-inline social-buttons">
                                    <li className="list-inline-item">
                                        <a href="#"><span className="ti-twitter-alt" /></a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#"><span className="ti-facebook" /></a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#"><span className="ti-instagram" /></a>
                                    </li>
                                </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}