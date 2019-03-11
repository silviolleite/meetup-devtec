import React from 'react';
import {host, temas} from "./Api";
import { useFetch } from "./hooks";
import Loading from './Loading'

export default function Subjects() {
    const url = host + temas;
    const [data, loading] =useFetch(url);


    return (
        <div className="section light-bg" id="temas">
            <div className="container">
                <div className="section-title">
                    <small>ABRA A SUA MENTE</small>
                    <h3>Temas</h3>
                </div>
                {loading ? (
                    <Loading />
                ):(
                    <>
                    <ul className="nav nav-tabs nav-justified" role="tablist">
                        {data.data.map((tab) => (
                            <li className="nav-item" key={tab.id}>
                                <a className={tab.id === 1 ? "nav-link active" : "nav-link"} data-toggle="tab" href={'#' + tab.slug }>{tab.name}</a>
                            </li>
                        ))
                        }
                    </ul>
                    <div className="tab-content">
                        {data.data.map((subject) => (
                            <div className={subject.id === 1 ? "tab-pane fade show active" : "tab-pane fade show"} key={subject.id}  id={subject.slug}>
                                <div className="d-flex flex-column flex-lg-row">
                                    <img src={subject.icon} alt={subject.name}
                                         className="img-fluid rounded align-self-start mr-lg-5 mb-5 mb-lg-0" />
                                    <div>

                                        <h2>{subject.title}</h2>
                                        <p className="lead">{subject.subtitle}</p>
                                        <p>{subject.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    </>
                )
                }
            </div>
        </div>
    )
}