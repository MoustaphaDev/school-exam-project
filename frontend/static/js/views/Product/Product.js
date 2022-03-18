import AbstractView from "../AbstractView.js";
import productsData from "../../../productsData.js";

class ProductView extends AbstractView {
  constructor(params) {
    super(params);
    this.product = productsData.data.find(
      (product) => product.id === parseInt(params.id)
    );
    this.setTitle(this.product.title);
  }
  async getHtml() {
    return `
    <div class="grid grid-cols-2 overflow-hidden">
      <div class="pb-24 flex flex-col justify-evenly items-center h-screen pt-48">
        <img class="h-full flex w-auto justify-center items-center hover:scale-110 transition-transform pointer-events-auto" src='${this.product.url}' />
      </div>
      <div class="bg-gray-100 w-full h-full pt-48 pl-12 mt-8">
        <h1 class="font-bold text-6xl text-ellipsis overflow-hidden whitespace-nowrap w-[24ch]">${this.product.title}</h1>
        <h2 class="text-base py-2 px-4 text-white bg-orange-400 border-2 border-dashed border-white inline-block font-extrabold mt-4">${this.product.price}</h2>
        <p class="max-w-[60ch] pt-6 pb-12 text-gray-900">${this.product.description}</p>
        <div class="w-full mx-auto h-full flex gap-8">
          <a class="w-1/3 text-center h-12 transition-colors bg-[#0f0027] text-white hover:text-[#0f0027] hover:text-white hover:bg-white  py-2 border-2 border-black" data-link href='/checkout'>Acheter</a>
          <a class="w-1/3 block h-12 text-center transition-colors hover:text-white hover:bg-orange-400  py-2 border-2 border-orange-400" data-link href='/card'>Ajouter au panier</a>
        </div>
        </div>        
      </div>
    </div>
      `;
  }
}
const Product = {
  route: "/produits/:id",
  view: ProductView,
};

export default Product;
