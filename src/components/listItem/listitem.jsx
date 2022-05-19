import {
  PlayCircleFilledRounded,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
  ArrowDropDownCircle
} from "@material-ui/icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./listitem.scss";
import { getMovie } from "../../actions/index";

export default function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    try {
      getMovie(item).then((res) => {
        setMovie(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [item]);


  return (
    <Link to={{ pathname: '/watch', movie: movie }}>
      <div
        className="listItem"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="imgList">
          <img src={movie.img} alt={movie.title} />
        </div>
        {isHovered && (
          <>
            <video src={movie.trailer} autoPlay={true} loop />
            <div className="itemInfo">
              <div className="buttons">
                <div className="icons">
                  <PlayCircleFilledRounded className="icon" />
                  <Add className="icon" />
                  <ThumbUpAltOutlined className="icon" />
                  <ThumbDownOutlined className="icon" />
                  <ArrowDropDownCircle className="icon icon-info" />
                </div>
              </div>

              <div className="itemInfoTop">
                <p className="item-text limit">+{movie.limit}</p>
                <span className="item-text">{movie.year}</span>
                <span className="item-text">1h45p</span>
              </div>
              {/* <div className="desc">{movie.description}</div>
              <div className="genre">{movie.genre}</div> */}
            </div>
          </>
        )}
      </div>
    </Link>
  );
}
