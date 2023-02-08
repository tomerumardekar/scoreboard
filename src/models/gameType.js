import { shape } from "prop-types";
import detailsType from "./detailsType";

const gameType = shape({ img: string, details: detailsType });
