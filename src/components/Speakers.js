import React, { useState, useEffect} from 'react';
import axios from 'axios';
import {host, palestrantes} from './Api'
import LinkSocial from "./LinkSocial";
import { useFetch } from "./hooks";
import Loading from './Loading'

export default function Speakers() {
    const url = host + palestrantes;
    const [data, loading] =useFetch(url);

    return (
            <section className="bg-light" id="palestrantes">
                <div className="container">
                    <div className="section-title">
                        <small>COMPARTILHANDO</small>
                        <h3>Palestrantes</h3>
                    </div>
                    {loading ? (
                        <Loading />
                    ):(

                        <div className="row">
                            {data.data.map((speaker) => (
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
                            ))}
                        </div>
                    )
                    }

                </div>
            </section>
    )
}