import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export class ProfileGithub extends Component {
  state = {
    clientId: '1cc54e1f04ee35c04945',
    clientSecret: 'f21bbe15928a1d4f2e4e32fb51edf40ebc28fcf0',
    count: 5,
    sort: 'pushed',
    repos: []
  };

  componentDidMount = () => {
    const { username } = this.props;
    const { count, sort, clientId, clientSecret } = this.state;

    fetch(
      `https://api.github.com/users/${username}/repos?per_page${count}&visability=public&sort=${sort}&client_id=${clientId}&client_secret=${clientSecret}`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({
          repos: data
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    const { repos } = this.state;

    let reposCopy = [...repos];

    if (reposCopy.length > 4) {
      reposCopy = reposCopy.slice(0, 4);
    }

    const repoItems = reposCopy.map(repo => (
      <div key={repo.id} className='card card-body mb-2'>
        <div className='row'>
          <div className='col-md-6'>
            <h4>
              <Link to={repo.html_url} className='text-info' target='_blank'>
                {repo.name}
              </Link>
            </h4>
            <p>{repo.description}</p>
          </div>
          <div className='col-md-6'>
            <span className='badge badge-info mr-1'>
              Stars: {repo.stargazers_count}
            </span>
            <span className='badge badge-secondary mr-1'>
              Watchers: {repo.watchers_count}
            </span>
            <span className='badge badge-success'>
              Stars: {repo.forks_count}
            </span>
          </div>
        </div>
      </div>
    ));

    return (
      <div ref='myRef'>
        <hr />
        <h3 className='mb-4'>Latest Github Repos</h3>
        {repoItems}
      </div>
    );
  }
}

ProfileGithub.propTypes = {
  username: PropTypes.string.isRequired
};

export default ProfileGithub;
