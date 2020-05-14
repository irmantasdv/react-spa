import React, { Component } from 'react';
import { Link } from "react-router-dom";

class NavigationComponent extends React.Component {

    render() {
        return (

            <>
                <div>
                <ul class="nav flex-column">
  <li class="nav-item">
    <Link class="nav-link" to="/">Midene Art Studio</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to="/">Candle & Inscense Houses</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to="/">Garden Ceramic</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to="/">Art Decor Ceramic</Link>
  </li>
</ul>
                {/* <nav className="navbar navbar-expand-lg navbar-light bg-warning mb-3">
                    <Link className="navbar-brand" to="/">Home</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/products">Products</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/categories">Category</Link >
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav> */}
            </div>
            </>

        )
    }

}

export default NavigationComponent;