import React, { Component } from 'react'
import './NotFound.scss'

class NotFound extends Component {
    render() {
        return (
            <div className="container">
                <div class='error-banner'>
                    <div class='error-404'></div>
                </div>
                <p className="why_text">Seek and ye shall find.</p>
            </div>
        )
    }

}

export default NotFound
