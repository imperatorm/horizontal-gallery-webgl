import App from "./App/App";
import "./styles/styles.scss";
import "./styles/fonts.scss";

const canvas = document.querySelector(".experience");
const app = new App({ canvas });

var options = {
    "animate": true,
    "patternWidth": 600,
    "patternHeight": 600,
    "grainOpacity": 0.15,
    "grainDensity": 1,
    "grainWidth": 0.7,
    "grainHeight": 0.7,
  }
  grained("#grain", options);