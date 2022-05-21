import { ArrowBackOutlined } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";

import "./watch.scss";

export default function Watch() {
  const location = useLocation();
  const movie = location.movie;

  const trailer ="https://res.cloudinary.com/nguyenle23/video/upload/v1653143918/moon-knight.mp4";

  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <video className="video" autoPlay progress controls src={trailer} />
    </div>
  );
}
