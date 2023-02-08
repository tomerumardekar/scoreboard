import { string } from "prop-types";
import React from "react";
import "../../index.css";

export default function GameImage({ imagePath }) {
  return <img src={imagePath} className="gameImage" alt="football" />;
}

/* GameImage.prototype = {
  imagePath: propTypes.string.isRequired,
}; */

GameImage.propTypes = {
  imagePath: string.isRequired,
};
