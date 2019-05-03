import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { clearCurrentProfile } from '../../actions/profileActions';
class Navbar extends Component {
  render() {
    const { isAuthenticated, user } = this.props.auth;

    const onLogoutClick = event => {
      event.preventDefault();
      this.props.clearCurrentProfile();
      this.props.logoutUser();
      //      window.location.href = '/login';
    };

    const authLinks = (
      <ul className='navbar-nav ml-auto'>
        {/* <li>
          <Link to='/dashboard'>
            <div className='nav-item pt-2 pr-2 navbar-text text-white font-weight-bold underline'>
              {user.name}
            </div>
            <img
              src={user.avatar}
              alt={user.name}
              title='you must have a Gravatar connected to your email to display an image'
              className='latest-profiles-img rounded-circle'
            />
          </Link>
        </li> 
        </div>*/}
        <Link to='/feed' className='nav-link'>
          Feed
        </Link>
        <Link to='/dashboard' className='nav-link'>
          Dashboard
        </Link>

        <img
          src={user.avatar}
          alt={user.name}
          title='you must have a Gravatar connected to your email to display an image'
          className='latest-profiles-img rounded-circle'
        />
        <li>
          <Link onClick={onLogoutClick} className='nav-link ml-2' to='/login'>
            Logout
          </Link>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className='navbar-nav ml-auto'>
        <li className='nav-item'>
          <Link className='nav-link' to='/register'>
            Sign Up
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/login'>
            Login
          </Link>
        </li>
      </ul>
    );

    return (
      // <div >className={classes.Navbar}>

      <div>
        <nav className='navbar fixed-top navbar-expand-sm navbar-dark bg-dark mb-4'>
          <div className='container'>
            <Link className='navbar-brand' to='/'>
              DevConnector
            </Link>
            <button
              className='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#mobile-nav'
            >
              <span className='navbar-toggler-icon' />
            </button>

            <div className='collapse navbar-collapse' id='mobile-nav'>
              <ul className='navbar-nav mr-auto'>
                <li className='nav-item'>
                  <Link className='nav-link' to='/profiles'>
                    Developers
                  </Link>
                </li>
              </ul>

              {isAuthenticated ? authLinks : guestLinks}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser, clearCurrentProfile }
)(Navbar);
