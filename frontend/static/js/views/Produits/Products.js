import AbstractView from "../AbstractView.js";
import ProductsData from "/static/productsData.js";

class ProductsView extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Products list");
  }
  async getHtml() {
    const products = ProductsData.data;
    return `<div class="mt-36 mx-16 mb-36">
      <h1 class="font-bold text-4xl text-center">Tous les produits</h1>
      <div class="grid px-32 grid-cols-4 gap-x-12 gap-y-8 py-4  my-24">
        ${products
          .map((product) => {
            const productUrl = product.url;

            return `
            <div class="flex flex-col justify-evenly items-center relative">
                <a data-link class="flex w-full justify-center items-center h-3/5 hover:scale-110 transition-transform" href='/produits/${product.id}'><img class="h-full" src='${productUrl}' /></a>
                <h1 class="font-bold text-center text-ellipsis overflow-hidden whitespace-nowrap w-[24ch]">${product.title}</h1>
                <h2 class="scale-75 text-base py-2 px-4 text-white bg-orange-400 border-2 border-dashed border-white inline-block font-extrabold absolute right-0 top-0">${product.price}</h2>
                <div class="w-full mx-auto">
                    <a class="w-full block text-center transition-colors hover:text-white hover:bg-[#0f0027]  py-2 border-2 border-black" data-link href='/produits/${product.id}'>Details</a>
                </div>
            </div>
                `;
          })
          .join("\n")}
    </div>
    </div>`;
  }
}
const Products = {
  route: "/produits",
  view: ProductsView,
};

export default Products;
