import React from "react";
import { Link } from "react-router-dom";
import "./Info.css";

const Info = ({ item, loading }) => {
  const { name, id } = item;
  return (
    <div>
      {item.length < 1 ? 'loading..'  : (
        <header className="info">
          <h1>{name}</h1>

          <Link to={`/github/${id}`} className="info-link">
            {" "}
            See More
          </Link>
        </header>
      )}
    </div>
  );
};

export default Info;
