import AbstractView from "../AbstractView.js";
import About from "./About.js";
import Delivery from "./Delivery.js";
import Hero from "./Hero.js";
import ProductsGlimpse from "./ProductsGlimpse.js";

class HomeView extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("CoffeeShop - Acceuil");
  }
  async getHtml() {
    return `
    ${Hero()}
    ${About()}
    ${await ProductsGlimpse()}
    ${Delivery()}
    `;
  }
}
const Home = {
  route: "/",
  view: HomeView,
};

export default Home;
