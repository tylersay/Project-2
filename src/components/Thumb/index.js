import React from "react";
import { Image } from "./Thumbs.styles";
import { Link } from "react-router-dom";

const Thumb = ({ image, movieID, clickable }) => {
  return (
    <div>
      {clickable ? (
        <Link to={`/${movieID}`}>
          
          <Image src={image} alt="movie-thumb" />
        </Link>
      ) : (
        <Image src={image} alt="movie-thumb" />
      )}
     
    </div>
  );
};

export default Thumb;
