import React from 'react'
import ReactLoading from "react-loading";

export default function Loading() {
    return (
        <div className="row justify-content-md-center">
            <ReactLoading type="bubbles" color="#dc3545" />
        </div>
    )
}