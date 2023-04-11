import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
export class Body extends Component {
    render() {
        return (
            <div className="card-group">
                <div className="card">
                    <Link to={'/Blog'}>
                        <img
                            src="https://static.nike.com/a/images/f_auto/dpr_0.9,cs_srgb/w_599,c_limit/6a646dd4-24e4-4d14-847f-84c9f8311635/nike-just-do-it.jpg"
                            className="card-img-top"
                            alt="..."
                        />
                    </Link>
                    <div className="card-body">
                        <h5 className="card-title">Membershop</h5>
                        <h2 className="card-text">Member Shop Shop Member-exclusive styles</h2>
                        <p className="card-text">
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </p>
                    </div>
                </div>
                <div className="card">
                    <Link to={'/Blog'}>
                        <img
                            src="https://static.nike.com/a/images/f_auto/dpr_0.9,cs_srgb/w_599,c_limit/fba709f4-e070-40f6-a25c-2b4699826f39/nike-just-do-it.jpg"
                            className="card-img-top"
                            alt="..."
                        />{' '}
                    </Link>
                    <div className="card-body">
                        <h5 className="card-title">SHOPPING</h5>
                        <p className="card-text">Shipping as It Should Be Free standard shipping on all orders.</p>
                        <p className="card-text">
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </p>
                    </div>
                </div>
                <div className="card">
                    <Link to={'/Blog'}>
                        <img
                            src="https://static.nike.com/a/images/f_auto/dpr_0.9,cs_srgb/w_320,c_limit/f739a452-a66e-46de-a6c5-d0e6bca3ca09/nike-just-do-it.jpg"
                            className="card-img-top"
                            alt="..."
                        />
                    </Link>
                    <div className="card-body">
                        <h5 className="card-title">Nike Bye You</h5>
                        <p className="card-text">Nike By You Customize your so-you shoe.</p>
                        <p className="card-text">
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Body;
