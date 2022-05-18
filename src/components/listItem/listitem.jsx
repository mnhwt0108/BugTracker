import "./listitem.scss";
import {
  MdPlayArrow,
  MdAddCircleOutline,
  MdOutlineThumbUp,
  MdOutlineThumbDown,
} from "react-icons/md";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {getMovie} from "../../actions/index";
import { useHistory } from "react-router-dom";

export default function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    try {
      getMovie(item)
        .then(res => {
          setMovie(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  },[item]);

  // const trailer ="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

  return (
    <Link to={{pathname: `/watch`, movie: movie}}>
        {console.log(movie)}
      <div
        className="listItem"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={movie.img}
          alt={movie.title}
        />
        {isHovered && (
          <>
            <video src={movie.trailer} autoPlay={true} loop />
            <div className="itemInfo">
              <div className="icons">
                <MdPlayArrow className="icon" />
                <MdAddCircleOutline className="icon" />
                <MdOutlineThumbUp className="icon" />
                <MdOutlineThumbDown className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>{movie.duration}</span>
                <span className="limit">+{movie.limit}</span>
                <span>{movie.year}</span>
              </div>
              <div className="desc">{movie.description}</div>
              <div className="genre">{movie.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
}
