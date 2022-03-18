import { router, navigateTo } from "./router/router.js";
import { Navbar } from "./partials/index.js";
import initCursor from "./utils/cursor.js";
import initStickNav from "./utils/stickyNav.js";
import { Footer } from "./partials/index.js";

initCursor();

document.getElementById("nav").innerHTML = Navbar();
document.getElementById("footer").innerHTML = Footer();
initStickNav();

window.addEventListener("popstate", router);
document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
  router();
});
