import React from 'react';

export default function About() {
    return (
        <div>
        <div className="section light-bg" id="sobre">
            <div className="container">

                <div className="section-title">
                    <small>AGENDA</small>
                    <h3>Próximo Evento</h3>
                </div>


                <div className="row">
                    <div className="col-12 col-lg-4">
                        <div className="card features">
                            <div className="card-body">
                                <div className="media">
                                    <span className="ti-location-pin gradient-fill ti-3x mr-3" />
                                    <div className="media-body">
                                        <h4 className="card-title">Local</h4>
                                        <p className="card-text">Auditório da FATEC Guaratinguetá</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="card features">
                            <div className="card-body">
                                <div className="media">
                                    <span className="ti-alarm-clock gradient-fill ti-3x mr-3" />
                                    <div className="media-body">
                                        <h4 className="card-title">Horário</h4>
                                        <p className="card-text">Das 9 horas às 13 horas</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="card features">
                            <div className="card-body">
                                <div className="media">
                                    <span className="ti-calendar gradient-fill ti-3x mr-3" />
                                    <div className="media-body">
                                        <h4 className="card-title">Data</h4>
                                        <p className="card-text">Sábado - 04 de Maio de 2019</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
            <div className="section">

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-6">
                            <h2>Fique por dentro!</h2>
                            <p className="mb-4">Desenvolvimento de software, novas tecnologias, empreendedorismo,
                                marketing e mercado de trabalho. </p>
                        </div>
                    </div>
                    <div className="perspective-phone">
                        <img src="images/perspective.png" alt="perspective phone" className="img-fluid" />
                    </div>
                </div>

            </div>
        </div>
    )
}