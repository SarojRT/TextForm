import React from 'react'
import PropTypes from 'prop-types'
// import { a } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.textmode} bg-${props.mode}`}>
      <div className="container-fluid">

        <a className="navbar-brand text-primary bold" href="">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon bg-primary"></span>
        </button>

        <form className="d-flex mx-2" role="search">
          <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-primary" type="submit">Search</button>
        </form>

        <div className="mx-auto">

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">{props.home}</a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" href="/about">{props.about}</a>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {props.dropdown}
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>

            </ul>
          </div>
        </div>
        <button className={`badge rounded-pill bg-${props.gbutton} text-${props.gtbutton} mx-1`} onClick={props.toggleModeg}>Green</button>
        <button className={`badge rounded-pill bg-${props.bbutton} text-${props.btbutton} mx-1"`} onClick={props.toggleModeb}>Blue</button>
        <button className={`badge rounded-pill bg-${props.pbutton} text-${props.ptbutton} mx-1`} onClick={props.toggleModep}>Lightblue</button>
        <button className={`badge rounded-pill bg-${props.dbutton} text-${props.dtbutton} mx-1`} onClick={props.toggleMode}>Dark</button>


        {/* <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}> 
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
        <label className="form-check-label mx-2" htmlfor="flexSwitchCheckDefault">Enable Dark Mode</label>
      </div> */}
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string,
  home: PropTypes.string,
  about: PropTypes.string
};

Navbar.defaultProps = {
  title: 'Set title here',
  home: 'Set homepage name',
  about: 'About',
  dropdown: 'Set dropdown'
};