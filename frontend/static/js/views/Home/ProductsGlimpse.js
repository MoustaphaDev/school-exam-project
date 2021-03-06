import ProductsData from "/static/productsData.js";

const ProductsGlimpse = () => {
  const [prod1, prod2, prod3] = ProductsData.data;
  return `
    <h2 class="font-bold mb-20 text-xl uppercase text-center">Nos produits</h2>
    <div class="grid px-44 grid-cols-3 gap-x-12 gap-y-8 py-4  myb44">
        ${[prod1, prod2, prod3]
          .map((product, idx) => {
            const productUrl = product.url;

            return `
            <div class="flex flex-col justify-evenly items-center">
                <a data-link class="flex w-full transition-transform justify-center items-center h-3/5 ${
                  idx === 1
                    ? "hover:scale-[1.3] scale-[1.2] -translate-y-12"
                    : "hover:scale-110"
                }" href='/produits/${
              product.id
            }'><img class="h-full" src='${productUrl}' /></a>
                <h1 class="font-bold text-center text-ellipsis overflow-hidden whitespace-nowrap w-[24ch] ${
                  idx === 1 ? "scale-[1.3]" : ""
                }">${product.title}</h1>
                <div class="w-full mx-auto">
                    <a class="w-full block text-center transition-colors hover:text-white hover:bg-[#0f0027]  py-2 border-2 border-black" data-link href='/produits/${
                      product.id
                    }'>Details</a>
                </div>
            </div>
                `;
          })
          .join("\n")}
    </div>
    <a data-link href="/produits" class="mt-12 text-orange-400 hover:bg-orange-400 hover:text-white transition-colors w-48 text-center text-lg font-bold py-4 border-2 border-orange-400 mx-auto block">Voir plus</a>
  `;
};

export default ProductsGlimpse;
