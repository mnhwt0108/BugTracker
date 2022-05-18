import { MdArrowBackIosNew } from "react-icons/md";
import { useLocation, Link } from "react-router-dom";
import "./watch.scss";

export default function Watch() {
  const location = useLocation();
  const movie = location.movie;
  
  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <MdArrowBackIosNew />
          Home
        </div>
      </Link>
      <video className="video" autoPlay progress controls src={movie.video} />
    </div>
  );
}
