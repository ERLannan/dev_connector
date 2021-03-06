import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Moment from 'react-moment';
import { deleteExperience } from '../../actions/profileActions';

class Experience extends Component {
  onDeleteClick = id => {
    console.log('clicked' + id);
    this.props.deleteExperience(id);
  };

  render() {
    const experiences = this.props.experience.map(exp => (
      <tr key={exp._id}>
        <td>{exp.company}</td>
        <td>{exp.title}</td>
        <td>
          <Moment format='YYYY/MM/DD'>{exp.from}</Moment> -{' '}
          {exp.to === null ? (
            'Current'
          ) : (
            <Moment format='YYYY/MM/DD'>{exp.to}</Moment>
          )}
        </td>
        <td>
          <button
            className='btn btn-danger'
            onClick={() => this.onDeleteClick(exp._id)}
          >
            Delete
          </button>
        </td>
      </tr>
    ));
    return (
      <div>
        <h4 className='mb-4'>Experience</h4>
        <table className='table'>
          <thead>
            <tr>
              <th>Company</th>
              <th>Title</th>
              <th>Years</th>
              <th />
            </tr>
            {experiences}
          </thead>
        </table>
      </div>
    );
  }
}

Experience.propTypes = {
  deleteExperience: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteExperience }
)(withRouter(Experience));
