import React from 'react';
import './Card.css';
import makeRequest from '../util/makeRequest';
import { UPDATE_BLOG_DATA } from '../constants/apiEndpoints';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandsClapping, faHeart } from '@fortawesome/free-solid-svg-icons';

const Card = (props) => {
  const [numClaps, setNumClaps] = React.useState(props.claps);
  const addClapHandler = () => {
    setNumClaps(numClaps + 1);
  };

  const [liked, setLiked] = React.useState(props.liked);
  const likeDislikeHandler = (e) => {
    setLiked(!liked);
  };
  
  React.useEffect(()=>{
    makeRequest(UPDATE_BLOG_DATA(props.id),{data:{claps:numClaps,liked:liked}})
  },[numClaps,liked]);

  return (
    <div data-testid="blogData">
      <div className="card" >
        <img src={props.image} alt="" />
        <div className="timestamp">
          <p className="date">{props.date}</p>
          <p className="time">⏰ {props.reading_time}</p>
        </div>
        <h3>{props.title}</h3>
        <p className='card-description'>
          {props.description}
        </p>
        <hr />
        <div className="icons">
          <div className="clap">
            <FontAwesomeIcon icon={faHandsClapping} onClick={addClapHandler} data-testid='clapIcon' />
            <p className="clapCount" data-testid='clapCount'>{numClaps}</p>
          </div>
          <div className="like">
            <FontAwesomeIcon
              data-testid='likeIcon'
              icon={faHeart}
              color={liked ? 'red' : 'black'}
              onClick={likeDislikeHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
