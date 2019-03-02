import React from 'react';

export default function Subjects() {
    return (
        <div className="section light-bg" id="temas">
            <div className="container">
                <div className="section-title">
                    <small>ABRA A SUA MENTE</small>
                    <h3>Temas</h3>
                </div>

                <ul className="nav nav-tabs nav-justified" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" data-toggle="tab" href="#communication">DEV</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#schedule">Tecnologia</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#messages">Empreendedorismo</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#livechat">Mercado de Trabalho</a>
                    </li>
                </ul>
                <div className="tab-content">
                    <div className="tab-pane fade show active" id="communication">
                        <div className="d-flex flex-column flex-lg-row">
                            <img src="images/graphic.png" alt="graphic"
                                 className="img-fluid rounded align-self-start mr-lg-5 mb-5 mb-lg-0" />
                                <div>

                                    <h2>Comunidade DEV</h2>
                                    <p className="lead">Palestras voltadas as principais linguagens e ferramentas. </p>
                                    <p>Conheça as linguagens de programação que são destaque no desenvolvimento de
                                        software com exemplos práticos.</p>
                                    <p>Novidades dos mercado de Front-end e Back-end.</p>
                                </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="schedule">
                        <div className="d-flex flex-column flex-lg-row">
                            <img src="images/graphic.png" alt="graphic"
                                 className="img-fluid rounded align-self-start mr-lg-5 mb-5 mb-lg-0" />
                                <div>
                                    <h2>Tecnologia</h2>
                                    <p className="lead">Uniquely underwhelm premium outsourcing with proactive
                                        leadership skills. </p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu
                                        pellentesque pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel
                                        sapien. Vestibulum sit amet mattis ante. Ut placerat dui eu nulla
                                        congue tincidunt ac a nibh. Mauris accumsan pulvinar lorem placerat volutpat.
                                        Praesent quis facilisis elit. Sed condimentum neque quis ex porttitor,
                                    </p>
                                    <p> malesuada faucibus augue aliquet. Sed elit est, eleifend sed dapibus a, semper a
                                        eros. Vestibulum blandit vulputate pharetra. Phasellus lobortis leo a nisl
                                        euismod, eu faucibus justo sollicitudin. Mauris consectetur, tortor
                                        sed tempor malesuada, sem nunc porta augue, in dictum arcu tortor id turpis.
                                        Proin aliquet vulputate aliquam.
                                    </p>
                                </div>

                        </div>
                    </div>
                    <div className="tab-pane fade" id="messages">
                        <div className="d-flex flex-column flex-lg-row">
                            <img src="images/graphic.png" alt="graphic"
                                 className="img-fluid rounded align-self-start mr-lg-5 mb-5 mb-lg-0" />
                                <div>
                                    <h2>Empreendedorismo</h2>
                                    <p className="lead">Uniquely underwhelm premium outsourcing with proactive
                                        leadership skills. </p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu
                                        pellentesque pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel
                                        sapien. Vestibulum sit amet mattis ante. Ut placerat dui eu nulla
                                        congue tincidunt ac a nibh. Mauris accumsan pulvinar lorem placerat volutpat.
                                        Praesent quis facilisis elit. Sed condimentum neque quis ex porttitor,
                                    </p>
                                    <p> malesuada faucibus augue aliquet. Sed elit est, eleifend sed dapibus a, semper a
                                        eros. Vestibulum blandit vulputate pharetra. Phasellus lobortis leo a nisl
                                        euismod, eu faucibus justo sollicitudin. Mauris consectetur, tortor
                                        sed tempor malesuada, sem nunc porta augue, in dictum arcu tortor id turpis.
                                        Proin aliquet vulputate aliquam.
                                    </p>
                                </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="livechat">
                        <div className="d-flex flex-column flex-lg-row">
                            <img src="images/graphic.png" alt="graphic"
                                 className="img-fluid rounded align-self-start mr-lg-5 mb-5 mb-lg-0" />
                                <div>
                                    <h2>Mercado de Trabalho</h2>
                                    <p className="lead">Uniquely underwhelm premium outsourcing with proactive
                                        leadership skills. </p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu
                                        pellentesque pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel
                                        sapien. Vestibulum sit amet mattis ante. Ut placerat dui eu nulla
                                        congue tincidunt ac a nibh. Mauris accumsan pulvinar lorem placerat volutpat.
                                        Praesent quis facilisis elit. Sed condimentum neque quis ex porttitor,
                                    </p>
                                    <p> malesuada faucibus augue aliquet. Sed elit est, eleifend sed dapibus a, semper a
                                        eros. Vestibulum blandit vulputate pharetra. Phasellus lobortis leo a nisl
                                        euismod, eu faucibus justo sollicitudin. Mauris consectetur, tortor
                                        sed tempor malesuada, sem nunc porta augue, in dictum arcu tortor id turpis.
                                        Proin aliquet vulputate aliquam.
                                    </p>
                                </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}