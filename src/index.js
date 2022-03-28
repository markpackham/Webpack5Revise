// import { v4 as uuidv4 } from "uuid";
import generateJoke from "./generateJoke";
import "./styles/main.scss";
import laughing from "./assets/laughing.svg";

const laughImg = document.getElementById("laughImg");
laughImg.src = laughing;

console.log(generateJoke());
