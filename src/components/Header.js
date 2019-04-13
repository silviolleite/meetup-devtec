import React from 'react';

export default function Header() {
    return (
        <header className="bg-gradient" id="home">
            <div className="container mt-5">
                <img src="images/meetupintecfatec.png" alt="Meetup INTECFATEC Guaratinguetá"
                     className="img-fluid" />
                <p className="tagline">Compartilhando conhecimento sobre tecnologias e empreendedorismo.</p>
            </div>
            <div className="img-holder mt-3"><img src="images/bg.png" alt="background Meetup INTECFATEC Guaratinguetá"
                                                  className="img-fluid" /></div>
        </header>
    )
}