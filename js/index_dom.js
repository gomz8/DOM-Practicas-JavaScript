import hamburgerMenu from "../js/menu_hamburgesa.js";
import {digitalClock, alarm} from "../js/reloj.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {

hamburgerMenu(".panel-btn",".panel", ".menu a");

digitalClock("#reloj","#activar-reloj","#desactivar-reloj");

});
