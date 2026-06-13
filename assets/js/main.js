import { initNavbar } from "../../components/navbar.js?v=20260612";
import { initFooter } from "../../components/footer.js?v=20260612";
import { initTheme, initGsapAnimations, initFramerMotion, initInteractions } from "../../components/animations.js?v=20260612";

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initFooter();
  initTheme();
  initInteractions();
  initGsapAnimations();
  initFramerMotion();
});
