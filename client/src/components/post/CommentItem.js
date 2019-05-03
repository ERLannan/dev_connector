import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteComment } from '../../actions/postActions';

export class CommentItem extends Component {
  onDeleteClicked = (postId, commentId) => {
    this.props.deleteComment(postId, commentId);
  };
  render() {
    const { comment, postId, auth } = this.props;
    return (
      <div className='card card-body mb-3'>
        <div className='row'>
          <div className='col-md-2'>
            <a href='profile.html'>
              <img
                className='rounded-circle d-none d-md-block img-fluid'
                src={comment.avatar}
                alt=''
              />
            </a>
            <br />
            <p className='text-center'>{comment.name}</p>
          </div>
          <div className='col-md-10'>
            <div className='row flex justify-content-between'>
              <div className='col-10'>
                <p className='lead'>{comment.text}</p>
              </div>
              <div className='col-1'>
                {comment.user === auth.user.id ? (
                  <button
                    onClick={this.onDeleteClicked.bind(
                      this,
                      postId,
                      comment._id
                    )}
                    type='button'
                    className='btn btn-danger btn-small mr-2'
                  >
                    <i className='fas fa-times' />
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CommentItem.propTypes = {
  deleteComment: PropTypes.func.isRequired,
  comment: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deleteComment }
)(CommentItem);
