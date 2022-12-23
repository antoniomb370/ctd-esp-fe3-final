import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./utils/links";

const Card = ({ name, username, id }) => {
  const [isFav, setIsFav] = useState(false);
  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    const isFav = favs.find((fav) => fav.id === id) ? true : false;
    setIsFav(isFav);
  }, []);
  const handleFavs = () => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    let newFavs;
    if (favs.find((fav) => fav.id === id)) {
      newFavs = favs.filter((fav) => fav.id !== id);
    } else {
      newFavs = [...favs, { name, username, id }];
    }
    setIsFav(!isFav);
    localStorage.setItem("favorites", JSON.stringify(newFavs));
  };
  return (
    <div className="card">
      <Link to={`${links.dentista.path}/${id}`}>
        <img src="https://i.pinimg.com/564x/56/d1/c0/56d1c032884032f4216b9bc790c00a1e.jpg" alt={username} />
        <h4>{name}</h4>
        <p>{username}</p>
      </Link>
      <button onClick={handleFavs} className="favButton">
        <span className={`material-symbols-outlined ${isFav ? "fav" : ""}`}>
        </span>
        {`${!isFav ? "🤍" : "❤"}`}
      </button>
    </div>
  );
};

export default Card;
