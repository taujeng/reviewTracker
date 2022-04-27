import React, { useState } from 'react';
import StarRating from '../StarRating/StarRating';
import { useLocation } from 'react-router-dom';
import { Reply, MoreHoriz, RefreshSharp } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import './comments.css'

const Comments = ({ response }) => {
  // Data passed in
  const location = useLocation();
  const { from } = location.state;
  // from.details = data, from.updateDate = updated Date from data

  // Individual Post's ID
  const postId = from.details.id;

  // Review commentator/user info + current date
  const USER_NAME = 'Tau Jeng';
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const todayDate = month + '/' + day + '/' + year;

  // Response Functionality:
  // // If comment already exists, set value as comment.
  const existingComment = from.details.response
    ? from.details.response
    : 'Leave a comment here...';
  // value = What is displayed in default view mode
  // currentValue = What the user currently has entered in edit mode
  const [responseState, setResponseState] = useState({
    value: existingComment,
    isInEditMode: false,
    currentValue: '',
  });

  // Exit Button/ Toggle Between Edit and Default View Mode. 
  const changeEditMode = () => {
    setResponseState((prevValue) => {
      return {
        ...prevValue,
        isInEditMode: !responseState.isInEditMode,
      };
    });
  };

  // When User is typing in Edit Mode, update currentValue
  const handleChange = (event) => {
    let currentNote = event.target.value;
    setResponseState((prevValue) => {
      return {
        ...prevValue,
        currentValue: currentNote,
      };
    });
  };

  // Save Button. Saves user's input 
  const updateResponseValue = () => {
    setResponseState((prevValue) => {
      return {
        ...prevValue,
        isInEditMode: false,
        value: responseState.currentValue,
      };
    });
    // Send Newest Comment and the post's ID up to App.js where it can be added to companyData
    response(responseState.currentValue, postId);
  };

  // Edit View, with a Save and Exit Button
  const renderEditView = () => {
    return (
      <div className="response-edit-view">
        <input
          type="text"
          value={responseState.currentValue}
          placeholder="Leave a comment"
          onChange={handleChange}
          rows="1"
        />
        <button className="response-edit-button" onClick={updateResponseValue}>
          Save
        </button>
        <button className="response-edit-button" onClick={changeEditMode}>
          Exit
        </button>
      </div>
    );
  };

  // Default View
  const renderDefaultView = () => {
    return (
      <div className="response-default-view" onDoubleClick={changeEditMode}>
        {responseState.value}
      </div>
    );
  };

  return (
    <div className="comments-container">
      {/* Review Box */}
      <div className="comments-box comments-review">
        <div className="comments-post-title">{from.details.place}</div>
        <div className="comments-post-rating">
          <StarRating score={from.details.rating} />
        </div>
        <div className="comments-post-body">{from.details.content}</div>
        <div className="comments-footer">
          <div className="comments-footer-name">{from.details.author}</div>
          <div className="comments-footer-date">{from.updateDate}</div>
        </div>
      </div>

      {/* Response Box  */}
      <div className="comments-box comments-response-container">
        <div className="response-top">
          <div className="response-comments">
            <Link to="/" className="response-arrow">
              <Reply />
            </Link>
            {responseState.isInEditMode
              ? renderEditView()
              : renderDefaultView()}
          </div>
          <div className="response-edit">
            <MoreHoriz
              onClick={changeEditMode}
              id="response-triple-dot"
              fontSize="large"
            />
          </div>
        </div>
        <div className="response-footer">
          <div className="response-footer-name">{USER_NAME}</div>
          <div className="response-footer-date">{todayDate}</div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
