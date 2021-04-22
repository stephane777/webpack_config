import add from "./utils/addition";
import welcome from "./utils/welcome";
import "./index.css";
import webpackImg from "./assets/img/webpack.png";

console.log(welcome("Stehane", "Candelas"));
console.log(`20+25=${add(20, 25)}`);

const body = document.querySelector("body");
body.innerHTML = `<img src=${webpackImg}/>`;
