import React from 'react';

export default function Header() {
    return (
        <header className="bg-gradient" id="home">
            <div className="container mt-5">
                <h1>1º Meetup INTECFATEC</h1>
                <p className="tagline">Compartilhando conhecimento sobre tecnologias e empreendedorismo.</p>
            </div>
            <div className="img-holder mt-3"><img src="images/bg.png" alt="Meetup DEVTEC Guaratinguetá"
                                                  className="img-fluid" /></div>
        </header>
    )
}