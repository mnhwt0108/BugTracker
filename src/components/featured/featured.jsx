import { useEffect, useState } from "react";
import { MdPlayArrow, MdOutlineInfo } from "react-icons/md";
import "./featured.scss";
import {getRandomContent} from '../../actions/index';

export default function Featured({ type }) {
  const [content, setContent] = useState({});

  useEffect(() => {
    try {
      getRandomContent(type)
        .then(res => {
          setContent(res.data[0]);
        })
    } catch (error) {
      console.log(error);
    }
  },[type]);

  console.log(content);

  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        src={content.img}
        alt=""
      />
      <div className="info">
        <img
          src={content.img}
          alt=""
        />
        <span className="desc">
          {content.description}
        </span>
        <div className="buttons">
          <button className="play">
            <MdPlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <MdOutlineInfo />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
