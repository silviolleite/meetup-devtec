import React, {useState, useEffect} from 'react';


export default function Subscription(){
    const name = useFormInput('');
    const email = useFormInput('');

    return (
        <div className="section bg-gradient" id="subscription">
            <div className="container">
                <div className="call-to-action">
                    <h2>Inscreva-se</h2>
                    <p className="tagline">Este meetup será limitado a XXXXX pessoas. Se você tiver certeza que vai
                        participar, confirme sua presença. Caso contrário, deixe o lugar para as pessoas que realmente
                        querem e podem participar.
                    </p>
                </div>
            </div>
            <section id="form-subscription">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <form id="contactForm">
                                <div className="row">
                                    <div className="col-md-6 offset-3">
                                        <div className="form-group">
                                            <input className="form-control" id="name" type="text"
                                                   placeholder="Nome Completo" required="required" />
                                                <p className="help-block text-danger"></p>
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control" id="email" type="email"
                                                   placeholder="E-mail válido" required="required" />
                                                <p className="help-block text-danger"></p>
                                        </div>

                                        <div className="clearfix"></div>
                                        <div className="col-lg-12 text-center">
                                            <div id="success"></div>
                                            <button id="sendMessageButton" className="btn btn-light text-uppercase"
                                                    type="submit">Me inscrever agora
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

function useFormInput(initialValue) {
    const [value, setValue] = useState(initialValue);

    function handleChange(e) {
        setValue(e.target.value);
    }
    return {
        value,
        onChange: handleChange
    };
}