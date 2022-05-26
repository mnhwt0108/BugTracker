import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import { useEffect, useState } from "react";

import "./featured.scss";
import {getRandomContent} from '../../actions/index';

export default function Featured({ type, setGenre }) {
  const [content, setContent] = useState({});

  const handleChange = (e) => {
    const value = e.target.value;
    setGenre(value)
  };

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

  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span style={{zIndex: '999'}}>{type === "movies" ? "Movies" : "Series"}</span>
          <select
            name="genre"
            id="genre"
            onChange={handleChange}
          >
            <option>Genre</option>
            <option value='adventure'>Adventure</option>
            <option value='horror'>Horror</option>
            <option value='action'>Action</option>
            <option value='drama'>Drama</option>
          </select>
        </div>
      )}
      <img src={content.img} alt="" />
      <div className="info">
        <img src={content.imgTitle} alt="" />
        <span className="desc">{content.desc}</span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
