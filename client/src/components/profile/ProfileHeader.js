import React, { Component } from 'react';
import isEmpty from '../../validation/is-empty';

export class ProfileHeader extends Component {
  render() {
    const { profile } = this.props;
    return (
      <div className='row'>
        <div className='col-md-12'>
          <div className='card card-body bg-info text-white mb-3'>
            <div className='row '>
              <div className='col-12 d-flex justify-content-center'>
                <img
                  className='rounded-circle img-fluid'
                  src={profile.user.avatar}
                  alt=''
                />
              </div>
            </div>
            <div className='text-center'>
              <h1 className='display-12 text-center'>{profile.user.name}</h1>
              <p className='lead text-center'>
                {profile.status}{' '}
                {isEmpty(profile.company) ? null : (
                  <span> at {profile.company}</span>
                )}
              </p>
              <p>
                {isEmpty(profile.location) ? null : (
                  <span>{profile.location}</span>
                )}
              </p>
              <div>
                {isEmpty(profile.social) ? null : (
                  <p>
                    {isEmpty(profile.website) ? null : (
                      <a
                        className='text-white p-2'
                        href={profile.website}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <i className='fas fa-globe fa-2x' />
                      </a>
                    )}
                    {isEmpty(profile.social.twitter) ? null : (
                      <a
                        className='text-white p-2'
                        href={profile.social.twitter}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <i className='fab fa-twitter fa-2x' />
                      </a>
                    )}
                    {isEmpty(profile.social.facebook) ? null : (
                      <a
                        className='text-white p-2'
                        href={profile.social.facebook}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <i className='fab fa-facebook fa-2x' />
                      </a>
                    )}
                    {isEmpty(profile.social.linkedin) ? null : (
                      <a
                        className='text-white p-2'
                        href={profile.social.linkedin}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <i className='fab fa-linkedin fa-2x' />
                      </a>
                    )}
                    {isEmpty(profile.social.youtube) ? null : (
                      <a
                        className='text-white p-2'
                        href={profile.social.youtube}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <i className='fab fa-youtube fa-2x' />
                      </a>
                    )}
                    {isEmpty(profile.social.instagram) ? null : (
                      <a
                        className='text-white p-2'
                        href={profile.social.instagram}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <i className='fab fa-instagram  fa-2x' />
                      </a>
                    )}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileHeader;
