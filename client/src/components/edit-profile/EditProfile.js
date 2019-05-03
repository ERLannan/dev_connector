import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextAreaFieldGroup from '../common/ui-components/TextAreaFieldGroup';
import SelectListGroup from '../common/ui-components/SelectListGroup';
import TextFieldGroup from '../common/ui-components/TextFieldGroup';
import InputGroup from '../common/ui-components/InputGroup';
import { createProfile, getCurrentProfile } from '../../actions/profileActions';
import isEmpty from '../../validation/is-empty';

class EditProfile extends Component {
  state = {
    displaySocialInputs: true,
    handle: '',
    company: '',
    website: '',
    location: '',
    status: '',
    skills: '',
    githubusername: '',
    bio: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    instagram: '',
    errors: {}
  };

  componentDidMount() {
    this.props.getCurrentProfile();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
    if (nextProps.profile.profile) {
      const profile = nextProps.profile.profile;
      const skills = profile.skills.join(',');

      profile.skils = skills;
      profile.company = !isEmpty(profile.company) ? profile.company : '';
      profile.handle = !isEmpty(profile.handle) ? profile.handle : '';
      profile.website = !isEmpty(profile.website) ? profile.website : '';
      profile.location = !isEmpty(profile.location) ? profile.location : '';
      profile.status = !isEmpty(profile.status) ? profile.status : '';
      profile.githubusername = !isEmpty(profile.githubusername)
        ? profile.githubusername
        : '';
      profile.bio = !isEmpty(profile.social.bio) ? profile.social.bio : '';
      profile.twitter = !isEmpty(profile.social.twitter)
        ? profile.social.twitter
        : '';
      profile.facebook = !isEmpty(profile.social.facebook)
        ? profile.social.facebook
        : '';
      profile.linkedin = !isEmpty(profile.social.linkedin)
        ? profile.social.linkedin
        : '';
      profile.youtube = !isEmpty(profile.social.youtube)
        ? profile.social.youtube
        : '';
      profile.instagram = !isEmpty(profile.social.instagram)
        ? profile.social.instagram
        : '';

      this.setState({ ...profile });
    }
  }

  onChange = event => {
    const temp = event.target.value;
    let value = Array.isArray(temp)
      ? event.target.value[0]
      : event.target.value;
    this.setState({ [event.target.name]: value });
  };

  onSubmit = event => {
    event.preventDefault();
    const newProfile = {
      handle: this.state.handle.toString(),
      company: this.state.company.toString(),
      website: this.state.website.toString(),
      location: this.state.location.toString(),
      status: this.state.status.toString(),
      skills: this.state.skills.toString(),
      githubusername: this.state.githubusername.toString(),
      bio: this.state.bio.toString(),
      twitter: this.state.twitter.toString(),
      linkedin: this.state.linkedin.toString(),
      facebook: this.state.facebook.toString(),
      youtube: this.state.youtube.toString(),
      instagram: this.state.instagram.toString()
    };
    console.log(newProfile);
    this.props.createProfile(newProfile, this.props.history);
  };

  render() {
    const { errors, displaySocialInputs } = this.state;
    const options = [
      {
        value: '0',
        label: 'Select Professional Status'
      },
      {
        value: 'Developer',
        label: 'Developer'
      },
      {
        value: 'Junior Developer',
        label: 'Junior Developer'
      },
      {
        value: 'Senior Developer',
        label: 'Senior Developer'
      },
      {
        value: 'Manager',
        label: 'Manager'
      },
      {
        value: 'Student or Learning',
        label: 'Student or Learning'
      },
      {
        value: 'Instructor',
        label: 'Instructor'
      },
      {
        value: 'Intern',
        label: 'Intern'
      },
      {
        value: 'Other',
        label: 'Other'
      }
    ];
    const socialInputs = displaySocialInputs ? (
      <div>
        <InputGroup
          placeholder='Twitter Profile URL'
          name='twitter'
          icon='fab fa-twitter'
          value={this.state.twitter}
          onChange={this.onChange}
          error={errors.twitter}
        />
        <InputGroup
          placeholder='Facebook Profile URL'
          name='facebook'
          icon='fab fa-facebook'
          value={this.state.facebook}
          onChange={this.onChange}
          error={errors.facebook}
        />
        <InputGroup
          placeholder='Linkedin Profile URL'
          name='linkedin'
          icon='fab fa-linkedin'
          value={this.state.linkedin}
          onChange={this.onChange}
          error={errors.linkedin}
        />
        <InputGroup
          placeholder='Youtube Profile URL'
          name='youtube'
          icon='fab fa-youtube'
          value={this.state.youtube}
          onChange={this.onChange}
          error={errors.youtube}
        />
        <InputGroup
          placeholder='Instagram Profile URL'
          name='instagram'
          icon='fab fa-instagram'
          value={this.state.instagram}
          onChange={this.onChange}
          error={errors.instagram}
        />
      </div>
    ) : null;
    return (
      <div className='create-profile'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 mx-auto mt-5'>
              <Link to='/dashboard' className='btn btn-light'>
                Go back
              </Link>
              <h1 className='display-4 text-center'>Edit Your Profile</h1>

              <small className='d-block pb-3'>* = required fields</small>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder='Profile Handle'
                  name='handle'
                  value={this.state.handle.toString()}
                  onChange={this.onChange}
                  error={errors.handle}
                  info='A unique handle for your profile URL. Your full name, company name, nickname, ect (This CANNOT be changed later)'
                />
                <SelectListGroup
                  placeholder='Select Professional Status'
                  name='status'
                  value={this.state.status}
                  onChange={this.onChange}
                  error={errors.status}
                  info='Give us an idea of where you are in your career'
                  options={options}
                />
                <TextFieldGroup
                  placeholder='Company'
                  name='company'
                  info='Could be your company or the one you work for'
                  value={this.state.company}
                  onChange={this.onChange}
                  error={errors.company}
                />
                <TextFieldGroup
                  placeholder='Website'
                  name='website'
                  info='Could be your website or the one for the company you work for'
                  value={this.state.website}
                  onChange={this.onChange}
                  error={errors.website}
                />
                <TextFieldGroup
                  placeholder='Location'
                  name='location'
                  info='City & State (eg. San Francisco, CA)'
                  value={this.state.location}
                  onChange={this.onChange}
                  error={errors.location}
                />
                <TextFieldGroup
                  placeholder='Skills'
                  name='skills'
                  info='Please use comma secparated values (html,css,javascript,node)'
                  value={this.state.skills.toString()}
                  onChange={this.onChange}
                  error={errors.skills}
                />
                <TextFieldGroup
                  placeholder='GitHub Username'
                  name='githubusername'
                  info='If you want your latest repos and a Gitub link, include your username'
                  value={this.state.githubusername}
                  onChange={this.onChange}
                  error={errors.githubusername}
                />
                <TextAreaFieldGroup
                  placeholder='A short bio about yourself'
                  name='bio'
                  info='Tell us a little about yourself'
                  value={this.state.bio}
                  onChange={this.onChange}
                  error={errors.bio}
                />

                <div className='mb-3'>
                  <button
                    className='btn btn-light'
                    type='button'
                    onClick={() => {
                      this.setState(prevState => ({
                        displaySocialInputs: !prevState.displaySocialInputs
                      }));
                    }}
                  >
                    Add Social Network Links
                  </button>
                  <span className='text-muted'>Optional</span>
                </div>
                {socialInputs}
                <input
                  type='submit'
                  value='Submit'
                  className='btn btn-info btn-block mt-4'
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createProfile, getCurrentProfile }
)(withRouter(EditProfile));
