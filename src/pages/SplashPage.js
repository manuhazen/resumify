import React from 'react';
import {Link} from 'react-router-dom';

import logo from '../assets/img/logo.svg';

const SplashPage = ({}) => {
    <div>Icons made by <a href="https://www.flaticon.com/authors/dinosoftlabs" title="DinosoftLabs">DinosoftLabs</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

    return (
        <div className="splash-page">
            <div className="splash-page__content">
                <div className="splash-page__image image">
                    <img src={logo} alt=""/>
                </div>

                <h1>Resumify</h1>

                <p className="splash-page__intro">Create a Virtual PDF Resume with Resumify.</p>

                <Link to="/app" className="button is-medium is-primary">Go to the App</Link>
                <br />

                <small className="splash-page__attribution">
                    Made by <a href="https://www.github.com/manuhazen">Emmanuel Jimenez.</a>
                </small>
            </div>

        </div>

    )
}

export default SplashPage;