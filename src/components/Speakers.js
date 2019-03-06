import React, { useState, useEffect} from 'react';
import axios from 'axios';
import {host, palestrantes} from './Api'
import LinkSocial from "./LinkSocial";

export default function Speakers() {
    const url = host + palestrantes;
    const [speakers, setSpeakers] = useState([]);

    useEffect(() => {
        axios.get(url)
            .then((data) => {
                let speakers = data.data.map((speaker) => {
                    return (
                        <div className="col-sm-4" key={speaker.id}>
                            <div className="team-member">
                                <img className="mx-auto rounded-circle" src={speaker.photo} alt={speaker.name} />
                                <h4>{speaker.name}</h4>
                                <p className="text-muted">{speaker.description}</p>
                                <ul className="list-inline social-buttons">
                                    <LinkSocial link={speaker.twitter} socialclass="ti-twitter-alt"/>
                                    <LinkSocial link={speaker.facebook} socialclass="ti-facebook"/>
                                    <LinkSocial link={speaker.instagram} socialclass="ti-instagram"/>
                                </ul>
                            </div>
                        </div>
                    )
                });
                setSpeakers(speakers);
            })
            .catch(error => {
                // setLoading(false);
                // setError("That username isn't registred in GitHub");
            });
    }, []);

    return (
        <section className="bg-light" id="palestrantes">
            <div className="container">
                <div className="section-title">
                    <small>COMPARTILHANDO</small>
                    <h3>Palestrantes</h3>
                </div>
                <div className="row">
                    { speakers }
                </div>
            </div>
        </section>
    )
}