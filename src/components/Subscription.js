import React, {useState} from 'react';
import Recaptcha from 'react-recaptcha'
import { host, inscricoes} from './Api'
import axios from "axios";
import { useForm } from 'form-hooks';

export default function Subscription(){
    const [isVerified, setIsVerified] = useState(false);
    const [captchamsg, setCaptchamsg] = useState('');
    const [created, setCreated] = useState(false);
    const {
        errors,
        touched,
        values,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
    } = useForm({
        initialValues: {
            name: '',
            email: '',
        },
        onSubmit: values => Subscription(values.name, values.email),
        validate: values => ({
            ...(!values.name.length ? { name: 'Preencha com o nome completo.' } : {}),
            ...(!/^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(values.email) ? { email: 'Preencha com um e-mail válido.' } : {})
        }),
    });

    function verifyCallback (response){
        if (response){
            setIsVerified(true);
        }
    }

    function Subscription(name, email) {
        if(isVerified) {
            let url = host + inscricoes;
            axios.post(url, {name: name, email: email})
                .then((data) => {
                    if (data.status === 201) {
                        values.name = '';
                        values.email = '';
                        setCreated(true);
                    }
                })
                .catch(error => {
                    console.log(error)
                    // setLoading(false);
                    // setError("That username isn't registred in GitHub");
                });
        }else{
            setCaptchamsg('Narque a opção eu não sou robô')
        }
    }

    if (created){
        return (
            <div className="section bg-gradient" id="subscription">
                <div className="container">
                    <div className="call-to-action">
                        <h2>Inscrição realizada com sucesso!</h2>
                        <p className="tagline">Em breve você receberá um e-mail com a confirmação da sua inscrição.
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="section bg-gradient" id="subscription">
            <div className="container">
                <div className="call-to-action">
                    <h2>Inscreva-se</h2>
                    <p className="tagline">Esse meetup tem vagas limitadas. Se você tiver certeza que vai participar, confirme sua presença. Caso contrário, deixe o lugar para as pessoas que realmente querem e podem participar.
                    </p>
                </div>
            </div>
            <section id="form-subscription">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <form id="contactForm" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-6 offset-md-3">
                                        <div className="form-group">
                                            <input className="form-control" name="name" id="name" type="text"
                                                   placeholder="Nome Completo"
                                                   value={values.name}
                                                   onChange={handleChange}
                                                   onBlur={handleBlur}
                                            />
                                            {touched['name'] && errors['name']}
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control" name="email" id="email" type="email"
                                                   placeholder="E-mail válido"
                                                   value={values.email}
                                                   onChange={handleChange}
                                                   onBlur={handleBlur}
                                            />
                                            {touched['email'] && errors['email']}
                                        </div>
                                        <div className="form-group">
                                            <Recaptcha
                                                sitekey="6Lda7JUUAAAAAPzoFpucBuHHn284l6_vsX6TJbNR"
                                                render="explicit"
                                                verifyCallback={verifyCallback}
                                            />
                                            {captchamsg}
                                        </div>
                                        <div className="clearfix" />
                                        <div className="col-lg-12 text-center">
                                            <button id="sendMessageButton" className="btn btn-light text-uppercase"
                                                    type="submit" disabled={isSubmitting}>Me inscrever agora
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
